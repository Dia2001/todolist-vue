<template>
  <div>
     <AddTodoComponent @add-todo="addTodo" />
    <TodoItemComponent
      v-for="task in todoList"
      :key="task.id"
      :todoProps="task"
      @check-task="checkTodoTask"
      @delete-item="deleteTodoItem"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import {getAllTasks,addTodoNew,deleteTodo} from '../services/TodoService'
import TodoItemComponent from './TodoItem.vue'
import AddTodoComponent from './AddToTo.vue'
export default {
  name: 'Todos-component',
  components: { TodoItemComponent,AddTodoComponent},
  setup() {
    const todos = ref([])
    const fetchTasks = async () => {
      try {
        todos.value = await getAllTasks();
      } catch (err) {
        console.log(err)
      }
    }
    fetchTasks()

    const addTodo = async (newTask) => {
      try {
        todos.value.push(await addTodoNew(newTask))
      } catch (e) {
        console.log(e)
      }
    }

    const checkTodoTask = (id) => {
      // console.log('task id received from child component', id)
      // console.log('todos', todos)
      todos.value = todos.value.map((task) => {
        if (task.id === id) task.completed = !task.completed
        return task
      })
    }

    const deleteTodoItem = async (id) => {
      try {
        await deleteTodo(id);
        todos.value = todos.value.filter((task) => task.id !== id)
      } catch (err) {
        console.log(err)
      }
    }

    return { todoList: todos ,addTodo,checkTodoTask,deleteTodoItem}
  }
}
</script>

<style></style>