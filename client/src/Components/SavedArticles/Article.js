import React from "react";
import "../../App.css";
import Moment from "react-moment";
import "moment-timezone";

const Article = ({ title, date, link, id, deleteMethod }) => (
  <div className="row article d-flex justify-content-between align-items-center">
    <div className="col-md-9">
      <a href={link}><p className="article-title">{title}</p></a>
    </div>
    <div className="col-md-2">
<p className="article-date">{(date !== "No date") ? <Moment date={date} format="MM/DD/YYYY" /> : date}</p>
    </div>
    <div className="col-md-1">
      <button onClick={() => deleteMethod(id)} className="remove-button btn btn-danger">X</button>
    </div>
  </div>
);

export default Article;