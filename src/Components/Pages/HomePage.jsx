import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./HomePage.css";
import { FaPlus } from "react-icons/fa";

const HomePage = () => {
  let dispatch = useDispatch();
  let empData = useSelector(val => val.data.user);

  return (
    <>
      <div>
        <table className="table">
          <tr>
            <td>Designation</td>
            <td>Company</td>
            <td>WorkingSince</td>
            <td>Working Till</td>
            <td>City</td>
            <td>
              <span className="hover:cursor-pointer">
                <Link to="/pop">
                  <FaPlus />
                </Link>
              </span>
            </td>
          </tr>
          {empData.map(e => (
            <tr>
              <td>{e.designation}</td>
              <td>{e.company}</td>
              <td>{e.workingFrom}</td>
              <td>{e.workingTo}</td>
              <td>{e.city}</td>
              <td>edit</td>
              <td >delete</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default HomePage;
