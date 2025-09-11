import React from 'react';
import videoAnalysisImg from '../../../assets/images/videoanalytics.jfif'; 

const VideoAnalaytics = () => {
  return (
    <div className="video-analytics-page container" style={{ marginTop: '120px', padding: '20px' }}>
      <h2 className="text-center text-primary mb-4">Video Analytics Solutions</h2>

      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={videoAnalysisImg}
            alt="Video Analytics"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <p>
            Our cutting-edge video analytics solutions leverage AI and machine learning to provide
            real-time insights from video footage. Whether it's monitoring traffic, enhancing security,
            or analyzing customer behavior in retail, our systems are built for speed and accuracy.
          </p>
          <ul>
            <li>🔍 Facial Recognition</li>
            <li>🎯 Object Detection & Tracking</li>
            <li>📊 Heatmap Generation</li>
            <li>🚨 Intrusion & Motion Detection</li>
            <li>📁 Automated Reporting</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VideoAnalaytics;
