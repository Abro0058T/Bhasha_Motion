import React from "react";
import "./Home.css";
import { useNavigate } from "react-router";
import lap from '../assests/Floating 15_ Macbook Pro Mockup (1).png'
const Home = () => {
  const navigate = useNavigate();
  const handlenavigate = () => {
    navigate("/login");
  };
  const handlenavigate2 = () => {
    navigate("/register");
  };
  const handlestart = () =>{
    navigate('/login')
  }
  return (
    <div className="home">
      <nav className="navbar">
        <h2>GLOCAL EDITS</h2>
        <div>
            <button className="signin" onClick={handlenavigate}>Sign in</button>
            <button className="signup" onClick={handlenavigate2}>Sign up</button>
        </div>
      </nav>
      <div className="container">
        <div className="c1">
        <div className="c11">
            <h4>Welcome to Glocal Edits</h4>
            <h1>ULTIMATE VIDEO
                GENERATOR</h1>
            <p>Make better, more compelling generative videos and
save a lot of time. Use our professional video generator 
software to make your work in more ease.</p>
        <button className="start" onClick={handlestart}>Get Started</button>
        <div className="btn2">
            <div className="officer-btn">
                <h2>15+</h2>
                <h3>Officers</h3>
            </div>
            <button className="officer-btn2">
                <h2>450+</h2>
                <h3>Generated</h3>
            </button>
        </div>
        </div>
        </div>
        <div className="c2">
            <img src={lap} alt="" />
        </div>
      </div>
      {/* <button className="officer-btn" onClick={handlenavigate}>
        Officer
      </button> */}
    </div>
  );
};

export default Home;
