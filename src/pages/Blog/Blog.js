import React from "react";
import AnimatedText from "react-animated-text-content";
const Blog = () => {
  return (
    <div className="text-center mt-24 text-5xl text-cyan-50">
      <AnimatedText
        type="words" // animate words or chars
        animation={{
          x: "200px",
          y: "-20px",
          scale: 1.1,
          ease: "ease-in-out",
        }}
        animationType="float"
        interval={0.06}
        duration={0.8}
        tag="p"
        className="animated-paragraph"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
      >
        Coming Soon
      </AnimatedText>
    </div>
  );
};

export default Blog;
