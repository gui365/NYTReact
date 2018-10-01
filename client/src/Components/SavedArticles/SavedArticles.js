import React from "react";
import Article from "./Article";
import "../../App.css";

const SavedArticles = ({ savedArticles }) => (
  <div className="card text-left">
    <div className="card-header">
      Results
    </div>
    <div className="card-body">
      {savedArticles.map(article => {
        return <Article
                  title={article.title}
                  date={article.date}
                  link={article.link}
                  key={article._id}
                />
      })}
    </div>
  </div>
);

export default SavedArticles;