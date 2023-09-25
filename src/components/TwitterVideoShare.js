import React, { useEffect, useState } from "react";
import {TwitterTweetEmbed} from "react-twitter-embed";
import axios from "axios";

const TwitterVideoShare = () => {
    const [tweetId, setTweetId] = useState("1705301713715068929");

    // useEffect(() => {
    //   // Make an API request to fetch the video URL
    //   axios
    //   .get()
    //   .then((response) => {
    //     const tweetId = response.data.tweetId; // Assuming your API returns the tweet ID
    //     setTweetId(tweetId);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching tweet ID: ", error);
    //   });
    // }, []);
  return (
    <div>
   {tweetId && (
        <TwitterTweetEmbed
          tweetId={tweetId}
        />
      )}
  </div>
  )
}

export default TwitterVideoShare
