<template>
  <div>
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
import axios from 'axios'
import TodoItemComponent from './TodoItem.vue'
export default {
  name: 'Todos-component',
  components: { TodoItemComponent},
  setup() {
    const todos = ref([])
    const getAllTasks = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
        todos.value = res.data
      } catch (err) {
        console.log(err)
      }
    }
    getAllTasks()

    return { todoList: todos }
  }
}
</script>

<style></style>