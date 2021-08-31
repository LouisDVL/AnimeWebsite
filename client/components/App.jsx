import React, { useState, useEffect } from "react";
import Search from "./SearchComponent";
import request from "superagent";
import { Route, useHistory } from "react-router-dom";
import ResultsCardContainer from "./resultsCardContainer";

import { getWelcome } from "../api";
import { render } from "react-dom";
import ViewAnimeComponent from "./ViewAnimeComponent";

function App() {
  const [result, setResult] = useState([]);
  let history = useHistory();
  function getSearchResult(inputText) {
    request
      .get(`https://api.jikan.moe/v3/search/anime?q=${inputText}`)
      .end((err, res) => {
        if (err) {
          console.log(err.message);
        } else {
          setResult(res.body.results);
          history.push("/result/anime");
        }
      });
  }
  return (
    <div className="container">
      <h1>Hey Welcome!</h1>
      <Search getSearchResult={getSearchResult} />
      <Route
        path="/result/anime"
        render={() => {
          return <ResultsCardContainer result={result} />;
        }}
      />
      <Route path="/anime/:id" component={ViewAnimeComponent}></Route>
    </div>
  );
}

export default App;
