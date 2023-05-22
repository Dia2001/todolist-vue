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

export async function addTodoNew(newTask) {
    try {
      const res = await axios.post('https://jsonplaceholder.typicode.com/todos', newTask)
      return res.data
    } catch (err) {
      console.log(err)
      throw err
    }
}

export async function deleteTodo(id) {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    } catch (err) {
      console.log(err)
      throw err
    }
}
