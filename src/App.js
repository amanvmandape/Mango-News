import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import Search from './components/Search';
import {
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  pageSize = 9

  state = 
  {
    progress: 0,
    search: "iphone"
  }
  setProgress = (progress) =>
  {
    this.setState({progress: progress})
  }
  setSearch = (search)=>
  {
    this.setState({search})
  }
  apiKey = process.env.REACT_APP_NEWS_API
  render() {
    return (
      <div>
        <NavBar setSearch={this.setSearch}/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
      />
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country='in' category='general' />} />
          <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country='in' category='business' />} />
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country='in' category='entertainment' />} />
          <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country='in' category='health' />} />
          <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country='in' category='science' />} />
          <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country='in' category='sports' />} />
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country='in' category='technology' />} />
          <Route exact path="/search" element={<Search setProgress={this.setProgress} apiKey={this.apiKey} key="search" pageSize={this.pageSize} country='in' category='general' search={this.state.search}/>} />
        </Routes>
      </div>
    )
  }
}
