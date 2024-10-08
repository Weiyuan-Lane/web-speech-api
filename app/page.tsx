import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Button,
  Grid2 as Grid,
  Box,
  Divider,
  Chip,
} from '@mui/material';
import Link from 'next/link';

export default function Home() {
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
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                      Web Speech API - Weiyuan&apos;s having fun
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Various speech related experiments!
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid size={12}>
              <Divider
                style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                <Chip label="Speech Recognition - Detect spoken word" />
              </Divider>
            </Grid>

            <Grid
              size={12}
              container
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Button variant="outlined">
                <Link href="/detect-sound">Say a word, and see the API detect it!</Link>
              </Button>
            </Grid>

            <Grid size={12}>
              <Divider
                style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                <Chip label="Speech Recognition - Count spoken word" />
              </Divider>
            </Grid>

            <Grid
              size={12}
              container
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Button variant="outlined">
                <Link href="/detect-sound/count">Count words mentioned from your mic!</Link>
              </Button>
            </Grid>

            <Grid size={12}>
              <Divider
                style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                <Chip label="Text to Speech" />
              </Divider>
            </Grid>

            <Grid
              size={12}
              container
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Button variant="outlined">
                <Link href="/speech">Text to speech using your browser!</Link>
              </Button>
            </Grid>

            <Grid size={12}>
              <Divider
                style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                <Chip label="Video / Audio Recording" />
              </Divider>
            </Grid>

            <Grid
              size={12}
              container
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Button variant="outlined">
                <Link href="/recorder">Recording audio and video content from your browser!</Link>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </main>
    </div>
  );
}
