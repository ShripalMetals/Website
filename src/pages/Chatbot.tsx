import React, { useEffect } from 'react';

const Chatbot: React.FC = () => {
  useEffect(() => {
    // Dynamically load the Tawk.to script when the component is mounted
    const script = document.createElement("script");
    script.async = true;
    script.src = 'https://embed.tawk.to/676a54c5af5bfec1dbe0e72d/1ifrlm9o7';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    // Append the script to the body or head of the document
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything on its own
};

export default Chatbot;
