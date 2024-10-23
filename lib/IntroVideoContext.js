import React, { createContext, useState } from "react";

export const IntroVideoContext = createContext();

export const IntroVideoProvider = ({ children }) => {
  const [videoId, setVideoId] = useState("");

  return (
    <IntroVideoContext.Provider value={{ videoId, setVideoId }}>
      {children}
    </IntroVideoContext.Provider>
  );
};
