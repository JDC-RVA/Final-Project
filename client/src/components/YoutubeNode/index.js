import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import React, { Component } from "react";
// import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import _ from "lodash";
// import SearchBar from "../SearchBar";
import VideoList from "../VideoList";
import VideoDetail from "../VideoDetail";

const API_KEY = "AIzaSyDMXeW-EZcWG-cErEeb0L2YingWCgBHAos";

// Component class
class YoutubeNode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      seletedVideo: null
    };

    this.videoSearch(props.name);
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        seletedVideo: videos[0]
      });
    });
  }

  render() {
    const throttledSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);
    return (
      <div className="container-fluid">
        {/* <SearchBar onSearchTermChange={throttledSearch} /> */}
        <div className="row">
          <VideoDetail video={this.state.seletedVideo} />
          <VideoList
            onVideoSelect={seletedVideo => this.setState({ seletedVideo })}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

export default YoutubeNode;
