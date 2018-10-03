import React from "react";
import "../../App.css";

const SearchForm = ({ topic, startDate, endDate, methodChange, methodSubmit }) => (
  <div className="card text-left">
    <div className="card-header">
      Search
    </div>
    <div className="card-body">
      <form>
        <div className="form-group">
          <label htmlFor="topic">Topic</label>
          <input name="topic" value={topic} onChange={methodChange} type="text" className="form-control" id="topic" />
        </div>
        <div className="form-group">
          <label htmlFor="date-from">Start Date</label>
          <input name="startDate" value={startDate} onChange={methodChange} type="date" className="form-control" id="date-from"/>
        </div>
        <div className="form-group">
          <label htmlFor="date-to">End Date</label>
          <input name="endDate" value={endDate} onChange={methodChange} type="date" className="form-control" id="date-to"/>
        </div>
        <button type="submit" onClick={methodSubmit} className="btn btn-primary search-button">SEARCH</button>
      </form>
    </div>
  </div>
)

export default SearchForm;
