import React from 'react';
import './showcontest.css';
import { Link } from 'react-router-dom';

const mockContests = [
    {
      id: 1,
      title: 'SafeEats Marketplace',
      description: 'SafeEats Marketplace - Your Trusted Source for Food Safety',
      imageUrl: 'data:image/png;base64,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',
    },
    {
      id: 2,
      title: 'FreshGuard E-commerce',
      description: 'FreshGuard E-commerce - Delivering Freshness to Your Doorstep',
      imageUrl: 'https://i0.wp.com/themes.svn.wordpress.org/ecommerce-zone/0.6.2/screenshot.png?w=572&strip=all',
    },
    {
      id: 3,
      title: 'PurePalate Online',
      description: 'PurePalate Online - Elevate Your Culinary Experience with Confidence',
      imageUrl: 'https://pureplatesstl.com/cdn/shop/products/Gift_Card.001_1500x.jpeg?v=1540929382',
    },
    {
      id: 4,
      title: 'TechGenius App Challenge',
      description: 'TechGenius App Challenge - Build Innovative Mobile Apps',
      imageUrl: 'https://lh3.googleusercontent.com/X6Zo9tDpSKCT3suqd4rKAMRY3CT9iNad6xg_bEtuDis6sq3XR1MYlat66qJ3DdaJSoXSKN5mUGP-P7j976uxjkzK7qeBUn_24OLC=h200-rw',
    },
    {
      id: 5,
      title: 'EcoFashion Design Contest',
      description: 'EcoFashion Design Contest - Sustainable Fashion Revolution',
      imageUrl: 'https://img.freepik.com/free-vector/hand-drawn-sustainable-fashion-landing-page-template_23-2148819610.jpg?w=1060&t=st=1695224849~exp=1695225449~hmac=b722829a8544bd1eadd44eadee77a7166cd166faf85dc9579c912478e65bef7c',
    },
    {
      id: 6,
      title: 'GreenTech Innovators Challenge',
      description: 'GreenTech Innovators Challenge - Transforming the Environment',
      imageUrl: 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fstatic1.squarespace.com%2Fstatic%2F64352cec584a2900740f3685%2Ft%2F64355b97e6f6917385928e79%2F1681218456010%2FGreentech_logo_green.png%3Fformat%3D1500w&tbnid=PPBKsaq1GI7FeM&vet=12ahUKEwitj7voxLmBAxUMt2MGHdfLCLsQMygAegQIARBQ..i&imgrefurl=https%3A%2F%2Fwww.greentechinnovators.no%2F&docid=BzjkMC_v154aeM&w=1500&h=750&q=greentech%20innovators%20website&ved=2ahUKEwitj7voxLmBAxUMt2MGHdfLCLsQMygAegQIARBQ',
    },
    {
      id: 7,
      title: 'HealthTech Solutions Showcase',
      description: 'HealthTech Solutions Showcase - Revolutionizing Healthcare',
      imageUrl: 'https://mhealthspot.com/wp-content/uploads/futurehealth.jpg',
    },
    {
      id: 8,
      title: 'SmartHome Innovations Expo',
      description: 'SmartHome Innovations Expo - Building the Future of Living',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZS6-gFPLRsB843jx9vsQm_pjePQbrv8J0A5VoNv-gdRm8G2J1NCAN14hkfVxFmt2MR7g&usqp=CAU',
    },
    {
      id: 9,
      title: 'EdTech Revolution Challenge',
      description: 'EdTech Revolution Challenge - Transforming Education for All',
      imageUrl: 'https://cdn-infographic.pressidium.com/wp-content/uploads/Why-Teachers-Should-Join-the-EdTech-Revolution-Infographic-480x460.jpg',
    },
    {
      id: 10,
      title: 'TravelTech Discoveries Contest',
      description: 'TravelTech Discoveries Contest - Redefining the Way We Travel',
      imageUrl: 'https://d2hbvxi6ld0iqf.cloudfront.net/Theme/img/Travel-Tech.jpg',
    },
  
  ];

const ContestCard = ({ contest }) => {
  return (
    <div className="contest-card">
      <img src={contest.imageUrl} alt={contest.title} />
      <h3>{contest.title}</h3>
      <p>{contest.description}</p>
      <Link to="/contestd">
        <button>View Details</button>
      </Link>
    </div>
  );
};

const Showcontest = () => {
  return (
    <div className="contest-list">
      <h2>Available Contests</h2>
      <div className="contest-cards">
        {mockContests.map((contest) => (
          <ContestCard key={contest.id} contest={contest} />
        ))}
      </div>
    </div>
  );
};

export default Showcontest;