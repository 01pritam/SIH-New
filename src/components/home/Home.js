import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './home.css'; // Make sure to import your CSS file

function Home() {
  const [trendingProjects, setTrendingProjects] = useState([]);

  useEffect(() => {
    // Fetch trending projects using Axios when the component mounts
    axios
      .get('http://localhost:9002/trending-projects') // Replace with your API endpoint
      .then((response) => {
        setTrendingProjects(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching trending projects:', error);
      });
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Trending Projects</h1>
      <Carousel
        showThumbs={false}
        showStatus={false}
        width="100%"
        infiniteLoop={true} // Enable infinite loop
        autoPlay={true} // Enable autoplay
        showArrows={true} // Show navigation arrows
        renderArrowPrev={(onClickHandler) => (
          <button
            type="button"
            onClick={onClickHandler}
            className="carousel-arrow left"
          >
            &lt;
          </button>
        )}
        renderArrowNext={(onClickHandler) => (
          <button
            type="button"
            onClick={onClickHandler}
            className="carousel-arrow right"
          >
            &gt;
          </button>
        )}
      >
        {trendingProjects.map((project) => (
          <a
            key={project._id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="carousel-link"
          >
            <div className="carousel-project">
              <div className="carousel-image">
                <img
                  src={project.imagePaths[0]}
                  alt={project.title}
                  className="carousel-image"
                />
              </div>
              <h2 className="carousel-project-title">{project.title}</h2>
              <p className="carousel-description">{project.description}</p>
              <p className="carousel-tags">
                Tags: {project.tags.split(', ').join(', ')}
              </p>
              <p className="carousel-project-type">
                Project Type: {project.projectType}
              </p>
            </div>
          </a>
        ))}
      </Carousel>
      <div className='mid-page'>

        <div className='mid1'>
          <h3>You are here to work hard.</h3>
        </div>









      </div>
      <footer className="footer-distributed">

        <div className="footer-left">
          <h3>Inno<span>Gen</span></h3>

          <p className="footer-links">
            <a href="#">Home</a>
            |
            <a href="#">Projects</a>
            |
            <a href="#">Forge</a>
            |
            <a href="#">Dedication</a>
          </p>

          <p className="footer-company-name">Copyright © 2021 <strong>InnoGen</strong> All rights reserved</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p><span>Ruby</span>
              Kolkata</p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+91 8343212548</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p><a href="innogen@gmail.com">innogen@gmail.com</a></p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            <strong>InnoGen</strong> is a platform to build and showcase your project and get invested.
          </p>
          <div className="footer-icons">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-youtube"></i></a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Home;
