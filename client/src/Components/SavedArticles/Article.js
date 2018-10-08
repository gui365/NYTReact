import React from "react";
import "../../App.css";
import Moment from "react-moment";
import "moment-timezone";

const Article = ({ title, date, link, id, deleteMethod }) => (
  <div className="row article d-flex justify-content-between align-items-start">
    <div className="col-md-10">
      <a href={link}><p className="article-title">{title}</p></a>
      <p className="article-date">Date published: {(date !== "No date") ? <Moment date={date} format="MM/DD/YYYY" /> : date}</p>
    </div>
    <div className="col-md-2 d-flex justify-content-end">
      <button onClick={() => deleteMethod(id)} className="remove-button btn btn-danger">X</button>
    </div>
  </div>
);

export default Article;