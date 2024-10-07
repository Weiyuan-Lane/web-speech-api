"use client";

import {
  getVoiceLanguages,
  getVoicesForLang,
  speechSynthesis,
  speechSynthesisForDownload,
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
  FormControl,
  Grid2 as Grid,
  InputLabel,
  Link,
  MenuItem,
  Select,
  SelectChangeEvent,
  Slider,
  TextField,
  Tooltip,
  Typography
} from "@mui/material";
import NorthWestIcon from '@mui/icons-material/NorthWest';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

export default function Speech() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const voiceLanguages = getVoiceLanguages();
  const [voiceLanguage, setVoiceLanguage] = useState(voiceLanguages[0] || '');
  const [voices, setVoices] = useState(getVoicesForLang(voiceLanguage) || '');
  const [voice, setVoice] = useState(voices[0] || '');
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  const [volume, setVolume] = useState(1);
  const [textForSynthesis, setTextForSynthesis] = useState('Hello, World!');

  const handleChangeForVoiceLanguage = (event: SelectChangeEvent) => {
    const selectedLanguage = event.target.value as string;
    setVoiceLanguage(selectedLanguage);

    const voices = getVoicesForLang(selectedLanguage);
    setVoices(voices);
    setVoice(voices[0]);
  };

  const handleChangeForVoice = (event: SelectChangeEvent) => {
    const selectedVoice = event.target.value as string;
    setVoice(selectedVoice);
  };

  const speak = () => {
    speechSynthesis({
      text: textForSynthesis,
      language: voiceLanguage,
      voice,
      pitch,
      rate,
      volume,
    });
  }
  const downloadMp3File = () => {
    speechSynthesisForDownload({
      text: textForSynthesis,
      language: voiceLanguage,
      voice,
      pitch,
      rate,
      volume,
    });
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
                <Chip label="Speech Synthesis" />
              </Divider>
            </Grid>

            <Grid size={12}>
              <TextField
                fullWidth
                multiline
                label="Add text to synthesis to a voice"
                value={textForSynthesis}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setTextForSynthesis(event.target.value)}}
              />
            </Grid>

            <Grid container size={12} spacing={2}>
              <Grid size={{ xs: 12, sm: 4 }}>
                <FormControl fullWidth>
                  <InputLabel id="speech-language">Language</InputLabel>
                  <Select
                    labelId="speech-language"
                    value={voiceLanguage}
                    label="Language"
                    onChange={handleChangeForVoiceLanguage}
                  >
                    {voiceLanguages.map((language) => {
                      return (
                        <MenuItem key={language} value={language}>{language}</MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12, sm: 8 }}>
                <FormControl fullWidth>
                  <InputLabel id="speech-voice">Voice</InputLabel>
                  <Select
                    labelId="speech-voice"
                    value={voice}
                    label="Voice"
                    onChange={handleChangeForVoice}
                  >
                    {voices.map((voice) => {
                      return (
                        <MenuItem key={voice} value={voice}>{voice}</MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>

              <Grid size={{ xs: 12, sm: 4 }} style={{ padding: '0 10px'}}>
                <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
                  Rate
                </Typography>
                <Tooltip title="Rate is from 0.1 to 10, defaults to 1, and goes faster as it goes up">
                  <Slider
                    aria-label="Rate"
                    color="info"
                    step={0.1}
                    min={0.1}
                    max={10}
                    value={rate}
                    valueLabelDisplay="auto"
                    onChange={(_, newValue) => setRate(newValue as number)}
                  />
                </Tooltip>
              </Grid>

              <Grid size={{ xs: 12, sm: 4 }} style={{ padding: '0 10px'}}>
                <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
                  Pitch
                </Typography>
                <Tooltip title="Pitch is from 0 to 2, defaults to 1">
                  <Slider
                    aria-label="Pitch"
                    color="success"
                    step={0.01}
                    min={0}
                    max={2}
                    value={pitch}
                    valueLabelDisplay="auto"
                    onChange={(_, newValue) => setPitch(newValue as number)}
                  />
                </Tooltip>
              </Grid>

              <Grid size={{ xs: 12, sm: 4 }} style={{ padding: '0 10px'}}>
                <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
                  Volume
                </Typography>
                <Tooltip title="Volume is from 0 to 1, defaults to normal volume at 1">
                  <Slider
                    aria-label="Volume"
                    color="warning"
                    step={0.01}
                    min={0}
                    max={1}
                    value={volume}
                    valueLabelDisplay="auto"
                    onChange={(_, newValue) => setVolume(newValue as number)}
                  />
                </Tooltip>
              </Grid>
            </Grid>

            <Grid size={12}>
              <Divider
                style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                <Chip label="Output" />
              </Divider>
            </Grid>

            <Grid container size={12} spacing={3}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<RecordVoiceOverIcon/>}
                  disabled={!textForSynthesis}
                  onClick={speak}
                >
                  Speak!
                </Button>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<DownloadForOfflineIcon/>}
                  disabled={true}
                  onClick={downloadMp3File}
                >
                  Download as MP3
                </Button>
              </Grid>
            </Grid>
          </Grid>

        </Box>
      </main>
    </div>
  );
}
