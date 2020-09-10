<template>
	<div>
		<h2>Complete Task: {{ todos.filter(todo => { return todo.done === true }).length }}</h2>
		<h2>Pending Task: {{ todos.filter(todo => { return todo.done === false }).length }}</h2>
		<todo 
			:key="todo.id" 
			v-for="todo in todos" 
			v-on:delete-todo="deleteTodo"
			v-on:complete-todo="completeTodo"
			v-bind:todo="todo"
		/>
		<create-todo 
			v-on:create-todo="createTodo"
		/>
	</div>
</template>

<script type = "text/javascript" >
import Todo from './Todo';
import CreateTodo from './CreateTodo';

export default {
	props: ['todos'],
	components: {
		Todo,
		CreateTodo,
	},
	methods: {
		deleteTodo(todo) {
			this.$swal({
				title: 'Are you sure?',
				text: 'This Task will be deleted!',
				type: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#DD6B55',
				confirmButtonText: 'Yes, delete it!',
				closeOnConfirm: false,
			}).then((result) => {
				if (result.value) {
					const todoIndex = this.todos.indexOf(todo);
					this.todos.splice(todoIndex, 1);
					this.$swal('Deleted!', 'Your Task has been deleted.', 'success');
				}
			});
		},
		createTodo(newTodo) {
			this.todos.push(newTodo);
			this.$swal('Success!', 'To-Do created!', 'success');
		},
		completeTodo(todo) {
			const todoIndex = this.todos.indexOf(todo);
			this.todos[todoIndex].done = true;
			this.$swal('Success!', 'To-Do completed!', 'success');
		}
	}
};
</script>