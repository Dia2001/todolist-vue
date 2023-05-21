import axios from 'axios'

export async function getAllTasks() {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    return res.data
  } catch (err) {
    console.log(err)
    throw err
  }
}