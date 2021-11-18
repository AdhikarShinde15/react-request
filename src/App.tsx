import { useEffect, useState } from 'react';
import './App.css';
import { getRandomTenJokes, IJoke } from './Services/jokes.service';


const App = () => {
  const [Jokes, setJokes] = useState<IJoke[]>([])
  const getJokes = async () => {
    const data = await getRandomTenJokes()
    setJokes(data)
  }
  
  useEffect(() => {
    getJokes()
  }, [])
  return (
    <>
        {
          Jokes.jokes
        }
    </>
  )
}

export default App
