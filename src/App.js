import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



 
export default class App extends Component {

  apikey = "6291d4cab4f7474d9d2e84e787e7ad75"

  state ={
    progress:0
  }

  setProgress =(progress)=>{
    this.setState({
      progress: progress,
    })
  }
  render() {
    return (
      <Router>
      <>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        
      />
      <Navbar/>
      

      <Routes>
        <Route exact  path='/'  element={<News api={this.apikey} setProgress={this.setProgress}  key="general" pageSize={5} country={"in"} category={"general"}/>}></Route>

        <Route exact  path='/entertainment'  element={<News api={this.apikey} setProgress={this.setProgress}  key="entertainment" pageSize={5} country={"in"} category={"entertainment"}/>}></Route>

        <Route exact  path='/health'  element={<News api={this.apikey} setProgress={this.setProgress}  key="health" pageSize={5} country={"in"} category={"health"}/>}></Route>

        <Route exact  path='/business'  element={<News api={this.apikey} setProgress={this.setProgress}  key="business" pageSize={5} country={"in"} category={"business"}/>}></Route>

        <Route exact  path='/science'  element={<News api={this.apikey} setProgress={this.setProgress}  key="science" pageSize={5} country={"in"} category={"science"}/>}></Route>

        <Route exact  path='/sport'  element={<News api={this.apikey} setProgress={this.setProgress}  key="sport" pageSize={5} country={"in"} category={"sport"}/>}></Route>

        <Route exact  path='/technology'  element={<News api={this.apikey} setProgress={this.setProgress}  key="technology" pageSize={5} country={"in"} category={"technology"}/>}></Route>
      </Routes>

      
      </>
      </Router>

    )
  }
}

