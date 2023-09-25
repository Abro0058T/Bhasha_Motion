import React,{useState,useEffect} from 'react'
import './Edit.css'
import one from '../assests/image 9.png'
import two from '../assests/image 10.png'
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import me from "../assests/image 4 (1).png";
// import data from './data.js';
import {useSelector} from "react-redux"
import { useDispatch } from 'react-redux';
import {edit_data} from '../redux/features/VideoSlice'

const Edit = () => {
  console.log("Hello")
  const dispatch = useDispatch();
  // const {data} = useSelector((state) => ({ ...state?.auth?.data}));
  const data = {
    ministry_name: 'Ministry of Agriculture',
    images: [
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885_1280.jpg&tbnid=aVgXecnmQ_f1MM&vet=12ahUKEwjG9ab11LSBAxWeTWwGHVJeB7oQMygAegQIARB0..i&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&docid=Ba_eiczVaD9-zM&w=1280&h=797&itg=1&q=images&ved=2ahUKEwjG9ab11LSBAxWeTWwGHVJeB7oQMygAegQIARB0',
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885_1280.jpg&tbnid=aVgXecnmQ_f1MM&vet=12ahUKEwjG9ab11LSBAxWeTWwGHVJeB7oQMygAegQIARB0..i&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&docid=Ba_eiczVaD9-zM&w=1280&h=797&itg=1&q=images&ved=2ahUKEwjG9ab11LSBAxWeTWwGHVJeB7oQMygAegQIARB0',
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885_1280.jpg&tbnid=aVgXecnmQ_f1MM&vet=12ahUKEwjG9ab11LSBAxWeTWwGHVJeB7oQMygAegQIARB0..i&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&docid=Ba_eiczVaD9-zM&w=1280&h=797&itg=1&q=images&ved=2ahUKEwjG9ab11LSBAxWeTWwGHVJeB7oQMygAegQIARB0',
    ],
    "release_language": {
      "Kannada": "https://pib.gov.in/PressReleasePage.aspx?PRID=1958529",
      "Urdu": "https://pib.gov.in/PressReleasePage.aspx?PRID=1958407",
      "Hindi": "https://pib.gov.in/PressReleasePage.aspx?PRID=1958401",
      "Marathi": "https://pib.gov.in/PressReleasePage.aspx?PRID=1958413",
      "Bengali": "https://pib.gov.in/PressReleasePage.aspx?PRID=1958520",
      "Punjabi": "https://pib.gov.in/PressReleasePage.aspx?PRID=1958480",
      "Gujarati": "https://pib.gov.in/PressReleasePage.aspx?PRID=1958400",
      "Tamil": "https://pib.gov.in/PressReleasePage.aspx?PRID=1958445",
      "Telugu": "https://pib.gov.in/PressReleasePage.aspx?PRID=1958488",
      "Malayalam": "https://pib.gov.in/PressReleasePage.aspx?PRID=1958447"
    }
  }
  let image_list = []

  for(let i=1;i<=data?.images?.length;i++){
    image_list.push({
      id: i,
      image: data?.images[i]
    })
  }

  console.log(image_list) 

  const [editeddata,setediteddata] = useState({
    Lang: '',
    prid:'',
    Images: []
  })

  const imageUrls = editeddata.Images.map((item) => item.image);

  setediteddata({
    ...editeddata,
    Images: imageUrls,
  });

  // useEffect(()=>{
  //   if(editeddata?.Lang !== '' || editeddata?.Images !== ''){
  //     // dispatch(edit_data(editeddata))
  //   }
  // },[editeddata])

  const handlechange = (e) => {
    const {name,value} = e.target
    setediteddata({ ...editeddata, [name]: value })
  }

  console.log(editeddata)

  const handleremove = (id) => {
    const newdata = image_list?.filter((item,index)=>{
      return item.id !== id
    })
    image_list = newdata;
    setediteddata({...editeddata,Images:newdata})
  }

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    const selectedPrid = editeddata?.release_language[selectedLanguage].split("=")[1];

    setediteddata({
      ...editeddata,
      Lang: selectedLanguage, // Save the selected language in the Lang field
      prid: selectedPrid,     // Save the corresponding PRID in the prid field
    });
  };

  console.log(editeddata);

  return (
    <div className="editpage">
      <div className="leftedit">
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
            <div className="admin">
              <h2> Nipun Khatri</h2>
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
          // value={editeddata.Lang}
          name="Lang"
          onChange={handleLanguageChange}
          placeholder="Hindi.."
          className="option_select"
        >
          {/* {Object.keys(editeddata?.release_language).map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))} */}
        </select>
            </div>
      </div>
      <div className="table_edit">
      <h1>Edit</h1>
      <table className="table_data_edit">
        <thead className="table_head">
          <th className="id">Image Id</th>
          <th className="tags">Tags</th>
          <th colSpan="2">Preview</th>
        </thead>
        <tbody className="table_body">
          {
            image_list?.map((item,index)=>{
              return(
                <>
                <tr className="table_body1" key={index}>
                <td className="id">{item?.id}</td>
                <td>{data?.ministry_name}</td>
                <button className="edu_btn">View</button>
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
      <button className="Vedio_edit">Regenerate Video</button>
      </div>
    </div>
  )
}

export default Edit