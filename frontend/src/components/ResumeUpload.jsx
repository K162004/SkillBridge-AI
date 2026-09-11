import { useState } from "react";
import axios from "axios";
import "../Upload.css";


function ResumeUpload() {

  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");


  const handleUpload = async () => {

    if (!file) {
      setMessage("Please select your resume first");
      return;
    }


    const formData = new FormData();

    formData.append("file", file);


    try {

      setMessage("AI is analyzing your resume...");


      const response = await axios.post(
        "http://127.0.0.1:8000/resume/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );


      console.log(response.data);


      setMessage(
        "Resume analyzed successfully 🚀"
      );


    } catch(error) {

  console.log(error);

  setMessage(
    error.response?.data?.detail || error.message
  );

}

  };


  return (

    <div className="upload-container">


      <div className="upload-card">


        <h1>
          📄 Upload Resume
        </h1>


        <p>
          Upload your PDF resume and let AI analyze your career profile.
        </p>


        <input
          type="file"
          accept=".pdf"
          onChange={
            (e)=>setFile(e.target.files[0])
          }
        />


        <button onClick={handleUpload}>
          Analyze Resume
        </button>


        <h3>
          {message}
        </h3>


      </div>


    </div>

  );

}


export default ResumeUpload;