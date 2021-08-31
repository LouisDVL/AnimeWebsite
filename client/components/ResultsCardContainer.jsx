import React from "react";
import Card from "./Card";

function ResultsCardContainer(props) {
  console.log(props.result);
  const animeCards = props.result.map((aniObj) => {
    return (
      <Card
        key={aniObj.mal_id}
        id={aniObj.mal_id}
        imageUrl={aniObj.image_url}
      />
    );
  });
  return <div className="cardContainer">{animeCards}</div>;
}

export default ResultsCardContainer;
