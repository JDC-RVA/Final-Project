import React, { Component } from "react";
import YouTube from "youtube-api-search";
import Logger from "youtube-api-search";
const API = "AIzaSyDMXeW-EZcWG-cErEeb0L2YingWCgBHAos";

// //Node search function
// function searchByKeyword() {
//   var results = YouTube.Search.list("id,snippet", {
//     q: "dogs",
//     maxResults: 25
//   });
//   for (var i in results.items) {
//     var item = results.items[i];
//     Logger.log("[%s] Title: %s", item.id.videoId, item.snippet.title);
//   }
// }

// var finalURL="https://developers.google.com/youtube/v3/search?key=${API}
// part=snippet
// &order=viewCount
// &q=skateboarding+dog
// &type=video
// &videoDefinition=high"

class Youtube extends Component {
  // Map over this.state.products and render a ProductCard component for each product object
  render() {
    return (
      <div className="youtube">
        <iframe
          title="youtube video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fqzhtvLWefA"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
}
export default Youtube;
