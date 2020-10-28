import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

const Tweet = ({feedId}) => {

  const options = {
    cards: "hidden",
    align: "center",
    width: "550",
    conversation: "none",
  };

  return <TwitterTweetEmbed options={options} tweetId={feedId} />;
};

export default Tweet;
