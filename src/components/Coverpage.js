import React from "react";
import homecover from "../images/homecover.webp";

const MyCoverpage = () => {
  return (
    <section
      className="relative h-screen bg-cover"
      style={{
        backgroundImage: `url(${homecover})`,
        backgroundSize: "cover", 
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh", 
        '@media (max-width: 768px)': {
          backgroundSize: 'contain', 
          backgroundRepeat:'no-repeat',
          backgroundPosition: 'center'         
        },
      }}
    ></section>
  );
};

export default MyCoverpage;
