import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../redux/Actions/actions";
import { Link } from "react-router-dom";
import "./PopUpForm.css"

const PopUpForm = () => {
  let dispatch = useDispatch();
  let [state, setState] = useState([
    {

      designation: "",
      company: "",
      workingSince: "",
      workingTill: "",
      city: "",
    },
  ]);
  let handleForm = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let submitData = e => {
    e.preventDefault();
    dispatch(addData(state));
  };
  return (
    <div>
      <form className="block-1">
        <span className="close">
          <Link to="/"> close</Link>
        </span>
        <div className="block-2">
          <label
            
            htmlFor="grid-password"
          >
            Designation
          </label>
          <input
            onChange={handleForm}
            name="designation"
            className=" block-3 "
            type="text"
          />
        </div>
        <div className="block-4">
          <label
            className="block-5"
            htmlFor="grid-password"
          >
            Company
          </label>
          <input
            onChange={handleForm}
            name="company"
            className="block-6"
            type="text"
          />
        </div>
        <div className="block-1">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block-1"
              htmlFor="grid-first-name"
            >
              Working Since
            </label>
            <input
              onChange={handleForm}
              name="workingFrom"
              className="block-1"
              type="text"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block-1"
              htmlFor="grid-last-name"
            >
              Working Till
            </label>
            <input
              onChange={handleForm}
              name="workingTo"
              className="block-1"
              type="text"
            />
          </div>
        </div>
        <div className="block-1"></div>
        <div >
          <div ></div>
        </div>
        <div className="w-fu">
          <label
            className="block-1"
            htmlFor="grid-password"
          >
            city
          </label>
          <input
            onChange={handleForm}
            name="city"
            className="block-1"
            type="text"
          />
        </div>
        <button onClick={submitData}>submit</button>
      </form>
    </div>
  );
};

export default PopUpForm;
