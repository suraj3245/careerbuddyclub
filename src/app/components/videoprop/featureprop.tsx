import React from "react";

// Define a type for the props if you're using TypeScript
type VideoCardProps = {
  videoId: string;
};

const VideoCard: React.FC<VideoCardProps> = ({ videoId }) => {
  // Styles for the video container to maintain aspect ratio
  const videoWrapperStyle: React.CSSProperties = {
    position: 'relative',
    paddingTop: '56.25%', // 16:9 aspect ratio
    paddingLeft: '10px',
  };

  // Styles for the iframe to make it responsive
  const iframeStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: '10px', // To account for the padding on the container
    right: '10px', // To account for the padding on the container
    width: 'calc(100% - 20px)', // Subtracting the left and right padding
    height: '100%',
    border: '0', // If you prefer no border
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
  const videoId = "Re1g_xooNUE";

  return (
    <>
      <section className="text-feature-one position-relative pt-100 xl-pt-100 lg-pt-100 md-pt-100 pb-100 xl-pb-100">
        <div className="container">
          <div className="row feature-flex">
            <div className="col-lg-5">
              <div className="content-wrapper ps-xxl-4 wow fadeInRight">
                {/* Content goes here */}
                <h2 className="pb-20">What is Career Aptitude Test?</h2>
                 <p>Welcome to the Career Buddy Club's Aptitude Test. Dive into a quick and insightful assessment that will shine a light on your unique personality, cognitive strengths, and professional aptitudes.<br/>
This easy-to-complete test will guide you through a series of questions aimed at pinpointing your capabilities and preferences. Discover your hidden talents and understand how you can apply them in your career path.<br/>
</p>
              </div>
            </div>
            <div className="col-lg-7">
              <VideoCard videoId={videoId} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
