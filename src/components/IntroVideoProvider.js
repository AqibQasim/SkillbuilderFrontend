import React, { useState } from 'react';
import { IntroVideoContext } from '../../lib/IntroVideoContext';

const IntroVideoProvider = ({ children }) => {
  const [videoId, setVideoId] = useState('1234567');

  return (
    <IntroVideoContext.Provider value={{ videoId, setVideoId }}>
      {children}
    </IntroVideoContext.Provider>
  );
};

export default IntroVideoProvider;
