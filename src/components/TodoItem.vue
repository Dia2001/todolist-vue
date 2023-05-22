<template>
  <p :class="['item', todoProps.completed ? 'isCompleted' : '']" :id="taskId">
    <input type="checkbox" :checked="todoProps.completed" @change="markItemCompleted" />
    {{ todoProps.title }} - id: {{ todoProps.id }}
    <button class="btn" @click="deleteItem">delete</button>
  </p>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'TodoItem-component',
  props: ['todoProps'],
  setup(props, context) {
    const taskId = ref('my-id')
    console.log("Value: "+taskId.value)
    const markItemCompleted = (event) => {
      console.log('event', event.target)
      // console.log('props.todoProps', props.todoProps)
      // console.log('context', context)
      context.emit('check-task', props.todoProps.id)
    }
    const deleteItem = () => {
      context.emit('delete-item', props.todoProps.id)
    }
    return { taskId, markItemCompleted, deleteItem }
  }
}
</script>

<style>
.item {
  padding: 1rem 1rem;
  border-bottom: 1px solid grey;
}
.isCompleted {
  text-decoration: line-through;
}
.btn {
  float: right;
  background: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>