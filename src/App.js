import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import ReactDOM from 'react-dom'

const { useEffect } = React
const App = () => {
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }, [])
    return (
      <div>
       <h1>Hello React</h1>
      </div>
    );
  }
  ReactDOM.render(<App />, document.getElementById('root'))


/*
const App = () => (
  <BrowserRouter>
  <div className="App">
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/blog/:id" component={Blog} />
  </div>
  </BrowserRouter>
)

const Home = () => {
  return (
  <div>
    <h1>Welcome</h1>
    <p><a href="/about">Aboutへ</a></p>
  </div>
  )
}

const About = () => {
  return (
  <div>
    <h1>About</h1>
    <p><a href="/">Homeに戻る</a></p>
  </div>
  )
}

const Blog = props => {
  const {id} = props.match.params

  return (
    <div>
      <p>{id}番目の記事です</p>
    </div>
  )
}
*/





export default App;
