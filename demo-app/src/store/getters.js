export default {
    newTask: state => state.newTask,
    tasks: state => state.tasks.filter((task) => {return !task.completed}),
    completeTask: state => state.tasks.filter((task) => {return task.completed})
}
