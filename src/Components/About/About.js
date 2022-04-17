import React from 'react';
import './About.scss';
import { Stack, Typography } from '@mui/material';
import CristiBigPic from '../../Assets/img/cristi_bigPic.png';

export default function About() {
  return (
    <Stack
      alignItems="center"
      justifyContent="space-evenly"
      direction="row"
      className="about-section"
    >
      <Stack
        alignItems="center"
        justifyContent="space-evenly"
        direction="column"
        sx={{ maxWidth: '400px', textAlign: 'left' }}
        gap="30px"
      >
        <Typography variant="h2">Despre mine</Typography>
        <Typography variant="p" sx={{ fontSize: '20px' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </Stack>

      <img src={CristiBigPic} />
    </Stack>
  );
}
