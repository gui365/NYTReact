import React from "react";
import SearchForm from "../SearchForm";
import SearchResults from '../SearchResults/SearchResults';
import "../../App.css";

const SearchContainer = ({ topic, startDate, endDate, methodChange, methodSubmit, articles, saveMethod }) => (
  <div>
    <SearchForm
      topic={topic}
      startDate={startDate}
      endDate={endDate}
      methodChange={methodChange}
      methodSubmit={methodSubmit}
    />
    <SearchResults 
      articles={articles}
      saveMethod={saveMethod}
    />
  </div>
)

export default SearchContainer;