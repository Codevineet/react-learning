import React from 'react'
import DisplayCard from './Components/DisplayCard'
import NavBar from './Components/NavBar'
import './App.css'

const App = () => {

let userInformation = [
  {
    userName: "Aarav Sharma",
    userDesc: "Frontend Developer skilled in React, JavaScript, and Tailwind CSS.",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    userName: "Priya Mehta",
    userDesc: "Backend Engineer experienced in Node.js, Express.js, and MongoDB.",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    userName: "Rohan Verma",
    userDesc: "Full Stack Developer with expertise in MERN stack applications.",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    userName: "Sneha Kapoor",
    userDesc: "UI/UX Designer focused on Figma, prototyping, and user experience.",
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    userName: "Kunal Singh",
    userDesc: "DevOps Engineer skilled in Docker, Kubernetes, and AWS cloud services.",
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    userName: "Isha Malhotra",
    userDesc: "Data Analyst experienced in Python, SQL, and Power BI dashboards.",
    image: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    userName: "Aditya Rao",
    userDesc: "Machine Learning Engineer working on deep learning and NLP models.",
    image: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    userName: "Neha Joshi",
    userDesc: "Cybersecurity Analyst specialized in penetration testing and security audits.",
    image: "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    userName: "Vikram Patel",
    userDesc: "Software Engineer proficient in Java, Spring Boot, and microservices.",
    image: "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    userName: "Ananya Gupta",
    userDesc: "Cloud Engineer experienced in Azure, automation, and scalable systems.",
    image: "https://randomuser.me/api/portraits/women/10.jpg"
  }
];

  return <> 
    <NavBar/>
    <DisplayCard details = {userInformation}/>
  </>
}

export default App