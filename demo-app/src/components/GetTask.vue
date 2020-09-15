<template>
    <div id="get-tasks">
        <form @submit.prevent="addTask">
            <input 
                class="form-controll"
                :value="newTask"
                @change="getTask"
            >
            <br>
            <button type="submit" class="btn btn-primary">New Task</button>
        </form>
    </div>   
</template>

<script>
export default {
    methods: {
        getTask(e) {
            this.$store.dispatch('getTask', e.target.value)
        },
        addTask(e) {
            e.preventDefault()
            this.$store.dispatch('addTask')
            this.$store.dispatch('clearTask')
        }
    },
    computed: {
        newTask() {
            return this.$store.getters.newTask
        }
    }
}
</script>
