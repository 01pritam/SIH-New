// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import './contestd.css';

// const ContestDetail = () => {
//   const { contestId } = useParams();
//   const [contest, setContest] = useState(null);

//   useEffect(() => {
//     // Fetch the contest details by ID from your database
//     const fetchContestDetails = async () => {
//       try {
//         const response = await axios.get(`/api/contests/${contestId}`);
//         setContest(response.data);
//       } catch (error) {
//         console.error('Error fetching contest details:', error);
//       }
//     };

//     fetchContestDetails();
//   }, [contestId]);

//   const handleEnroll = async (problemId) => {
//     try {
//       // Send a request to your API to enroll the user in the selected problem
//       const response = await axios.post(`/api/contests/${contestId}/enroll`, {
//         problemId,
//       });
//       // Update the contest state with the updated participant count
//       setContest((prevContest) => {
//         const updatedProblems = prevContest.problems.map((problem) => {
//           if (problem._id === problemId) {
//             // Increment the participant count for the selected problem
//             return {
//               ...problem,
//               participants: problem.participants + 1,
//             };
//           }
//           return problem;
//         });
//         return {
//           ...prevContest,
//           problems: updatedProblems,
//         };
//       });
//     } catch (error) {
//       console.error('Error enrolling in problem:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Contest Details</h2>
//       {contest ? (
//         <div>
//           <h3>{contest.title}</h3>
//           <p>{contest.description}</p>
//           <ul>
//             {contest.problems.map((problem) => (
//               <li key={problem._id}>
//                 {problem.text} (Participants: {problem.participants})
//                 <button onClick={() => handleEnroll(problem._id)}>Enroll</button>
//               </li>
//             ))}
//           </ul>
//           {/* Display other contest details */}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default ContestDetail;
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import './contestd.css';
// const mockContest = {
//   title: 'Sample Contest',
//   description: 'This is a sample contest description.',
//   problems: [
//     {
//       _id: 'problem1',
//       text: 'Sample Problem 1',
//       participants: 5,
//     },
//     {
//       _id: 'problem2',
//       text: 'Sample Problem 2',
//       participants: 3,
//     },
//     // Add more sample problems as needed
//   ],
// };

// const ContestDetail = () => {
//   const { contestId } = useParams();
//   const [contest, setContest] = useState(null);

//   useEffect(() => {
//     // In this example, we'll set the contest state with mock data
//     setContest(mockContest);
//   }, []);

//   const handleEnroll = (problemId) => {
//     // Implement your logic for enrolling in a problem here
//     // You can update the mock data for the participant count
//     setContest((prevContest) => {
//       const updatedProblems = prevContest.problems.map((problem) => {
//         if (problem._id === problemId) {
//           // Increment the participant count for the selected problem
//           return {
//             ...problem,
//             participants: problem.participants + 1,
//           };
//         }
//         return problem;
//       });
//       return {
//         ...prevContest,
//         problems: updatedProblems,
//       };
//     });
//   };

//   return (
//     <div>
//       <h2>Contest Details</h2>
//       {contest ? (
//         <div>
//           <h3>{contest.title}</h3>
//           <p>{contest.description}</p>
//           <ul>
//             {contest.problems.map((problem) => (
//               <li key={problem._id}>
//                 {problem.text} (Participants: {problem.participants})
//                 <button onClick={() => handleEnroll(problem._id)}>Enroll</button>
//               </li>
//             ))}
//           </ul>
//           {/* Display other contest details */}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default ContestDetail;
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import './contestd.css';

// const mockContest = {
//   title: 'Sample Contest',
//   description: 'This is a sample contest description.',
//   problems: [
//     {
//       _id: 'problem1',
//       text: 'Sample Problem 1',
//       maxParticipants: 10, // Set the maximum participants for this problem
//       participants: 0, // Start the participant count from zero
//     },
//     {
//       _id: 'problem2',
//       text: 'Sample Problem 2',
//       maxParticipants: 5, // Set the maximum participants for this problem
//       participants: 0, // Start the participant count from zero
//     },
//     // Add more sample problems as needed
//   ],
// };

// const ContestDetail = () => {
//   const { contestId } = useParams();
//   const [contest, setContest] = useState(null);

//   useEffect(() => {
//     // In this example, we'll set the contest state with mock data
//     setContest(mockContest);
//   }, []);

//   const handleEnroll = (problemId) => {
//     // Implement your logic for enrolling in a problem here
//     // You can update the mock data for the participant count
//     setContest((prevContest) => {
//       const updatedProblems = prevContest.problems.map((problem) => {
//         if (problem._id === problemId) {
//           if (problem.participants < problem.maxParticipants) {
//             // Increment the participant count for the selected problem if maxParticipants is not reached
//             return {
//               ...problem,
//               participants: problem.participants + 1,
//             };
//           }
//         }
//         return problem;
//       });
//       return {
//         ...prevContest,
//         problems: updatedProblems,
//       };
//     });
//   };

//   return (
//     <div>
//       <h2>Contest Details</h2>
//       {contest ? (
//         <div>
//           <h3>{contest.title}</h3>
//           <p>{contest.description}</p>
//           <ul>
//             {contest.problems.map((problem) => (
//               <li key={problem._id}>
//                 {problem.text} (Participants: {problem.participants}/{problem.maxParticipants})
//                 {problem.participants < problem.maxParticipants ? (
//                   <button onClick={() => handleEnroll(problem._id)}>Enroll</button>
//                 ) : (
//                   // Display full contest details when max participants are reached
//                   <div>
//                     {/* Add full contest details here */}
//                     <p>Full Contest Details for {problem.text}</p>
//                     {/* Include any additional information about the contest */}
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//           {/* Display other contest details */}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default ContestDetail;
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import './contestd.css';

// const mockContest = {
//   title: 'Sample Contest',
//   description: 'This is a sample contest description.',
//   problems: [
//     {
//       _id: 'problem1',
//       text: 'Sample Problem 1',
//       maxParticipants: 10, // Set the maximum participants for this problem
//       participants: 0, // Start the participant count from zero
//       enrolled: false, // Track enrollment status
//     },
//     {
//       _id: 'problem2',
//       text: 'Sample Problem 2',
//       maxParticipants: 5, // Set the maximum participants for this problem
//       participants: 0, // Start the participant count from zero
//       enrolled: false, // Track enrollment status
//     },
//     // Add more sample problems as needed
//   ],
// };

// const ContestDetail = () => {
//   const { contestId } = useParams();
//   const [contest, setContest] = useState(null);

//   useEffect(() => {
//     // In this example, we'll set the contest state with mock data
//     setContest(mockContest);
//   }, []);

//   const handleEnroll = (problemId) => {
//     // Implement your logic for enrolling in a problem here
//     // You can update the mock data for the participant count and enrollment status
//     setContest((prevContest) => {
//       const updatedProblems = prevContest.problems.map((problem) => {
//         if (problem._id === problemId) {
//           if (problem.participants < problem.maxParticipants && !problem.enrolled) {
//             // Increment the participant count for the selected problem if maxParticipants is not reached
//             // Mark the problem as enrolled
//             return {
//               ...problem,
//               participants: problem.participants + 1,
//               enrolled: true,
//             };
//           }
//         }
//         return problem;
//       });
//       return {
//         ...prevContest,
//         problems: updatedProblems,
//       };
//     });
//   };

//   return (
//     <div>
//         <div className='cont'>
//       <h2>Contest Details</h2>
//       {contest ? (
        
//         <div>
//           <h3>{contest.title}</h3>
//           <p>{contest.description}</p>
//           <ul>
//             {contest.problems.map((problem) => (
//               <li key={problem._id}>
//                 {problem.text} (Participants: {problem.participants}/{problem.maxParticipants})
//                 {problem.enrolled ? (
//                   // If enrolled, show "Enrolled" and disable the button
//                   <span>Enrolled</span>
//                 ) : (
//                   // If not enrolled, show the "Enroll" button
//                   <button onClick={() => handleEnroll(problem._id)}>Enroll</button>
//                 )}
//               </li>
//             ))}
//           </ul>
//           {/* Display other contest details */}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//       </div>
//     </div>
//   );
// };

// export default ContestDetail;
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import Slider from 'react-slick'; // Import the Slider component
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './contestd.css';

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll:3,
//   autoplay: true,
// };

// const mockContest = {
//   title: 'Sample Contest',
//   description: 'This is a sample contest description.',
//   problems: [
//     {
//       _id: 'problem1',
//       text: 'Sample Problem 1',
//       maxParticipants: 10,
//       participants: 0,
//       enrolled: false,
//     },
//     {
//       _id: 'problem2',
//       text: 'Sample Problem 2',
//       maxParticipants: 5,
//       participants: 0,
//       enrolled: false,
//     },
//     // Add more sample problems as needed
//   ],
// };

// const ContestDetail = () => {
//   const { contestId } = useParams();
//   const [contest, setContest] = useState(null);

//   useEffect(() => {
//     setContest(mockContest);
//   }, []);

//   const handleEnroll = (problemId) => {
//     setContest((prevContest) => {
//       const updatedProblems = prevContest.problems.map((problem) => {
//         if (problem._id === problemId) {
//           if (problem.participants < problem.maxParticipants && !problem.enrolled) {
//             return {
//               ...problem,
//               participants: problem.participants + 1,
//               enrolled: true,
//             };
//           }
//         }
//         return problem;
//       });
//       return {
//         ...prevContest,
//         problems: updatedProblems,
//       };
//     });
//   };

//   return (
//     <div>
//       <div className='cont'>
//         <h2>Contest Details</h2>
//         {contest ? (
//           <div>
//             <Slider {...settings}>
//               <div>
//                 <img src="https://appssemble.com/assets/img/blog/food/header.png" />
//               </div>
//               <div>
//                 <img src="https://assets.materialup.com/uploads/208b74a8-e3b8-4d39-8684-3825fdfdecac/preview.png" alt="Image 2" />
//               </div>
//               <div>
//                 <img src="https://www.businessofapps.com/wp-content/uploads/2022/01/emizen_tech_food_deliver_img1.png" alt="Image 3" />
//               </div>
//               <div>
//                 <img src="http://www.nyxditech.com/blog/wp-content/uploads/2019/09/Food-Delivery-App.jpg" alt="Image 3" />
//               </div>
//               <div>
//                 <img src="https://www.netsolutions.com/insights/wp-content/uploads/2021/10/Online-Food-Delivery-Apps.png.webp" alt="Image 3" />
//               </div>
//               <div>
//                 <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/4cc83a84391093.5d5bb3c3b3bf4.png" alt="Image 3" />
//               </div>
//               {/* Add more image items as needed */}
//             </Slider>
//             <div>
//               <h3>{contest.title}</h3>
//               <p>{contest.description}</p>
//               <ul>
//                 {contest.problems.map((problem) => (
//                   <li key={problem._id}>
//                     {problem.text} (Participants: {problem.participants}/{problem.maxParticipants})
//                     {problem.enrolled ? (
//                       <span>Enrolled</span>
//                     ) : (
//                       <button onClick={() => handleEnroll(problem._id)}>Enroll</button>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//               {/* Display other contest details */}
//             </div>
//           </div>
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ContestDetail;
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './contestd.css';

// const settings = {
//   dots: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   autoplay: true,
// };

// const imageStyle = {
//   width: '300px', // Adjust the width as per your requirement
//   height: '300px', // Adjust the height as per your requirement
// };

// const mockContest = {
//   title: 'Sample Contest',
//   description: 'This is a sample contest description.',
//   problems: [
//     {
//       _id: 'problem1',
//       text: 'Sample Problem 1',
//       maxParticipants: 10,
//       participants: 0,
//       enrolled: false,
//     },
//     {
//       _id: 'problem2',
//       text: 'Sample Problem 2',
//       maxParticipants: 5,
//       participants: 0,
//       enrolled: false,
//     },
//     // Add more sample problems as needed
//   ],
// };

// const ContestDetail = () => {
//   const { contestId } = useParams();
//   const [contest, setContest] = useState(null);

//   useEffect(() => {
//     setContest(mockContest);
//   }, []);

//   const handleEnroll = (problemId) => {
//     setContest((prevContest) => {
//       const updatedProblems = prevContest.problems.map((problem) => {
//         if (problem._id === problemId) {
//           if (problem.participants < problem.maxParticipants && !problem.enrolled) {
//             return {
//               ...problem,
//               participants: problem.participants + 1,
//               enrolled: true,
//             };
//           }
//         }
//         return problem;
//       });
//       return {
//         ...prevContest,
//         problems: updatedProblems,
//       };
//     });
//   };

//   return (
//     <div>
//       <div className='cont'>
//         <h2>Contest Details</h2>
//         {contest ? (
//           <div>
//             <Slider {...settings}>
//               <div className='my'>
//                 <img
//                   src="https://appssemble.com/assets/img/blog/food/header.png"
//                   alt="Image 1"
//                   style={imageStyle}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="https://assets.materialup.com/uploads/208b74a8-e3b8-4d39-8684-3825fdfdecac/preview.png"
//                   alt="Image 2"
//                   style={imageStyle}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="https://www.businessofapps.com/wp-content/uploads/2022/01/emizen_tech_food_deliver_img1.png"
//                   alt="Image 3"
//                   style={imageStyle}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="https://www.netsolutions.com/insights/wp-content/uploads/2021/10/Online-Food-Delivery-Apps.png.webp"
//                   alt="Image 1"
//                   style={imageStyle}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="http://www.nyxditech.com/blog/wp-content/uploads/2019/09/Food-Delivery-App.jpg" alt="Image 3"
//                   alt="Image 1"
//                   style={imageStyle}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/4cc83a84391093.5d5bb3c3b3bf4.png"
//                   alt="Image 1"
//                   style={imageStyle}
//                 />
//               </div>
              
//               {/* Add more image items as needed */}
//             </Slider>
//             <div>
//               <h3>{contest.title}</h3>
//               <p>{contest.description}</p>
//               <ul>
//                 {contest.problems.map((problem) => (
//                   <li key={problem._id}>
//                     {problem.text} (Participants: {problem.participants}/{problem.maxParticipants})
//                     {problem.enrolled ? (
//                       <span>Enrolled</span>
//                     ) : (
//                       <button onClick={() => handleEnroll(problem._id)}>Enroll</button>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//               {/* Display other contest details */}
//             </div>
//           </div>
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ContestDetail;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './contestd.css';
import { Link } from 'react-router-dom';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
};

const imageStyle = {
  width: '300px', // Adjust the width as per your requirement
  height: '300px', // Adjust the height as per your requirement
};

const mockContest = {
    title: 'Appetite Adventures: Redefining Food Delivery Apps',
    description: 'At SafeEat Food Delivery, safety is our top priority. We partner with restaurants and food vendors that adhere to the highest food safety standards.',
    problems: [
      {
        _id: 'problem1',
        text: 'Create a Subscription Model for Premium Users',
        maxParticipants: 10,
        participants: 0,
        enrolled: false,
      },
      {
        _id: 'problem2',
        text: 'Implement a Restaurant Rating and Review System',
        maxParticipants: 8,
        participants: 0,
        enrolled: false,
      },
      {
        _id: 'problem3',
        text: 'Integrate Social Media Sharing for Orders',
        maxParticipants: 6,
        participants: 0,
        enrolled: false,
      },
      {
        _id: 'problem4',
        text: 'Develop a Chat Support Feature for Customer Queries',
        maxParticipants: 5,
        participants: 0,
        enrolled: false,
      },
      {
        _id: 'problem5',
        text: 'Enhance the Menu Recommendation Algorithm',
        maxParticipants: 7,
        participants: 0,
        enrolled: false,
      },
      {
        _id: 'problem6',
        text: 'Implement Voice Ordering Using Speech Recognition',
        maxParticipants: 4,
        participants: 0,
        enrolled: false,
      },
      {
        _id: 'problem7',
        text: 'Create a Gamified Loyalty Program for Users',
        maxParticipants: 9,
        participants: 0,
        enrolled: false,
      },
      {
        _id: 'problem8',
        text: 'Optimize Delivery Routes for Efficiency',
        maxParticipants: 6,
        participants: 0,
        enrolled: false,
      },
      {
        _id: 'problem9',
        text: 'Build a Cross-Platform Mobile App',
        maxParticipants: 10,
        participants: 0,
        enrolled: false,
      },
      {
        _id: 'problem10',
        text: 'Implement Multi-Language Support',
        maxParticipants: 5,
        participants: 0,
        enrolled: false,
      },
      // Feel free to add more challenges or modify existing ones.
    ],
  };

const ContestDetail = () => {
  const { contestId } = useParams();
  const [contest, setContest] = useState(null);

  useEffect(() => {
    setContest(mockContest);
  }, []);

  const handleEnroll = (problemId) => {
    setContest((prevContest) => {
      const updatedProblems = prevContest.problems.map((problem) => {
        if (problem._id === problemId) {
          if (problem.participants < problem.maxParticipants && !problem.enrolled) {
            // Only enroll if max participants is not reached and not already enrolled
            console.log("reached");
            return {
              ...problem,
              participants: problem.participants + 1,
              enrolled: true,
              
            };
          }
        }
        return problem;
      });

      return {
        ...prevContest,
        problems: updatedProblems,
      };
    });
  };

  return (
    <div>
      <div className='cont'>
        <h2>Forge Details</h2>
        {contest ? (
          <div>
            <Slider {...settings}>
              <div className='my'>
                <img
                  src="https://appssemble.com/assets/img/blog/food/header.png"
                  alt="Image 1"
                  style={imageStyle}
                />
              </div>
              <div>
                <img
                  src="https://assets.materialup.com/uploads/208b74a8-e3b8-4d39-8684-3825fdfdecac/preview.png"
                  alt="Image 2"
                  style={imageStyle}
                />
              </div>
              <div>
                <img
                  src="https://www.businessofapps.com/wp-content/uploads/2022/01/emizen_tech_food_deliver_img1.png"
                  alt="Image 3"
                  style={imageStyle}
                />
              </div>
              <div>
                <img
                  src="https://www.netsolutions.com/insights/wp-content/uploads/2021/10/Online-Food-Delivery-Apps.png.webp"
                  alt="Image 4"
                  style={imageStyle}
                />
              </div>
              <div>
                <img
                  src="http://www.nyxditech.com/blog/wp-content/uploads/2019/09/Food-Delivery-App.jpg"
                  alt="Image 5"
                  style={imageStyle}
                />
              </div>
              <div>
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/4cc83a84391093.5d5bb3c3b3bf4.png"
                  alt="Image 6"
                  style={imageStyle}
                />
              </div>
              {/* Add more image items as needed */}
            </Slider>
            <div>
              <h3>{contest.title}</h3>
              <p>{contest.description}</p>
              <ul>
                {contest.problems.map((problem) => (
                  <li key={problem._id}>
                    {problem.text} (Participants: {problem.participants}/{problem.maxParticipants})
                    {problem.enrolled ? (
                      <span>Enrolled</span>
                    ) : (
                        <Link to="/enrollment">
                        <button onClick={() => handleEnroll(problem._id)}>Enroll</button>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              {/* Display other contest details */}
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ContestDetail;