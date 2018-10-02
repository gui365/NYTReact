import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import "../../App.css";

const Result = ({ title, date, link, saveMethod, index }) => (
  <div className="row result d-flex justify-content-between align-items-center">
    <div className="col-md-9">
      <a href={link} target="_blank"><p className="result-title">{title}</p></a>
    </div>
    <div className="col-md-2">
      <p className="result-title">{(date) ? <Moment format="MM/DD/YYYY"></Moment> : "No date"}</p>
    </div>
    <div className="col-md-1">
      <button 
        dataindex={index}
        onClick={() => saveMethod(index)}
        className="result-button btn btn-danger">Save
      </button>
    </div>
  </div>
);

export default Result;