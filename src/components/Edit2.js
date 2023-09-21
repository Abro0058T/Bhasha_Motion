import React,{useState,useEffect} from 'react'
import './Edit.css'
import one from '../assests/image 9.png'
import two from '../assests/image 10.png'
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import me from "../assests/image 4 (1).png";
// import data from './data.js';
// import {useSelector} from "react-redux"
import { useDispatch ,useSelector} from 'react-redux';
import {edit_data} from '../redux/features/VideoSlice'
import { useLocation } from 'react-router-dom';

const Edit2 = ({Route}) => {
  console.log("Hello");
  const location = useLocation();
  const dispatch = useDispatch();
  const data = location.state?.data;
  console.log(data);
  // const dispatch = useDispatch();
  // const data = localStorage.getItem('video_prid')
  // const {video_by_id} = useSelector((state) => ({ ...state?.video?.video_by_id}));
  // console.log(video_by_id)
  // const data = video_by_id;
  // const data_final=JSON.parse(data
  const release_language  = data['release_language']
  const images = data['images']
  console.log(images)
  let image_list = []

  for(let i=1;i<=images?.length;i++){
    image_list.push({
      id: i,
      image: data?.images[i]
    })
  }

  console.log(image_list) 

  const [editeddata,setediteddata] = useState({
    Lang: '',
    prid:'',
    Images: image_list,
  })
  console.log(editeddata?.Images)

  const handleedit = () =>{
    if(editeddata?.Lang !== '' || editeddata?.Images !== ''){
      dispatch(edit_data(editeddata))
    }
  }

  const handlechange = (e) => {
    const {name,value} = e.target
    setediteddata({ ...editeddata, [name]: value })
  }

  console.log(editeddata)

  const handleremove = (id) => {
    const newdata = editeddata?.Images?.filter((item,index)=>{
      return item.id !== id
    })
    image_list = newdata;
    for(let i=0;i<newdata?.length;i++){
      newdata[i].image = newdata[i].image === undefined? '' : newdata[i].image;
    }
    setediteddata({...editeddata,Images:newdata})
  }

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    const selectedPrid = data?.release_language[selectedLanguage].split("=")[1];
    console.log(selectedLanguage)
    setediteddata({
      ...editeddata,
      Lang: selectedLanguage, // Save the selected language in the Lang field
      prid: selectedPrid,     // Save the corresponding PRID in the prid field
    });
  };

  console.log(editeddata);
  const [ipop,setipop] = useState(false);

  const handleimage = (url) =>{
    console.log(url)
    setipop(url)
  }

  const handleclose = () =>{
    setipop(false)
  } 

  return (
    <div className="editpage" >
      {
            ipop !== false?
            <>
            <div className='image' onClick={handleclose}>
              <img src={ipop} ></img>
            </div>
            </>
            :
            <></>
          }
      <div className="leftedit" >
        <img src={one} className="imgone"/>
        <br/>
        <img src={two} className="imagetwo"/>
      </div>
      <div className="Rightedit">
      <div className="topbar1">
          <div className="myname">
            <h2>Hello Nipun Khatri</h2>
            <h3>4:45 pm 19 Jan 2022</h3>
          </div>
          <div>
            <AiOutlineSearch className="searchicon" />
            <input type="text" placeholder="Search ..." className="searchbox" />
          </div>
          <div className="topend">
            <AiOutlineBell className="bell" />
              <h2> Nipun Khatri</h2>
            <div className="admin">
              <h3>Admin</h3>
            </div>
            <img src={me} alt="" />
          </div>
        </div>
      <hr className="hrr"/>
      <div className="input_params">
        <div className="lang_input">
        <label>Language</label>
        <select
          type="text"
          value={editeddata.Lang}
          name="Lang"
          onChange={handleLanguageChange}
          placeholder="Hindi.."
          className="option_select"
        >
          {Object.keys(release_language).map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
            </div>
      </div>
      <div className="table_edit">
      <h1>Edit</h1>
      <table className="table_data_edit">
        <thead className="table_head">
          <th className="id">Image Id</th>
          <th className="tags">Ministry</th>
          <th colSpan="2">Preview</th>
        </thead>
        <tbody className="table_body">
          {
            editeddata?.Images?.map((item,index)=>{
              return(
                <>
                <tr className="table_body1" key={index}>
                <td className="id">{item?.id}</td>
                <td>{data?.ministry_name}</td>
                <button className="edu_btn" onClick={()=>handleimage(item?.image)}>View</button>
                <td onClick={()=>handleremove(item?.id)}>Remove</td>
                </tr>
                <br/>
                </>
              )
            }
          )}
          <br/>
        </tbody>
      </table>
      </div>
      <button className="Vedio_edit" onClick={handleedit}>Regenerate Video</button>
      </div>
    </div>
  )
}

export default Edit2