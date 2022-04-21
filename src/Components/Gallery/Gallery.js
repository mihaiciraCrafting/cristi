import React from 'react';
import './Gallery.scss';
import { Stack } from '@mui/material';

export default function Gallery(props) {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      direction="row"
      flexWrap="wrap"
      className="gallery"
      gap="2vw"
    >
      {props.children}
    </Stack>
  );
}
