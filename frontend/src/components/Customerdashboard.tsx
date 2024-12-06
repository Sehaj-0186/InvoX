import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Customerhero from "./customerhero";
import Explore from "./explore";
import Subscriptions from "./subscriptions";
import Navbar from "./Navbar";

const Customerdashboard = () => {
  const navigate = useNavigate();

  // Create references for sections
  const customerHeroRef = useRef<HTMLDivElement>(null);
  const exploreRef = useRef<HTMLDivElement>(null);
  const subscriptionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the top of the page on load
    window.scrollTo(0, 0);
  }, []);

  const handleScrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="w-full h-full bg-zinc-950 overflow-hidden">
        {/* Navbar Component */}
        <Navbar
          firstbutton="Home"
          secondbutton="Explore"
          thirdbutton="Subscriptions"
          onFirstButtonClick={() => navigate("/")} // Redirect to home route
          onSecondButtonClick={() => handleScrollToSection(exploreRef)} // Scroll to Explore section
          onThirdButtonClick={() => handleScrollToSection(subscriptionsRef)} // Scroll to Subscriptions section
        />
        
        {/* Customerhero Section */}
        <div ref={customerHeroRef}>
          <Customerhero />
        </div>
        
        {/* Explore Section */}
        <div ref={exploreRef}>
          <Explore />
        </div>
        
        {/* Subscriptions Section */}
        <div ref={subscriptionsRef}>
          <Subscriptions />
        </div>
      </div>
    </>
  );
};

export default Customerdashboard;
