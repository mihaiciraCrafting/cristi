import React from 'react';
import './Portfolio.scss';
import { Stack, Typography } from '@mui/material';
import Portrait from '../../Assets/img/portfolio_portrait.png';

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
          <a href="">
            <img src={Portrait} />
          </a>
        </div>

        <div>
          <a href="">
            <img src={Portrait} />
          </a>
        </div>

        <div>
          <a href="">
            <img src={Portrait} />
          </a>
        </div>

        <div>
          <a href="">
            <img src={Portrait} />
          </a>
        </div>
      </Stack>
    </Stack>
  );
}
