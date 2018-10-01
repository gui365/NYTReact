import React from "react";
import Result from "./Result";
import "../../App.css";

const SearchResults = ({ articles, saveMethod }) => (
  <div className="card text-left">
    <div className="card-header">
      Results
    </div>
    <div className="card-body">
      {articles.map((article, index) => {
        return <Result
                  index={index}          
                  title={article.headline.main}
                  date={article.pub_date}
                  link={article.web_url}
                  saveMethod={saveMethod}
                  key={article._id}
                />
      })}
    </div>
  </div>
);

export default SearchResults;