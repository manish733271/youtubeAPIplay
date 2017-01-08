import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyC7U7508YZgVgYtXs74FgZO65vQCLY_xqQ';

// create a new component
class App extends Component {

  constructor(props){
    super(props);

    this.state = { videos:[],
    selectedVideo: null
    };

    this.videoSearch('surf');
  }

  videoSearch(term){
    YTSearch({key:API_KEY, term:term}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
       });
      //this.setState({videos: vidoes})
    });
  }

  render(){
    return(
      <div>
        <SearchBar onSearch = {term => this.videoSearch(term) } />
        <VideoDetail video = { this.state.selectedVideo } />
        <VideoList
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
          videos = { this.state.videos} />
      </div>
    );
  }

}

//Take this component and put it in html
ReactDOM.render(<App />, document.querySelector('.container'));
