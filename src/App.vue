<template>
  <div id="myApp">
    <HeaderComponent />
    <TodosComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue'
import TodosComponent from './components/Todos.vue'
export default {
  name: 'App',
  components: { HeaderComponent , TodosComponent}
}
</script>

<style>
#myApp {
  background: yellowgreen;
}
</style>