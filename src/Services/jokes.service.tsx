import axios from "axios"

export interface IJoke {
    error: boolean;
    amount: number;
    jokes: (JokesEntity)[] | null;
  }
  export interface JokesEntity {
    category: string;
    type: string;
    joke: string;
    flags: Flags;
    id: number;
    safe: boolean;
    lang: string;
  }
  export interface Flags {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
  }
  

export const getRandomTenJokes = async (): Promise<IJoke[]> => {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single&amount=10')
        const data = await response.json() as IJoke[]
        return data.
    } catch (e) {
        console.log(e)
        throw e
    }
}

export const getRandomTenJokesAxios = async (): Promise<IJoke[]> => {
  try {
      const response = await axios.get('https://v2.jokeapi.dev/joke/Any?type=single&amount=10')
      return response.data
  } catch (e) {
      console.log(e)
      throw e
  }
}

