// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './projectlist.css';

// const ProjectList = ({ authToken }) => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     // Fetch user projects when the component mounts
//     const fetchUserProjects = async () => {
//       try {
//         const response = await axios.get('http://localhost:9002/projects', {
//           headers: {
//             'auth-token': authToken, // Send the authentication token in the headers
//           },
//         });
//         setProjects(response.data);
//         // setProjects(profile1.json)
        
//       } catch (error) {
//         console.error('Error fetching user projects:', error);
//       }
//     };

//     fetchUserProjects();
//   }, [authToken]);

//   return (
//     <div>
//       <h2>Your Projects</h2>
      
//       {projects.map((project) => (
//         <div key={project._id} className="project-card">
//           {project.imagePaths.map((imagePath, index) => (
//             <img
//               key={index}
//               src={imagePath}
//               alt={`Project ${index}`}
//               className="project-image"
//             />
//           ))}
//           <h3>{project.title}</h3>
//           <p>{project.description}</p>
//           <p>{project.tags}</p>
//           <p>{project.projectType}</p>
//           <a href={project.link} target="_blank" rel="noopener noreferrer">
//             Learn More
//           </a>
//         </div>
//       ))}
//       </div>
//   );
// };

// export default ProjectList;
// // ProjectList.js

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './projectlist.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProjectList = ({ authToken }) => {
  const [projects, setProjects] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    // Fetch user projects when the component mounts
    const fetchUserProjects = async () => {
      try {
        const response = await axios.get('http://localhost:9002/projects', {
          headers: {
            'auth-token': authToken, // Send the authentication token in the headers
          },
        });
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching user projects:', error);
      }
    };

    fetchUserProjects();
  }, [authToken]);

  return (
    <div>
      <h2>Your Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project._id} className="project-card">
            <Carousel
              showThumbs={false}
              showStatus={false}
              emulateTouch={true}
              ref={carouselRef}
              renderArrowPrev={(onClickHandler, hasPrev) =>
                hasPrev && (
                  <div
                    onClick={onClickHandler}
                    title="Previous"
                    className="carousel-arrow-icon carousel-arrow-icon-left"
                  >
                    ◄
                  </div>
                )
              }
              renderArrowNext={(onClickHandler, hasNext) =>
                hasNext && (
                  <div
                    onClick={onClickHandler}
                    title="Next"
                    className="carousel-arrow-icon carousel-arrow-icon-right"
                  >
                    ►
                  </div>
                )
              }
            >
              {project.imagePaths.map((imagePath, index) => (
                <div key={index}>
                  <img
                    src={imagePath}
                    alt={`Project ${index}`}
                    className="project-image"
                  />
                </div>
              ))}
            </Carousel>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>{Array.isArray(project.tags) ? project.tags.join(', ') : project.tags}</p>
            <p>{project.projectType}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="learn-more"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;

