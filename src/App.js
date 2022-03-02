import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Counter from './Counter.js';

function App() {
  const baseUrl = 'https://jsonplaceholder.typicode.com/posts/'
  const [postId, setPostId] = useState('1') //deconstructed object. It is creating a state to hold the postId
  const [gettingPost, setGettingPost] = useState(false) //if gettingPost is true, the useEffect is triggered and causes the fetch to run. if false, the fetch doesn't run; it also switches back to false after the fetch has been completed when the fetch has received the postData json
  const [post, setPost] = useState(null) //holds the post object
  const array = [5, 6, 7, 8]
  const lis = array.map(element => <li>{element}</li>)
  // const colorState = useState('red')
  // const color = colorState[0]
  // const setColor = colorState[1]
  const [color, setColor] = useState('red')

  const [inputColor, setInputColor] = useState('')
  //lines 10-12 are the same as line 13; line 13 is destructuring

  // console.log(colorState)

  const animals = {
    type: 'deer',
    weight: 300,
    color: 'brown and white'
  }



  const { type, weight } = animals
  console.log(color, inputColor)
  console.log(postId)
  console.log(gettingPost)
  //pulls out the type property in the animals object and putting it inside of a variable
  useEffect(() => {
    if (gettingPost == true) {
      fetch(baseUrl + postId) //add postId to the baseUrl to find and fetch that specific post
      .then(response => response.json())
      .then(postData => {
        setGettingPost(false)
        console.log(postData)
        setPost(postData) //causes the component to re-render when the state changes
      });
    }
  }, [gettingPost]) //when the gettingPost changes, run the useEffect method
  //the dependency for the useEffect is at the bottom, 'gettingPost'; part of the useEffect syntax
  //this could be an array of dependencies if there are multiples

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <p>{color}</p>
          <input value={inputColor} onChange={(e) => setInputColor(e.target.value)}></input>
          <button onClick={() => setColor(inputColor)}>change color</button>
        </div>

        <div>
          <input value={postId} onChange={(e) => setPostId(e.target.value)}></input>
          <button onClick={() => setGettingPost(true)}>getPost</button> {/*triggers the fetch when the status is changed to true, which happens when the button is activated with an onClick*/}
          {post !== null ? <div> <h3>{post.title}</h3> <p>{post.body}</p> </div> : 'No post :('}
          {/* setting a ternary to check if there is a post; the default state for the post was set as a null. if there is a post that is found, it is then updated into the <p> element, with the property of the title*/}
          
        </div>
      <p className="name">dog</p>
      <Counter initialCount={200}/>
        <ul>{lis}</ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



export default App;
