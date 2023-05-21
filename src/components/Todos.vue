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
import {getAllTasks} from '../services/TodoService'
import TodoItemComponent from './TodoItem.vue'
export default {
  name: 'Todos-component',
  components: { TodoItemComponent},
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

    return { todoList: todos }
  }
}
</script>

<style></style>