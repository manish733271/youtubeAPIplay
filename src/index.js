import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyC7U7508YZgVgYtXs74FgZO65vQCLY_xqQ';



// create a new component
class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos:[] };

    YTSearch({key:API_KEY, term:'surfboards'}, (videos) => {
      this.setState({ videos });
      //this.setState({videos: vidoes})
    });
  }

  render(){
    return(
      <div>
        <SearchBar />
        <VideoList videos = { this.state.videos} />
      </div>
    );
  }

}

//Take this component and put it in html
ReactDOM.render(<App />, document.querySelector('.container'));



// const App = () => {
//   return(
//     <div>
//       <SearchBar />
//     </div>
//   );
// }
