"use client";

import { engageSpeechRecognition } from '../../components/dom-web-speech';
import { useState, useEffect } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
  Grid2 as Grid,
  Box,
  Divider,
  Chip,
  Tooltip,
  CircularProgress,
  TextField,
  Snackbar
} from '@mui/material';
import Grow, { GrowProps } from '@mui/material/Grow';
import MicIcon from '@mui/icons-material/Mic';
import NorthWestIcon from '@mui/icons-material/NorthWest';
import Link from 'next/link';
import supportedBrowserImage from './supported-browsers-06-10-2024.png';

function GrowTransition(props: GrowProps) {
  return <Grow {...props} />;
}

export default function DetectSound() {
  const [ongoingSpeechRecognition, setOngoingSpeechRecognition] = useState(false);
  const [detectedText, setDetectedText] = useState('');
  const [confidence, setConfidence] = useState(0);
  const [snackBarOpen, setSnackbarOpen] = useState(false);
  const [speechRecognitionEntity, setSpeechRecognitionEntity] = useState<SpeechRecognition>();

  useEffect(() => {
    return () => {
      if (speechRecognitionEntity){
        speechRecognitionEntity.stop();
      }
    };
  }, []);

  const startSpeechRecognition = () => {
    let loaded = false;
    setOngoingSpeechRecognition(true);
    const setValueCallback = (result: string, confidence: number) => {
      loaded = true;
      setDetectedText(result);
      setConfidence(confidence);
      setOngoingSpeechRecognition(false);
    };
    const endCallback = () => {
      if (!loaded) {
        setSpeechRecognitionEntity(engageSpeechRecognition(setValueCallback, endCallback));
        setSnackbarOpen(true);
      } else {
        setSpeechRecognitionEntity(undefined);
      }
    };

    setSpeechRecognitionEntity(engageSpeechRecognition(setValueCallback, endCallback));
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      <main>
        <Box sx={{
          mx: 'auto',
          paddingTop: '25px',
          paddingLeft: '10px',
          paddingRight: '10px',
          width: '100%',
          '@media (min-width: 769px)' : {
            width: '80%'
          },
          '@media (min-width: 1025px)' : {
            width: '60%'
          },
          '@media (min-width: 1201px)' : {
            width: '40%'
          }
        }}>
          <Grid container rowSpacing={1}>
            <Grid size={12}>
              <Button startIcon={<NorthWestIcon/>}>
                <Link href="/">Home</Link>
              </Button>
            </Grid>

            <Grid size={12}>
              <Divider
                style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                <Chip label="Voice Recognition" />
              </Divider>
            </Grid>

            <Grid size={12}>
              <Tooltip title="Click, and then say something!">
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<MicIcon/>}
                  onClick={startSpeechRecognition}
                  disabled={ongoingSpeechRecognition}>
                  Start Speech Recognition
                </Button>
              </Tooltip>
            </Grid>

            <Grid size={12}>
              <Divider
                style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                <Chip label="Output" />
              </Divider>
            </Grid>

            { ongoingSpeechRecognition &&
              <Grid container size={12} spacing={1}>
                <Grid size={6} container justifyContent="flex-end">
                  <CircularProgress/>
                </Grid>
                <Grid
                  size={6}
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  Say something!
                </Grid>
              </Grid>
            }

            { !ongoingSpeechRecognition &&
              <Grid container size={12} spacing={2}>
                <Grid size={6}>
                  <TextField
                    fullWidth
                    label="Detected Text"
                    value={detectedText}
                    slotProps={{
                      input: {
                        readOnly: true,
                      },
                    }}
                  />
                </Grid>
                <Grid size={6}>
                  <TextField
                    fullWidth
                    value={confidence}
                    label="Confidence"
                    slotProps={{
                      input: {
                        readOnly: true,
                      },
                    }}
                  />
                </Grid>
              </Grid>
            }
            { !ongoingSpeechRecognition && detectedText &&
              <Grid container size={12}>
                <Button fullWidth variant="outlined">
                  <Link
                    href={{
                      pathname: '/detect-sound/count',
                      query: {
                        q: detectedText
                      }
                    }}
                  >
                    Try our counting function
                  </Link>
                </Button>
              </Grid>
            }

            <Grid size={12}>
              <Divider
                style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                <Chip label="Disclaimer" />
              </Divider>
            </Grid>

            <Grid size={12}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Not all browsers might be supported. See the following image taken on 6th Oct 2024, where some browsers are not supported.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button>
                    <Link href="https://caniuse.com/mdn-api_speechrecognitionevent" target="_blank">Supported browsers</Link>
                  </Button>
                </CardActions>
                <CardMedia
                  src={supportedBrowserImage.src}
                  component="img"
                  height="50"
                />
              </Card>

            </Grid>
          </Grid>
        </Box>

        <Snackbar
          open={snackBarOpen}
          onClose={handleSnackbarClose}
          TransitionComponent={GrowTransition}
          message='Speech not recognised. Try again!'
          key={GrowTransition.name}
          autoHideDuration={1200}
        />
      </main>
    </div>
  )
}
