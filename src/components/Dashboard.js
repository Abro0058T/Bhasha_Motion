import React, { useState ,useEffect} from "react";
import "./Dashboard.css";
import req from "../assests/Group (2).png";
import his from "../assests/Vector (15).png";
import total from "../assests/Vector (16).png";
import Acce from "../assests/Vector (17).png";
import Rej from "../assests/Group (3).png";
import Pend from "../assests/Vector (18).png";
import bar1 from "../assests/Screenshot_20230915_203445.png";
import bar2 from "../assests/Screenshot_20230915_203513.png";
import circle from "../assests/Screenshot_20230915_201649.png";
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { BsFillArrowDownLeftCircleFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import me from "../assests/image 4 (1).png";
import { Bar } from "react-chartjs-2";
import {useDispatch} from "react-redux"

const Dashboard = () => {

  const headers = new Headers({
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json', // Adjust the content type if needed
  });
  
  const request = new Request('/api', {
    method: 'GET', // Use 'POST', 'PUT', 'DELETE', etc. for other types of requests
    headers: headers,
  });

  fetch(request)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // H  andle the data returned by the API
    console.log('API response:', data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('There was a problem with the fetch operation:', error);
  });


  const [popup, setpopup] = useState(false);
  const [hist, sethis] = useState(false);

  const handlepopup = () => {
    setpopup(true);
  };

  const closePopup = () => {
    setpopup(false);
  };

  const sethistory = () => {
    sethis(true);
  };
  const setreq = () => {
    sethis(false);
  };
  return (
    <div className="dash">
      <div className="toggle">
        <div>
          <h1>GLOCAL EDITS</h1>
          <hr />
          <div className="togglebtn" onClick={setreq}>
            <img src={req} alt="" />
            <h3>Request</h3>
          </div>
          <div className="togglebtn" onClick={sethistory}>
            <img src={his} alt="" />
            <h3>History</h3>
          </div>
        </div>
        <button className="logout">LogOut</button>
      </div>
      {popup && (
        <div className="container1">
          <div className="popup">
            <AiOutlineClose onClick={closePopup} className="close" />
            <div className="video"></div>
            <div className="edit">
              <div className="rej">
                <button className="rejbtn">Reject</button>
              </div>
              <div>
                <button className="editbtn">Edit</button>
                <button className="Accbtn">Accept</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="section">
        <div className="topbar">
          <div className="myname">
            <h2>Hello Ishan Gupta</h2>
            <h3>4:45 pm 19 Jan 2022</h3>
          </div>
          <div>
            <AiOutlineSearch className="searchicon" />
            <input type="text" placeholder="Search ..." className="searchbox" />
          </div>
          <div className="topend">
            <AiOutlineBell className="bell" />
            <div className="admin">
              <h2>Ishan Gupta</h2>
              <h3>Admin</h3>
            </div>
            <img src={me} alt="" />
          </div>
        </div>
        <div className="midup">
              <div className="mid1">
                <div className="mid1i">
                  <h2>Total Collection</h2>
                  <h3>25.1 k</h3>
                  <div className="mid1id">
                    <BsFillArrowUpRightCircleFill className="circle" />
                    <h3>+15%</h3>
                  </div>
                </div>
                <img src={total} alt="" />
              </div>
              <div className="mid1">
                <div className="mid1i">
                  <h2>Total Accepted</h2>
                  <h3>3.5 k</h3>
                  <div className="mid1id">
                    <BsFillArrowUpRightCircleFill className="circle" />
                    <h3>+10%</h3>
                  </div>
                </div>
                <img src={Acce} alt="" />
              </div>
              <div className="mid1">
                <div className="mid1i">
                  <h2>Total Rejected</h2>
                  <h3>2.1 k</h3>
                  <div className="mid1idr">
                    <BsFillArrowDownLeftCircleFill className="circler" />
                    <h3>+10%</h3>
                  </div>
                </div>
                <img src={Rej} alt="" />
              </div>
              <div className="mid1">
                <div className="mid1i">
                  <h2>Total Pending</h2>
                  <h3>2.67 k</h3>
                  <div className="mid1idr">
                    <BsFillArrowDownLeftCircleFill className="circler" />
                    <h3>+10%</h3>
                  </div>
                </div>
                <img src={Pend} alt="" />
              </div>
            </div>
        {hist ? (
        //   <div className="history">
        //     <h2>History</h2>
        //     <div className="topic">
        //         <h1>Id</h1>
        //         <h1>Topic</h1>
        //         <h1>Date</h1>
        //         <h1>Ministry</h1>
        //         <h1>Preview</h1>
        //         <h1>Status</h1>
        //     </div>
        //     <div className="row">
        //             <h1>194878</h1>
        //           <h1>75% Attendance</h1>
        //           <h1>15/7/23</h1>
        //           <h1>Education</h1>
        //           <h1>
        //             <button onClick={handlepopup}>View</button>
        //           </h1>
        //           <h1>Accept</h1>
        //     </div>
        //   </div>
        <div className="history">
  <h2>History</h2>
  <table>
    <thead>
      <tr className="topic">
        <th>ID</th>
        <th>Topic</th>
        <th>Date</th>
        <th>Ministry</th>
        <th>Preview</th>
        <th>Status</th>
      </tr>
    </thead>
    <br />
    <tbody>
      <tr className="row">
        <td>194878</td>
        <td>75% Attendance</td>
        <td>15/7/23</td>
        <td>Education</td>
        <td>
          <button onClick={handlepopup}>View</button>
        </td>
        <td>Accept</td>
      </tr>
      <br />
      <tr className="row">
        <td>194878</td>
        <td>75% Attendance</td>
        <td>15/7/23</td>
        <td>Education</td>
        <td>
          <button onClick={handlepopup}>View</button>
        </td>
        <td>Accept</td>
      </tr>
    </tbody>
  </table>
        </div>

        ) : (
          <>
            <div className="middown">
              <div className="middownr">
                <img src={bar1} alt="" />
              </div>
              <div className="middownl">
                <img src={bar2} alt="" />
              </div>
            </div>
            <div className="down">
              <div className="downup">
                <h1>Vedio Status</h1>
                <img src={circle} alt="" />
                <div className="status">
                  <div className="s1">
                    <div className="circle1"></div>
                    <h2>Accepted</h2>
                    <h3>1205</h3>
                  </div>
                  <div className="s1">
                    <div className="circle2"></div>
                    <h2>Rejected</h2>
                    <h3>120</h3>
                  </div>
                  <div className="s1">
                    <div className="circle3"></div>
                    <h2>Pending</h2>
                    <h3>750</h3>
                  </div>
                </div>
              </div>
              <div className="downdown">
                {/* <h2>Requests</h2> */}
                <h1 className="reqhead">Requests</h1>
                <div className="head">
                  <h1>Id</h1>
                  <h1>Topic</h1>
                  <h1>Date</h1>
                  <h1>Ministry</h1>
                  <h1>Preview</h1>
                </div>
                <div className="content">
                  <h1>194878</h1>
                  <h1>75% Attendance</h1>
                  <h1>15/7/23</h1>
                  <h1>Education</h1>
                  <h1>
                    <button onClick={handlepopup}>View</button>
                  </h1>
                </div>
                <div className="content">
                  <h1>194878</h1>
                  <h1>75% Attendance</h1>
                  <h1>15/7/23</h1>
                  <h1>Education</h1>
                  <h1>
                    <button>View</button>
                  </h1>
                </div>
                <div className="content">
                  <h1>194878</h1>
                  <h1>75% Attendance</h1>
                  <h1>15/7/23</h1>
                  <h1>Education</h1>
                  <h1>
                    <button>View</button>
                  </h1>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
