<template>
  <div id="app">
    <!-- <todo-list v-bind:todos="todos"></todo-list> -->
    <div class="row">
        <div class="col-md-6">
            <ListTask></ListTask>
        </div>
        <div class="col-md-6">
            <CompleteTask></CompleteTask>
        </div>
    </div>
    <GetTask></GetTask>
  </div>
</template>

<script>
// import TodoList from './components/TodoList';
import ListTask from './components/ListTask'
import GetTask from './components/GetTask'
import CompleteTask from './components/CompleteTask'
 
export default {
    name: 'app',
    components: {
    //   TodoList,
        ListTask,
        GetTask,
        CompleteTask
    },
}
</script>

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
