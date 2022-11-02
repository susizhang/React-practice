import React from "react";
import empty from "../asset/Search--empty-rafiki.png";

const Article = ({ hits, text }) => {
  const filtered = hits.filter((x) => {
    return (
      x.title?.includes(text) ||
      x.author?.includes(text) ||
      x.url?.includes(text)
    );
  });

  const articles = filtered.map(
    ({ title, url, points, author, created_at, num_comments }, index) => {
      return (
        <article className="search-article" key={index}>
          <div className="article-top">
            <span className="article-title">{title}</span>
            <div className="article-url-container">
              <a className="article-url" href={url}>
                {url}
              </a>
            </div>
          </div>
          <div className="article-bottom">
            <span href=""> {points} points </span>
            <span>|</span>
            <span href=""> {author}</span>
            <span>|</span>
            <span href=""> {created_at} years ago</span>
            <span>|</span>
            <span href=""> {num_comments} comments</span>
          </div>
        </article>
      );
    }
  );

  return (
    <>
      {articles.length ? (
        <div className="search-result-container">
          {articles}
          <div className="main-page-button">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="13 17 18 12 13 7"></polyline>
                <polyline points="6 17 11 12 6 7"></polyline>
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div className="search-result-container search-empty-container">
          <img className="search-empty-img" src={empty} alt="no result" />
          <h2>Ups!... no results found</h2>
          <span> Please try another search</span>
        </div>
      )}
    </>
  );
};

export default Article;
