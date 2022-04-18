import React from 'react';
import './Portfolio.scss';
import { Stack, Typography } from '@mui/material';
import Portrait from '../../Assets/img/portrait.png';
import Nature from '../../Assets/img/nature.png';
import Eveniment from '../../Assets/img/eveniment.png';
import Street from '../../Assets/img/street.png';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      direction="column"
      sx={{ marginTop: '100px' }}
      gap="50px"
    >
      <Typography variant="h1" sx={{ fontSize: '75px', fontWeight: 'bold' }}>
        Portofoliu
      </Typography>

      <Stack
        alignItems="center"
        justifyContent="center"
        direction="row"
        flexWrap="wrap"
        className="portfolio-container"
      >
        <div>
          <Link to="/portrait">
            <img src={Portrait} />
          </Link>
        </div>

        <div>
          <Link to="/nature">
            <img src={Nature} />
          </Link>
        </div>

        <div>
          <Link to="/eveniment">
            <img src={Eveniment} />
          </Link>
        </div>

        <div>
          <Link to="/street">
            <img src={Street} />
          </Link>
        </div>
      </Stack>
    </Stack>
  );
}
