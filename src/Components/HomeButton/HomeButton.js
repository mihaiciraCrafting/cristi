import React from 'react';
import './HomeButton.scss';
import { Stack, Typography } from '@mui/material';
import Logo from '../../Assets/svg/SmallLogo.svg';
import { useNavigate } from 'react-router-dom';

export default function HomeButton() {
  const navigate = useNavigate();

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      direction="row"
      gap="10px"
      sx={{
        position: 'absolute',
        top: '10px',
        left: '10px',
      }}
      className="homeButton"
      onClick={() => {
        navigate('/');
      }}
    >
      <img src={Logo} />
      <h1>Home</h1>
    </Stack>
  );
}
