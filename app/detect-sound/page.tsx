"use client";

import { engageSpeechRecognition } from '../../components/dom-web-speech';
import { useState } from 'react';
import Image from 'next/image';
import {
  Button,
  Grid2 as Grid,
  Box,
  Divider,
  Chip,
  Tooltip,
  CircularProgress,
  TextField
} from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import supportedBrowserImage from './supported-browsers-06-10-2024.png';

export default function DetectSound() {
  const [ongoingSpeechRecognition, setOngoingSpeechRecognition] = useState(false);
  const [detectedText, setDetectedText] = useState('');
  const [confidence, setConfidence] = useState(0);

  const startSpeechRecognition = () => {
    setOngoingSpeechRecognition(true);
    engageSpeechRecognition((result: string, confidence: number) => {
      setDetectedText(result);
      setConfidence(confidence);
      setOngoingSpeechRecognition(false);
    });
  };

  return (
    <div>
      <main>
        <Box sx={{
          mx: 'auto',
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

            <Grid size={12}>
              <Divider
                style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                <Chip label="Disclaimer" />
              </Divider>
            </Grid>

            <Grid size={12} style={{ fontFamily: "'Roboto'", textAlign: 'justify', lineHeight: '25px' }}>
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.08)', padding: '15px 25px', borderRadius: '10px' }}>
                <p>Not all browsers might be supported. See the following image taken on 6th Oct 2024, where some browsers are not supported. See <a href="https://caniuse.com/mdn-api_speechrecognitionevent" target="_blank">here</a> for more details.</p>
                <br/>
                <Image
                  src={supportedBrowserImage.src}
                  alt="Supported Browsers"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </Grid>
          </Grid>
        </Box>
      </main>
    </div>
  )
}
