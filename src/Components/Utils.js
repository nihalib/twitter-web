import React from "react";

export const displayErrorText = () => {
    return <div className="rules-error-msg">Something went wrong. Please try after some time.</div>;
};

export const sampleRule = () => {
    return <div className="sample-rules-display">
        <h3>Some example rules</h3>
        <ul>
            <li>song youtube has:links context:55.810938279801470977</li>
            <li>(developer OR engineer) remote (context:66.961961812492148736 OR context:66.850073441055133696)</li>
            <li>context:66.847888632711061504 has:links -is:retweet savings</li>
        </ul>
    </div>
};

export const TWITTER_STREAM_FEEDS = process.env.REACT_APP_TWITTER_STREAM_FEEDS_URL;
export const TWITTER_STREAM_RULES = process.env.REACT_APP_TWITTER_STREAM_RULES_URL;

