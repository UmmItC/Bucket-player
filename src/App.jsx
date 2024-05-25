import { useState } from 'react'
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

const videoSrc = {
  type: "video",
  sources: [
    {
      src: "ZRtdQ81jPUQ",
      provider: "youtube"
    }
  ]
};

function App() {

  return (
    <>
     <Plyr source={videoSrc} />
    </>
  )
}

export default App;
