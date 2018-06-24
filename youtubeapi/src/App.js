import React, { Component } from 'react';
import SearchBar from './Components/SearchBar/SearchBar'
import Layout from './Components/Layout/Layout'
// import youtubeSearch from 'youtube-api-v3-search'
import './App.css';

class App extends Component {


  // componentDidMount(){
  //   const API_KEY = "AIzaSyAUVxlczCs8fUbF5LiLK2sNerhrUMzOsAM";
  //   youtubeSearch(API_KEY,"salena gomez", (data) => {
  //       console.log(data)
  //   })
  //   }

  render() {
    return (
      <div className="App">
            <Layout >
              <SearchBar/>
            </Layout>
      </div>
    );
  }
}

export default App;
