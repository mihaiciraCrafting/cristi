import React, { useState, useEffect, useRef } from 'react';
import Gallery from '../Gallery/Gallery';
import { Stack, Box } from '@mui/material';
import Header from '../Header/Header';
import HomeButton from '../HomeButton/HomeButton';
import './Street.scss';

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

export default function Street() {
  const [focused, setFocused] = useState(null);

  const Images = importAll(
    require.context('../../Assets/Street', false, /\.(png|jpe?g|svg|JPE?G)$/)
  );

  return (
    <div>
      <Header />
      <HomeButton />

      <Gallery>
        {Object.keys(Images).map((key, i) => (
          <img
            key={`img-${key}-${i}`}
            src={Images[key]}
            onClick={() => {
              setFocused(i);
            }}
          />
        ))}
      </Gallery>

      {focused != null && (
        <FocusedGallery
          Images={Images}
          focused={focused}
          onClose={() => {
            setFocused(null);
          }}
          changeFocused={setFocused}
        />
      )}
    </div>
  );
}

function FocusedGallery(props) {
  const leftBtn = useRef();
  const rightBtn = useRef();

  const previous = (i) => {
    if (i == 0) return Object.keys(props.Images).length - 1;
    return i - 1;
  };

  const next = (i) => {
    if (i == Object.keys(props.Images).length - 1) return 0;
    return i + 1;
  };

  return (
    <Stack
      className="focusedGallery"
      alignItems="center"
      justifyContent="center"
    >
      <Stack>
        <Box className="closingBar">
          <button onClick={props.onClose}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 6L3.5 3.5M6 1L3.5 3.5M3.5 3.5L1 1L6 6"
                stroke="#4E4E4E"
              />
            </svg>
          </button>
        </Box>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction="row"
          className="imageContainer"
        >
          <button
            onClick={() => {
              props.changeFocused(previous(props.focused));
            }}
            ref={leftBtn}
          >
            &#60;
          </button>
          <img src={props.Images[Object.keys(props.Images)[props.focused]]} />
          <button
            onClick={() => {
              props.changeFocused(next(props.focused));
            }}
            ref={rightBtn}
          >
            &#62;
          </button>
        </Stack>
      </Stack>
    </Stack>
  );
}
