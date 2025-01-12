import React from 'react';
import { assets } from '../../assets/assets';
import './AppDownload.css';

function AppDownload() {
  return (
    <div className="app-download" id="app-download">
      <p className="download-text">
        Enhance your experience with the <span className="highlight">INNFOODIE App</span>! Download now
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="Play Store" className="app-store-logo" />
        <img src={assets.app_store} alt="App Store" className="app-store-logo" />
      </div>
    </div>
  );
}


export default AppDownload
