import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnimeById } from "../api";

function ViewAnimeComponent() {
  const [animeToView, setAnimeToView] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  //   const animeToView = await getAnimeById(id);

  useEffect(() => {
    getAnimeById(id).then((data) => {
      setAnimeToView(data);
      setIsLoading(false);
    });
  }, []);

  function loadContent() {
    if (isLoading) {
      return <div className="spinner"></div>;
    } else {
      return (
        <div className="animeView">
          <h1>{animeToView.title}</h1>
          <img src={animeToView.image_url} />
          <p>{animeToView.aired.string}</p>
          <h2>Description</h2>
          <p>{animeToView.synopsis}</p>
        </div>
      );
    }
  }

  let content = loadContent();
  return content;
}

export default ViewAnimeComponent;
