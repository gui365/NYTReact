import React from "react";
import "../../App.css";

const Article = ({ title, date, link }) => (
  <div className="row article d-flex justify-content-between align-items-center">
    <div className="col-md-9">
      <a href={link}><p className="article-title">{title}</p></a>
    </div>
    <div className="col-md-2">
      <p className="article-title">{date.substring(0,9)}</p>
    </div>
    <div className="col-md-1">
      <button className="remove-button btn btn-danger">Remove</button>
    </div>
  </div>
);

export default Article;