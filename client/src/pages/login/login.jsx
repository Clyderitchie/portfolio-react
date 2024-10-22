// import React from "react";
import loginPic from "../../assets/loginpic.jpg";

function Login() {
  return (
    <>
      {/* maxWidth: "1120px" */}
      <div
        className="card mb-3 border border-dark"
        style={{ minWidth: "75%", minHeight: "fit-content" }}
      >
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body p-2" style={{minWidth: "75%"}}>
              <h5 className="card-title text-center">Admin Login</h5>
              <form className="flex justify-content-center align-items-center p-3" style={{maxWidth: "75%"}} action="">
                <h6 className="mb-2">Username: </h6>
                <input
                  className="form-control form-control-lg p-3 mb-4"
                  type="text"
                  placeholder="Username"
                  aria-label=".form-control-lg example"
                />
                <h6>Password: </h6>
                <input
                  className="form-control form-control-lg p-3"
                  type="password"
                  placeholder="Password"
                  aria-label=".form-control-lg example"
                />
              </form>
              <p className="card-text p-3 text-center">
              <button type="button" className="btn btn-dark">Login</button>
              </p>
            </div>
          </div>
          <div
            className="col-md-4 d-flex justify-content-center align-items-center position-relative"
            style={{ height: "fit", overflow: "hidden" }}
          >
            <img
              src={loginPic}
              className="img-fluid border rounded position-absolute"
              alt="Login picture"
              style={{
                width: "200%", // Set the desired width
                height: "200%", // Set the desired height
                objectFit: "cover", // Adjust the object fit if needed
                left: "51%", // Center horizontally
                transform: "translateX(-50%)", // Adjust positioning
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
