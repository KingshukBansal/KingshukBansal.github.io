import React, { useEffect, useState, useRef } from "react";
import { socials } from "../constants";
import { styles } from "../styles";

const Findme = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const triggerPoint = documentHeight - windowHeight - 200;

      if (scrollTop >= triggerPoint) {
        setShouldAnimate(true);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          observer.disconnect(); // Stop observing once the element is visible
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Adjust as needed
      }
    );

    observer.observe(ref.current);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const middleIndex = Math.floor(socials.length / 2);
  const isOddNumberOfSocials = socials.length % 2 !== 0;

  return (
    <div
      ref={ref}
      className={`py-2 px-6 w-full flex justify-center items-center bottom-2 z-20 bg-primary`}
    >
      <div className={`flex items-center`}>
        {socials.map((social, index) => (
          <a
            key={social.name}
            href={social.Link}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white text-xl mx-3 hover:text-blue-400 ${
              shouldAnimate
                ? isOddNumberOfSocials && index === middleIndex
                  ? "animate-appear"
                  : index < middleIndex
                  ? "animate-slide-left"
                  : "animate-slide-right"
                : ""
            }`}
          >
            <img
              src={social.image}
              alt={social.name}
              className="w-8 h-8 transition-transform transform hover:scale-110"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Findme;
