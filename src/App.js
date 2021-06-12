import logo from './logo.svg';
import './App.css';
import {Greeting} from './Greetings'
import {PeopleList} from "./PeopleList";

const people= [{
  name:'John',
  age:40,
  hairColor:'brown',
},
  {
    name: 'James',
    age: 22,
    hairColor: 'black',
  },
  {
    name: 'Honeywell',
    age: 100,
    hairColor: 'blue',
  },
  {
    name: 'MonkeyPants',
    age: 5,
    hairColor: 'yellow',
  }]


function App() {


  
  let adjective ='cool';
  let url = 'https://reactjs.org';

  const displayAlert=() =>{
    alert('Hello');
  }

  return (
    <div className="App">
      <header className="App-header">
        <p style={{color: 'red', fontSize: '96px'}}>Red letters</p>
        <Greeting name="James" number={55} />
        <PeopleList people={people}/>
        <button onClick={() =>alert('Hello')}>Click Me!</button>
        <p>
          This is so {adjective}!
        </p>
        <a
          className="App-link"
          href={url}
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
