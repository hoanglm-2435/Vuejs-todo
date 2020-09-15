<template>
    <div id="completed-tasks">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">
                    Completed: <span class="badge badge-success" v-if="completed.length > 0">{{ completed.length }}</span>
                </h3>
            </div>
            <div class="panel-body">
                <ul class="list-group"
                    name="slide-fade"
                    is="transition-group"
                    enter-active-class="animated tada"
                    leave-active-class="animated bounceOutRight"
                >
                    <li class="list-group-item complete-list" v-for="(task, index) in completed" :key="index">
                        {{ task.body }}
                        <div class="btn-group">
                            <button 
                                type="button" @click="remove(task)" 
                                class="btn btn-danger btn-sm remove-completed"
                            >
                                <span class="glyphicon glyphicon-remove-circle"></span> Remove
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        methods: {
            remove(task) {
                this.$store.dispatch('removeTask', task)
            }
        },
        computed: {
            completed() {
                return this.$store.getters.completeTask
            }
        }
    }
</script>

<style>
    .btn-group {
        float: right;
    }
</style>
