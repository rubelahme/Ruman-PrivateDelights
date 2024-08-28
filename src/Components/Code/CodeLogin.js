import React from "react";
import "../Login/Login.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CodeLogin = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const Code = {
      Code: data.example,
    };
    console.log(Code);
    fetch("https://ruman-private-delights-sarver.vercel.app/code", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(Code),
    })
      .then((res) => res.json())
      .then((result) => navigate("/Verify"));
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 mt-5 mb-5">
            <div className="Login mb-5 ">
              <h6 className="login-account border">Login</h6>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="pos">
                  <input
                    className="form-control  p-4 EmailAddress"
                    placeholder="Code"
                    {...register("example", {
                      required: true,
                    })}
                  />
                </div>
                {/* <div className="pos mb-4">
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
                </div> */}
                <div className="Submit">
                  <input
                    className="form-control log"
                    type="submit"
                    value="Login"
                  />
                </div>
                <div className="text-center">
                  <div className="p-4 TextText">Text</div>
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

export default CodeLogin;
