<template>
  <div id="app">
    <todo-list v-bind:todos="todos"></todo-list>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import TodoList from './components/TodoList';

export default {
    name: 'app',
    components: {
      TodoList,
    },
    data() {
        return {
			todos: [
				{
					title: 'Todo A',
					project: 'Project A',
					done: false,
				},
				{
					title: 'Todo B',
					project: 'Project B',
					done: true,
				},
				{
					title: 'Todo C',
					project: 'Project C',
					done: false,
				},
				{
					title: 'Todo D',
					project: 'Project D',
					done: true,
				},
			]
        }
    }
}
</script>