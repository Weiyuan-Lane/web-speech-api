"use client";

import {
  engageSpeechRecognition,
} from '../../../components/dom-web-speech';
import {
  useState,
  useEffect,
} from 'react';
import {
  // Card,
  // CardActionArea,
  // CardContent,
  // CardMedia,
  // CardActions,
  Typography,
  Button,
  Grid2 as Grid,
  Box,
  Divider,
  Chip,
  CircularProgress,
  TextField,
  Snackbar
} from '@mui/material';
import Grow, { GrowProps } from '@mui/material/Grow';
import NorthWestIcon from '@mui/icons-material/NorthWest';
import MicIcon from '@mui/icons-material/Mic';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'

function GrowTransition(props: GrowProps) {
  return <Grow {...props} />;
}

let globalCountingState = false;

export default function Count() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  const [queryText, setQueryText] = useState(query || '');
  const [countOngoing, setCountOngoing] = useState(false);
  const [count, setCount] = useState(0);
  const [speechRecognitionEntity, setSpeechRecognitionEntity] = useState<SpeechRecognition>();
  const [snackBarOpen, setSnackbarOpen] = useState(false);
  const [snackBarText, setSnackbarText] = useState('');

  useEffect(() => {
    globalCountingState = countOngoing;
    return () => {};
  }, [countOngoing]);

  useEffect(() => {
    return () => {
      if (speechRecognitionEntity){
        speechRecognitionEntity.stop();
      }
    };
  }, []);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const startCounting = () => {
    if (countOngoing) {
      return;
    }

    setCount(0);
    setCountOngoing(true);
    startSpeechRecognition();
  }

  const stopCounting = () => {
    if (speechRecognitionEntity){
      speechRecognitionEntity.stop();
      setSpeechRecognitionEntity(undefined);
    }

    if (!countOngoing) {
      return;
    }

    setCountOngoing(false);
  }

  const setQueryTextWrapper = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryText(event.target.value);
    setCount(0);
  };

  const startSpeechRecognition = () => {
    let currentCount = 0;
    const setValueCallback = (result: string, _: number) => {
      if (result === 'stop') {
        setCountOngoing(false);
        return;
      }

      const regex = new RegExp(`\\b${queryText}\\b`, 'gi');
      const matches = result.match(regex);
      currentCount += matches ? matches.length : 0;
      setCount(currentCount);
      setSnackbarText(`You said: "${result}"`);
      setSnackbarOpen(true);
    };
    const endCallback = () => {
      if (globalCountingState) {
        setSpeechRecognitionEntity(engageSpeechRecognition(setValueCallback, endCallback));
      }
    };

    setSpeechRecognitionEntity(engageSpeechRecognition(setValueCallback, endCallback));
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
              <TextField
                fullWidth
                label="Text to count from Mic"
                value={queryText}
                disabled={countOngoing}
                onChange={setQueryTextWrapper}
              />
            </Grid>

            <Grid container size={12} spacing={3}>
              <Grid size={6}>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<MicIcon/>}
                  disabled={!queryText || countOngoing}
                  onClick={startCounting}
                >
                  Start Count
                </Button>
              </Grid>
              <Grid size={6}>
                <Button
                  variant="outlined"
                  fullWidth
                  color="error"
                  startIcon={<StopCircleIcon/>}
                  disabled={!countOngoing}
                  onClick={stopCounting}
                >
                  Stop
                </Button>
              </Grid>
            </Grid>

            <Grid size={12}>
              <Divider
                style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                <Chip label="Output" />
              </Divider>
            </Grid>

            { countOngoing &&
              <>
                <Grid container size={12} spacing={1}>
                  <Grid size={5} container justifyContent="flex-end">
                    <CircularProgress/>
                  </Grid>
                  <Grid
                    size={7}
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    It&apos;s counting. Say something!
                  </Grid>
                </Grid>
                <Grid size={12}>
                  <Divider style={{ paddingBottom: '30px', marginBottom: '30px' }}></Divider>
                </Grid>
              </>
            }

            { (countOngoing || count > 0) &&
              <Grid
                container
                size={12}
                spacing={1}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Typography
                  variant="body1"
                  sx={{ color: 'text.secondary' }}
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  The word <b>&apos;{queryText}&apos;</b> was said <b>{count}</b> times.
                </Typography>
              </Grid>
            }
          </Grid>
        </Box>

        <Snackbar
          open={snackBarOpen}
          onClose={handleSnackbarClose}
          TransitionComponent={GrowTransition}
          message={snackBarText}
          key={GrowTransition.name}
          autoHideDuration={1200}
        />
      </main>
    </div>
  )
}
