import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import "../../App.css";

const Result = ({ title, date, link, saveMethod, index }) => (
  <div className="row result d-flex justify-content-between align-items-start">
    <div className="col-md-10">
      <a href={link} target="_blank"><p className="result-title">{title}</p></a>
      <p className="result-date">Date published: {(date) ? <Moment format="MM/DD/YYYY">{date}</Moment> : "No date available"}</p>
    </div>
    <div className="col-md-2 d-flex justify-content-end">
      <button 
        dataindex={index}
        onClick={() => saveMethod(index)}
        className="result-button btn btn-danger">SAVE
      </button>
    </div>
  </div>
);

export default Result;