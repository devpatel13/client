import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/about", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setData(data.data);
      });
  }, []);

  return (
    <section
      className="vh-200"
      style={{
        backgroundColor: "#8fc4b7",
        paddingBottom: "80px",
        paddingTop: "80px",
        height: "100vh",
      }}
    >
      <div className="container h-100">
        <div
          className="row d-flex justify-content-center align-items-center h-100"
          style={{ padding: "30px" }}
        >
          <div className="col-lg-8 col-xl-8" style={{ width: "740px" }}>
            <div
              className="card text-black"
              style={{
                borderRadius: "25px",
              }}
            >
              <div className="card-body">
                <div
                  className="row justify-content-center"
                  style={{ paddingTop: "30px" }}
                >
                  <div className="profilePic" style={{ paddingLeft: "248px" }}>
                    <img
                      src={require("../img/homeBackImg.jpg")}
                      className="card-img-top"
                      id="homeCardImage"
                      alt="image"
                      style={{
                        height: "200px",
                        width: "200px",
                        borderRadius: "100px",
                      }}
                    />
                  </div>
                </div>
                <br />
                <br />

                <div className="row justify-content-center">
                  <div className="col-4" style={{ paddingLeft: "40px" }}>
                    <h5>Username:</h5>
                  </div>
                  <div className="col-4" style={{ paddingLeft: "40px" }}>
                    <p>devanshu</p>
                  </div>
                </div>

                <div className="row justify-content-center">
                  <div className="col-4" style={{ paddingLeft: "40px" }}>
                    <h5>Email:</h5>
                  </div>
                  <div className="col-4" style={{ paddingLeft: "40px" }}>
                    <p>devanshu</p>
                  </div>
                </div>

                <div className="row justify-content-center">
                  <div className="col-4" style={{ paddingLeft: "40px" }}>
                    <h5>Phone:</h5>
                  </div>
                  <div className="col-4" style={{ paddingLeft: "40px" }}>
                    <p>1234567890</p>
                  </div>
                </div>
                <br />

                <div className="row justify-content-center">
                  <div
                    className="col-4"
                    style={{ paddingLeft: "90px", marginBottom: "40px" }}
                  >
                    <NavLink to="/mytrips">My Trips</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
