"use client";

import {
  recordMediaForDownload,
  WeiyuanMediaRecorder,
} from '../../components/dom-web-speech';
import {
  useEffect,
  useState,
} from 'react';
import {
  Box,
  Button,
  Chip,
  Divider,
  Grid2 as Grid,
  Link,
} from "@mui/material";
import NorthWestIcon from '@mui/icons-material/NorthWest';
import MicIcon from '@mui/icons-material/Mic';
import VideocamIcon from '@mui/icons-material/Videocam';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';

export default function Speech() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [recorder, setRecorder] = useState<WeiyuanMediaRecorder|null>(null);
  const [isRecordingScreenAudio, setIsRecordingScreenAudio] = useState(false);
  const [isRecordingScreenVideo, setIsRecordingScreenVideo] = useState(false);
  const [isRecordingUserAudio, setIsRecordingUserAudio] = useState(false);
  const [isRecordingUserVideo, setIsRecordingUserVideo] = useState(false);

  const startRecordingScreenAudio = () => {
    recordMediaForDownload({
      video: false,
      systemMedia: true,
    }).then((recorder) => {
      setRecorder(recorder);
    });

    setIsRecordingScreenAudio(true);
    setIsRecordingScreenVideo(false);
    setIsRecordingUserAudio(false);
    setIsRecordingUserVideo(false);
  }

  const startRecordingScreenVideo = () => {
    recordMediaForDownload({
      video: true,
      systemMedia: true,
    }).then((recorder) => {
      setRecorder(recorder);
    });

    setIsRecordingScreenAudio(false);
    setIsRecordingScreenVideo(true);
    setIsRecordingUserAudio(false);
    setIsRecordingUserVideo(false);
  }

  const startRecordingUserAudio = () => {
    recordMediaForDownload({
      video: false,
      systemMedia: false,
    }).then((recorder) => {
      setRecorder(recorder);
    });

    setIsRecordingScreenAudio(false);
    setIsRecordingScreenVideo(false);
    setIsRecordingUserAudio(true);
    setIsRecordingUserVideo(false);
  }

  const startRecordingUserVideo = () => {
    recordMediaForDownload({
      video: true,
      systemMedia: false,
    }).then((recorder) => {
      setRecorder(recorder);
    });

    setIsRecordingScreenAudio(false);
    setIsRecordingScreenVideo(false);
    setIsRecordingUserAudio(false);
    setIsRecordingUserVideo(true);
  }

  const stopRecording = () => {
    if (recorder) {
      recorder.stop();
    }
    setRecorder(null);
    setIsRecordingScreenAudio(false);
    setIsRecordingScreenVideo(false);
    setIsRecordingUserAudio(false);
    setIsRecordingUserVideo(false);
  }

  if (!isClient) {
    return null;
  }

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

          <Grid container rowSpacing={2}>
            <Grid size={12}>
              <Button startIcon={<NorthWestIcon/>}>
                <Link href="/">Home</Link>
              </Button>
            </Grid>

            <Grid size={12}>
              <Divider
                style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                <Chip label="Recording Functions (from system media - other screen/browser tab)" />
              </Divider>
            </Grid>

            <Grid container size={12} spacing={3}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<MusicVideoIcon/>}
                  disabled={isRecordingScreenVideo || isRecordingUserAudio || isRecordingUserVideo}
                  onClick={isRecordingScreenAudio ? stopRecording : startRecordingScreenAudio}
                >
                  { isRecordingScreenAudio ? 'Stop' : 'Record Screen Audio' }
                </Button>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<SmartDisplayIcon/>}
                  disabled={isRecordingScreenAudio || isRecordingUserAudio || isRecordingUserVideo}
                  onClick={isRecordingScreenVideo ? stopRecording : startRecordingScreenVideo}
                >
                  { isRecordingScreenVideo ? 'Stop' : 'Record Screen Video' }
                </Button>
              </Grid>
            </Grid>

            <Grid size={12}>
              <Divider
                style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                <Chip label="Recording Functions (from user media - camera/mic)" />
              </Divider>
            </Grid>

            <Grid container size={12} spacing={3}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<MicIcon/>}
                  disabled={isRecordingScreenAudio || isRecordingScreenVideo || isRecordingUserVideo}
                  onClick={isRecordingUserAudio ? stopRecording : startRecordingUserAudio}
                >
                  { isRecordingUserAudio ? 'Stop' : 'Record From Mic' }
                </Button>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<VideocamIcon/>}
                  disabled={isRecordingScreenAudio || isRecordingScreenVideo || isRecordingUserAudio}
                  onClick={isRecordingUserVideo ? stopRecording : startRecordingUserVideo}
                >
                  { isRecordingUserVideo ? 'Stop' : 'Record From Camera' }
                </Button>
              </Grid>
            </Grid>
          </Grid>

        </Box>
      </main>
    </div>
  );
}
