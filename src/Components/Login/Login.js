import React, { useState } from "react";
import "./Login.css";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const [Icon, setIcon] = useState(true);
  const onSubmit = (data) => {
    const ItemId = {
      Email: data.example,
      Password: data.exampleRequired,
    };
    fetch("https://ruman-private-delights-sarver.vercel.app/users", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(ItemId),
    })
      .then((res) => res.json())
      .then((result) => navigate("/Code"));
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 mt-5 mb-5">
            <div className="Login mb-5 border">
              <h6 className="login-account">Login</h6>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="pos">
                  <input
                    className="form-control  p-4 EmailAddress"
                    placeholder="Username"
                    {...register("example", {
                      required: true,
                      pattern:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                  />
                  <label className="caseSensitive" htmlFor="">
                    usernames are case-sensitive
                  </label>
                </div>
                <div className="pos mb-4">
                  <div className="logIconId">
                    <input
                      className="form-control  p-4 EmailAddress"
                      type={Icon ? "password" : "name"}
                      placeholder="Password"
                      {...register("exampleRequired", { required: true })}
                    />
                    <p className="logIcon" onClick={() => setIcon(!Icon)}>
                      {Icon ? (
                        <FontAwesomeIcon icon={faEyeSlash} />
                      ) : (
                        <FontAwesomeIcon icon={faEye} />
                      )}
                    </p>
                  </div>
                  <label className="caseSensitive" htmlFor="">
                    passwords are case-sensitive
                  </label>
                </div>
                <div className="Submit">
                  <input
                    className="form-control log"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <div className="pt-5 pb-4 Gird_container">
                <span className="Gird_item">Set New Password</span>
                <span className="Gird_item">Sign Up</span>
                <span className="Gird_item">Help</span>
              </div>
            </div>
          </div>
          <div className="com-md-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
