import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let [post, setPost] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPost(data))
  })
  
  const nayoks = ['Riyaz', 'Deepjol', 'Rubel', 'Sabana', 'Moushumi', 'Moyuri']
  const friends = [
    {name: 'hafiz', age: 22},
    {name: 'boni', age: 24},
    {name: 'mahim', age: 21},
    {name: 'monirul', age: 26}
  ]
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      <Nayok name='Josim' age='35'></Nayok>
      <Nayok name={nayoks[1]}></Nayok>
      <Nayok name='Bapparazz'></Nayok>
      <Nayok name={nayoks[0]}></Nayok>
      {
        nayoks.map(nk => <Nayok name={nk}></Nayok>)
      }
      {
        friends.map(fd => <Friend friend={fd.name} friendAge={fd.age}></Friend>)
      }
      {
        post.map(pt => <DisplayPost title={pt.title} bod={pt.body} keyword={pt.id}></DisplayPost>) //keyword id dite hobe jodi console bole dai tahole
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function MovieCounter(){
  let [count, setCount] = useState(0)
  const handleClick = () => setCount(count + 1)
  return (
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h3>Number of movies: {count}</h3>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count + 10}></MovieDisplay>
      <MovieDisplay movies={count + 5}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props){
  return <h4>Movies I have acted: {props.movies}</h4>
}

function Nayok(props){
  const nayokStyle = {
    border: '1px solid red',
    margin: '20px'
  }
  return (
    <div style={nayokStyle}>
      <h1>ami nayok-{props.name}</h1>
      <p>I have done in 5 movies in {props.age || 20}</p>
    </div>
  )
}

function Friend(props){
  const friendStyle = {
    border: '1px solid blue',
    margin: '20px'
  }
  return (
    <div style={friendStyle}>
      <h1>{props.friend}</h1>
      <p>{props.friendAge}</p>
    </div>
  )
}

function DisplayPost(props){
  let userStyle = {
    border: '2px solid green',
    margin: '20px'
  }
  return (
    <div style={userStyle}>
      <h2>{props.title}</h2>
      <p>{props.bod}</p>
    </div>
  )
}

export default App;
