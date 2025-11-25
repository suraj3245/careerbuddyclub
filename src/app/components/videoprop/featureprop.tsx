import React from "react";

type VideoCardProps = {
  videoId: string;
};

const VideoCard: React.FC<VideoCardProps> = ({ videoId }) => {
  const videoWrapperStyle: React.CSSProperties = {
    position: 'relative',
    paddingTop: '56.25%', 
  };

  const iframeStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    border: '0', 
  };

  return (
    <div className="video-card" style={videoWrapperStyle}>
      <iframe
        style={iframeStyle}
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const FeatureSection: React.FC = () => {
  const videoId = "fwfZJ2FAYHs";

  return (
    <>
      <section className="text-feature-one position-relative pt-100 xl-pt-100 lg-pt-100 md-pt-100 pb-100 xl-pb-100">
        <div className="container">
          <div className="row feature-flex align-items-center">
            
            
            <div className="col-lg-7">
              <div className="content-wrapper ps-xxl-4 wow fadeInRight">
                <h2 className="pb-20">What is a career aptitude test?</h2>
                <p>
                 Welcome to the Career Buddy Club's Aptitude Test. Dive into a quick and insightful assessment that will shine a light on your unique personality, cognitive strengths, and professional aptitudes.<br/>
                 This easy-to-complete test will guide you through a series of questions aimed at pinpointing your capabilities and preferences. Discover your hidden talents and understand how you can apply them in your career path.<br/>
                 Receive a detailed report with personalized feedback to set achievable goals and take control of your personal and professional development. Unlock your full potential with CBC's Career Aptitude Test - try it today and experience the difference in your life.<br/>
                </p>
              </div>
            </div>
            
           
            <div className="col-lg-5">
              <VideoCard videoId={videoId}/>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSection;