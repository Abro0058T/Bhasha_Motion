
import React, { useState ,useEffect , useRef} from "react";
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
import {useDispatch,useSelector} from "react-redux"
import {fetchDataWithAccessToken} from '../redux/api.js'
import { useNavigate } from "react-router";
import {get_all_videos} from '../redux/features/VideoSlice'
import {get_by_id} from '../redux/features/VideoSlice'
import {get_video_status} from '../redux/features/VideoSlice'
// import ReactPlayer from 'react-player';

const Dashboard = () => {
  const [popup, setpopup] = useState(false);
  const playerRef = useRef(null);
  const [hist, sethis] = useState(false); 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {data} = useSelector((state) => ({ ...state?.auth?.data}));
  const isAuthenticated  = localStorage.getItem('auth1');
  useEffect(()=>{
    if(isAuthenticated === false || isAuthenticated == null){
      navigate('/login');
    }
  },[isAuthenticated])
  const accessToken = data?.access_token;
  console.log(accessToken)
  const [data1,setdata] = useState(null);
  useEffect(()=>{
  if(accessToken){
    fetchDataWithAccessToken(accessToken)
    .then(response => {
      // Handle the data returned by the API
      console.log('Dashboard data:', response.data);
      setdata(response.data);
    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error('There was a problem with the request:', error);
      if(error.response.data.detail === "Could not validate credentials/Token expired"){
        localStorage.clear();
        window.location.reload();
      }
    });
  }
},[accessToken])

let {video_list} = useSelector((state) => ({ ...state?.video}));
const {video_stats} = useSelector((state) => ({ ...state?.video}));

console.log(video_list?.videos)

const video_statss =
  {
    "total_videos": 10,
    "total_accepted": 4,
    "total_rejected": 3,
    "total_pending": 3
  }

// const video_lists = [
//   {
//     prid:1234,
//     status:"pending",
//     url:"https://www.youtube.com/watch?v=Epy3ivrG8ss",
//     edit_history:[],
//     user_email:"nipun@gmail.com",
//     datetime:"17/09/2023 18:20:09",
//     ministry_name:"Prime Minister's Office",
//     heading:"Prime Minister condoles the demise of eminent author and Odisha Chief Minister’s sister, Smt. Gita Mehta",
//     images:[],
//     text_list:[],
//     language:"english",
//     release_language:["string"]
//   },
//   {
//     prid:1234,
//     status:"pending",
//     url:"https://www.youtube.com/watch?v=Epy3ivrG8ss",
//     edit_history:[],
//     user_email:"nipun@gmail.com",
//     datetime:"17/09/2023 18:20:09",
//     ministry_name:"Prime Minister's Office",
//     heading:"Prime Minister condoles the demise of eminent author and Odisha Chief Minister’s sister, Smt. Gita Mehta",
//     images:[],
//     text_list:[],
//     language:"english",
//     release_language:["string"]
//   },
// ]

useEffect(()=>{
  dispatch(get_all_videos(accessToken))
  dispatch(get_video_status(accessToken))
},[])

var filteredObject;
const [value,setvalue] = useState("")

const handlepopup = (prid) => {
    setpopup(true);
    console.log("***************************")
    console.log(prid)
    console.log(video_list?.videos[0])
    filteredObject = video_list?.videos?.find(obj => obj.prid === prid);
    console.log(filteredObject)
    setvalue(filteredObject?.url)
    dispatch(get_by_id(prid))
  };
  console.log(value)

  const closePopup = () => {
    setpopup(false);
  };

  const sethistory = () => {
    sethis(true);
  };
  const setreq = () => {
    sethis(false);
  };

  const handleEdit = () =>{
    navigate('/edit')
  }

  const handlelogout = (e) =>{
    e.preventDefault();
    localStorage.clear();
    // navigate('/login')
    window.location.reload();
  }

  console.log(data1)
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
        <button className="logout" onClick={handlelogout}>LogOut</button>
      </div>
      {popup && (
        <div className="container1">
          <div className="popup">
            <AiOutlineClose onClick={closePopup} className="close" />
            <video className="video" width="640" height="360" controls>
            <source src='https://res.cloudinary.com/dsztz2gsf/video/upload/v1695051070/uxhnwmcsiivudxxz4fvg.mp4' type="video/mp4"/>
            </video>
            <div className="edit">
              <div className="rej">
                <button className="rejbtn">Reject</button>
              </div>
              <div>
                <button className="editbtn" onClick={handleEdit}>Edit</button>
                <button className="Accbtn">Accept</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="section">
        <div className="topbar">
          <div className="myname">
            <h2>Hello {data1?.first_name} {data1?.last_name}</h2>
            <h3>4:45 pm 19 Jan 2022</h3>
          </div>
          <div>
            <AiOutlineSearch className="searchicon" />
            <input type="text" placeholder="Search ..." className="searchbox" />
          </div>
          <div className="topend">
            <AiOutlineBell className="bell" />
            <div className="admin">
              <h2> {data1?.first_name} {data1?.last_name}</h2>
              <h3>Admin</h3>
            </div>
            <img src={me} alt="" />
          </div>
        </div>
        <div className="midup">
              <div className="mid1">
                <div className="mid1i">
                  <h2>Total Collection</h2>
                  <h3>{video_statss?.total_videos}</h3>
                  {/* <div className="mid1id">
                    <BsFillArrowUpRightCircleFill className="circle" />
                    <h3>+15%</h3>
                  </div> */}
                </div>
                <img src={total} alt="" />
              </div>
              <div className="mid1">
                <div className="mid1i">
                  <h2>Total Accepted</h2>
                  <h3>{video_statss?.total_accepted}</h3>
                  {/* <div className="mid1id">
                    <BsFillArrowUpRightCircleFill className="circle" />
                    <h3>+10%</h3>
                  </div> */}
                </div>
                <img src={Acce} alt="" />
              </div>
              <div className="mid1">
                <div className="mid1i">
                  <h2>Total Rejected</h2>
                  <h3>{video_statss?.total_rejected}</h3>
                  {/* <div className="mid1idr">
                    <BsFillArrowDownLeftCircleFill className="circler" />
                    <h3>-10%</h3>
                  </div> */}
                </div>
                <img src={Rej} alt="" />
              </div>
              <div className="mid1">
                <div className="mid1i">
                  <h2>Total Pending</h2>
                  <h3>{video_statss?.total_pending}</h3>
                  {/* <div className="mid1idr">
                    <BsFillArrowDownLeftCircleFill className="circler" />
                    <h3>-10%</h3>
                  </div> */}
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
    {
      video_list?.videos?.map((ele,index)=>{
        return(
          <tr className="content">
          <td className="prid">{ele?.prid}</td>
          <td className="tablehead">{ele?.heading}</td>
          <td className="date">{ele?.datetime}</td>
          <td className="ministry">{ele?.ministry_name}</td>
          <td className="viewbtn">
            <button onClick={()=>handlepopup(ele?.prid)}>View</button>
          </td>
          <td>{ele?.status}</td>
        </tr>
        )
      })
    }
      <br />
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
                <h1>Video Status</h1>
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
                <table className="table">
                <thead>
                <tr className="head">
                  <th className="prid">Id</th>
                  <th className="tablehead">Topic</th>
                  <th className="date">Date</th>
                  <th className="ministry">Ministry</th>
                  <th>Preview</th>
                </tr>
                </thead>
                <tbody>
                {
                  video_list?.videos?.map((ele,index)=>{
                    return(
                      <tr className="content">
                      <td className="prid">{ele?.prid}</td>
                      <td className="tablehead">{ele?.heading}</td>
                      <td className="date">{ele?.datetime}</td>
                      <td className="ministry">{ele?.ministry_name}</td>
                      <td className="viewbtn">
                        <button onClick={()=>handlepopup(ele?.prid)}>View</button>
                      </td>
                    </tr>
                    )
                  })
                }
                <br/>
                </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
