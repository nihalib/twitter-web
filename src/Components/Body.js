import React from "react";

import TweetFeed from "./TweetFeed";

const Body = () => {
    return <main>
        <div id="content">
            <div className="container">
                <TweetFeed/>
            </div>
        </div>
    </main>
};

export default Body;