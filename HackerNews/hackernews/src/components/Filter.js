import React from "react";

const filter = () => {
  return (
    <div className="filter-container">
      <div className="filter-left">
        <div className="filter-option">
          <span>Search</span>
          <select className="select-options">
            <option defaultValue="All">All</option>
            <option value="Stories">Stories</option>
            <option value="Comments">Comments</option>
          </select>
        </div>
        <div className="filter-option">
          <span>by</span>
          <select className="select-options">
            <option defaultValue="Popularity">Popularity</option>
            <option value="Date">Date</option>
          </select>
        </div>
        <div className="filter-option">
          <span>for</span>
          <select className="select-options">
            <option defaultValue="All time">All time</option>
            <option value="Last 24h">Last 24h</option>
            <option value="Past Week">Past Week</option>
            <option value="Past Month">Past Month</option>
            <option value="Past Year">Past Year</option>
            <option value="Custom range">Custom range</option>
          </select>
        </div>
      </div>
      <div className="filter-right">
        <div>results</div>
        <div> seconds</div>
        <div className="share-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default filter;
