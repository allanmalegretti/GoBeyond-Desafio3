import React from "react";
import Post from "../posts/Post";
import "./Posts.css";
import DATA_CARD from "../../dataCard"

const Posts = (props) => {
    let button = props.number
    let DATA_CARD_FILTERED = DATA_CARD.filter(element => element.address === button)
  return (
    <section className="posts">
      {DATA_CARD_FILTERED.map((element) => (
        <Post key={element.id} image={element.image} title={element.title} />
      ))}
    </section>
  );
};

export default Posts;