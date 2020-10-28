import React, {useEffect, useState} from "react";

import Tweet from "./Tweet";
import {useStateValue} from "../provider/StateProvider";
import {actionTypes} from "../provider/Reducer";
import {TWITTER_STREAM_FEEDS} from "./Utils";

const TweetFeed = () => {
    const [state, dispatch] = useStateValue();
    const [tweets, setTweets] = useState([]);
    const [count, setCount] = useState(0);

    async function fetchTweet() {
        const eventSource = new EventSource(TWITTER_STREAM_FEEDS);
        eventSource.onopen = (event: any) => console.log('open', event);
        eventSource.onmessage = (event: any) => {
            const latestTweet = JSON.parse(event.data);
            setTweets(tweets => [latestTweet, ...tweets]);
            if (count.length>20){console.log('Closing event');eventSource.close();}
        };
        eventSource.onerror = (event: any) => {console.log('error', event);}
    }

    useEffect(() => {
        handleTweets();
    }, [state]);

    useEffect(() => {
        setCount(tweets.length);
    }, [tweets]);

    const handleTweets = () => {
        console.log("handleTweets", tweets, state);
        if (state.fetchTweet && tweets.length<=50){
            fetchTweet();
        }
        if (tweets.length>50){
            dispatch({
                type: actionTypes.GET_TWEET,
                fetchTweet: false
            })
        }
    };

    const showTweets = () => {
        if (tweets.length > 0) {
            return (
                <>
                    {tweets.map((tweet) => (
                        <Tweet key={tweet.data.id} feedId={tweet.data.id} />
                    ))}
                </>
            );
        }
    };

    return(
        <>
            {showTweets()}
        </>
    )

};

export default TweetFeed;