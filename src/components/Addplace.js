import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useNavigate } from "react-router-dom";

const Addactivity = () => {
  const navigate = useNavigate();

  const [place, setPlace] = useState({
    name: "",
    image: "",
    desc: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setPlace({ ...place, [name]: value });
  };

  const addPlace = async (e) => {
    e.preventDefault();

    const { name, image, desc } = place;

    console.log(image);

    const res = await fetch("/addplace", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        image,
        desc,
      }),
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Add Place Failed");
      console.log("Add Place Failed");
    } else {
      window.alert("Add Place Successful");
      console.log("Add Place Successful");

      // navigate("/login");
    }
  };

  //   const addPlace = async (e) => {
  //     e.preventDefault();
  //     const res = await fetch("/addtouristplace", {
  //       method: "POST",
  //       credentials: "include",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         placeName,
  //         activityName,
  //         activityPrice,
  //         activityStartTime,
  //         activityEndTime,
  //       }),
  //     });

  //     const data = await res.json();
  //     if (res.status === 400 || res.status === 422 || !data) {
  //       window.alert("Invalid Credentials");
  //       console.log("Invalid Credentials");
  //     } else {
  //       // console.log(data);
  //       window.alert("Login Successfull");
  //       console.log("Login Successfull");

  //       navigate("/");
  //     }
  //   };

  return (
    <section className="vh-100" style={{ backgroundColor: "#8fc4b7" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <form method="POST" className="mx-1 mx-md-4">
                    {/* <!-- Place Name input --> */}
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        value={place.name}
                        onChange={handleInputs}
                      />
                      <label className="form-label" for="name">
                        Tourist Place Name
                      </label>
                    </div>

                    {/* <!-- Place Image input --> */}
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        name="image"
                        id="image"
                        className="form-control"
                        value={place.image}
                        onChange={handleInputs}
                      />
                      <label className="form-label" for="image">
                        Place Image
                      </label>
                    </div>

                    {/* <!-- Place Description input --> */}
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        name="desc"
                        id="desc"
                        className="form-control"
                        value={place.desc}
                        onChange={handleInputs}
                      />
                      <label className="form-label" for="desc">
                        Tourist Place Description
                      </label>
                    </div>

                    {/* <!-- Submit button --> */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                      onClick={addPlace}
                    >
                      Add Place
                    </button>
                    <NavLink className="nav-link" to="/addactivity">
                      <button className="btn btn-primary btn-block mb-4">
                        Add Activity
                      </button>
                    </NavLink>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Addactivity;
