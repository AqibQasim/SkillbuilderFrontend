import React, { useState } from 'react';
import { IntroVideoContext } from '../../lib/IntroVideoContext';

const IntroVideoProvider = ({ children }) => {
  const [videoId, setVideoId] = useState('');

  return (
    <IntroVideoContext.Provider value={{ videoId, setVideoId }}>
      {children}
    </IntroVideoContext.Provider>
  );
};

export default IntroVideoProvider;
