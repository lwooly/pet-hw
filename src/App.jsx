// ## Homework

// 1. Make an array of pets and then create a list of pets including name & photo
// 2. Make a card component for each pet (make it have a coloured border where you can set the color!
// 3. Make a counter component with a + and a - button and a current value. When you press + it should increment and the reverse for -
// 4. Deploy to GitHub as a minimum and vercel preferably. Send the URLs.

import { nanoid } from 'nanoid';
import './App.css'
import PetCard from './components/petCard';
import Counter from './components/counter';

function App() {

  const petArray = [
    {name: 'Nile', species: 'Rabbit', age: 3, borderColor: 'red', image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFiYml0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'},
    {name: 'Whiskers', species: 'Cat', age: 5 , borderColor: 'green', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'},
    {name: 'Rusty', species: 'Dog', age: 7, borderColor: 'yellow', image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
    {name: 'Goldie', species: 'Fish', age: 2, borderColor: 'blue', image: 'https://images.unsplash.com/photo-1539236754983-085fe1449ba4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z29sZGZpc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'},
    {name: 'Buddy', species: 'Bird', age: 4, borderColor: 'purple', image: 'https://images.unsplash.com/photo-1539664030485-a936c7d29c6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlyZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'},
    {name: 'Snowball', species: 'Hamster', age:1, image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFtc3RlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'}
  ];
  

  return (
    <>
    <Counter/>
    {petArray.map(({name, species, age, borderColor, image}) => <PetCard key={nanoid()} name={name} species={species} age={age} borderColor={borderColor} image={image}/>)}
    </>
  )
}

export default App
