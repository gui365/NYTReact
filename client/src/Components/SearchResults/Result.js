import React from "react";
import "../../App.css";

const Result = ({ title, date, link, saveMethod, index }) => (
  <div className="row result d-flex justify-content-between align-items-center">
    <div className="col-md-9">
      <a href={link} target="_blank"><p className="result-title">{title}</p></a>
    </div>
    <div className="col-md-2">
      <p className="result-title">{date ? date.substring(0,10) : ""}</p>
    </div>
    <div className="col-md-1">
      <button 
      onClick={() => {saveMethod(index)}}
       className="result-button btn btn-danger">Save</button>
    </div>
  </div>
);

export default Result;