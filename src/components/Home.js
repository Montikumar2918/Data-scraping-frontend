import React from "react";
import "./Home.css";


const Home = () => {
  return (
    
    <div className="container">
      <h1 className="text-center">Wel Come</h1>

      <h5 className="text-center pt-4">
        All details collected from Amazon, Flipkart and Snapdeal
        <sub> (Click on Mobiles to view Mobiles specification)</sub>
      </h5>

      <div className="tech-container d-flex justify-content-center">
        <div>
          <h3 className="font-weight-bold">Aim of this website  is to scrape data information from different websites  
             Generally, Data scraping involves accessing numerous websites and collecting data from them. However,
           we can limit ourselves to collect large amounts of information from a single source and use it as a dataset.</h3>
  
        </div>
      </div>
    </div>
    
  );
};

export default Home;
