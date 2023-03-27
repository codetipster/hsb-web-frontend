import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FiUpload } from "react-icons/fi";

const FileUpload = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { handleSubmit } = useForm();
  const [token, setToken] = useState("");
  const [image, setImage] = useState({});
  const [title, setTitle] = useState("");

  useEffect(() => {
    let url = `https://hsb-backend-app-rpnm.onrender.com/api/client/clients/${id}`;
    const getToken = () => {
      const token = JSON.parse(localStorage.getItem("Token"));
      if (token !== null || token !== undefined) {
        setToken(token);
      }
      try {
        axios
          .get(url, {
            headers: {
              Authorization: token,
              "Content-type": "application/json",
            },
          })
          .then((response) => {
            console.log(response.data, "individual info");
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    };
    getToken();
  }, []);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const uploadHandler = (e) => {
    console.log(e.target.files);
    const image = e.target.files[0];
    setImage(image);
    // setImage({
    //   imagePreview: URL.createObjectURL(e.target.files[0]),
    //   imageAsFile: e.target.files[0],
    // });
  };

  const handleUploadSubmit = () => {
    const formData = new FormData();
    formData.append("clientId", id);
    formData.append("name", title);
    formData.append("image", image);
    try {
      fetch("https://hsb-backend-app-rpnm.onrender.com/api/accountant/reports", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: token,
        },
      })
        .then((res) => res.json())
        .then((report) => {
          console.log(report, "checking user");
          alert("Report sent successfully");
        });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit(handleUploadSubmit)}>
        <div>
          <label
            className="block mb-1 text-[12px] px-6 absolute mt-1px"
            for="forms-labelOverInputCode"
          >
            Title
          </label>
          <input
            className="w-full mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
            type="text"
            placeholder="|Add a title "
            onChange={handleTitle}
            value={title}
          />
        </div>
        <div className="p-2 border rounded mt-4 mx-4 bg-[#edf2f7] min-w-[380px] min-h-[230px] justify-center content-center">
          <input
            type="file"
            className="justify-center items-center mt-[80px] mx-[80px]"
            name="image"
            onChange={uploadHandler}
            // value={file}
          />

          <p className="p-2 mx-[70px] text-sm">
            Add Report files(PDF, JPG, PNG)
          </p>
        </div>
        <button
          type="submit"
          className="w-[441px] h-[56px] mt-10 flex items-center justify-center p-2 text-white font-medium disabled:bg-[#FFB5B5] rounded bg-[#FF1C1D]"
        >
          Upload
          <FiUpload className="mr-2" />
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
