import React from 'react';
import './Contact.scss';
import { Stack, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      direction="column"
      sx={{ marginTop: '100px' }}
      gap="50px"
      className="contact-container"
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: '75px',
          fontWeight: 'bold',
          fontFamily: "'Jacques Francois', serif",
        }}
      >
        Contact
      </Typography>

      <Stack
        className="socialMedia"
        alignItems="center"
        justifyContent="center"
        gap="100px"
        direction="row"
        flexWrap="wrap"
      >
        <a href="" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a href="" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>

        <a href="" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </Stack>

      <Stack
        alignItems="center"
        justifyContent="center"
        gap="30px"
        direction="row"
        sx={{ padding: '0 2rem 0 2rem' }}
        className="directContact"
        flexWrap="wrap"
      >
        <Stack alignItems="center" justifyContent="center" gap="10px">
          <FontAwesomeIcon icon={faPhone} />
          <a href="tel:+40733619872">+40733619872</a>
        </Stack>

        <Stack alignItems="center" justifyContent="center" gap="10px">
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="mailto:ChristianPhotographer@gmail.com">
            ChristianPhotographer@gmail.com
          </a>
        </Stack>
      </Stack>
    </Stack>
  );
}
