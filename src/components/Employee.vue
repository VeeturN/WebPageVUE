<template>
    <div id="all">
        <h1>
            This is an EMPLO page
        </h1>
        <div>
            <h1>Find Name</h1>
            <input type="text" v-model="search">
            <h1> {{ search }} </h1>
        </div>
            <ul>
        <div v-for="emp in match" :key="emp.id">
            <li>{{ emp.age }} - {{emp.name}}
            <button @click="deleteEmployee(emp.id)">Delete</button>
            </li>
        </div>

        </ul>   
        <div>
            <h1>Add Employee</h1>
            <input type="text" v-model="valueNames" placeholder="Name">
            <br>
            <input type="number" v-model="valueAges" placeholder="Age">
            <br>
            <button @click="addEmployee">Add</button>
        </div>
    </div>
</template>

<script>
    import { computed, ref } from 'vue'
    export default {
        setup() {
                const names = ref([
                    { id: 1, name: 'John', age: 30 },
                    { id: 2, name: 'Andrew', age: 25 },
                    { id: 3, name: 'Anna', age: 28 },
                    { id: 4, name: 'Maria', age: 22 },
                    { id: 5, name: 'Tom', age: 35 },
                    { id: 6, name: 'Jerry', age: 40 },
                    { id: 7, name: 'Jack', age: 45 },
                    { id: 8, name: 'Jill', age: 50 },
                    { id: 9, name: 'Jenny', age: 55 },
                    { id: 10, name: 'Jasmine', age: 60 }
                ],)

                const search = ref('')
                const valueNames = ref("")
                const valueAges = ref('')

                const match=computed(()=>{
                    return names.value.filter(emp=>emp.name.toLowerCase().includes(search.value.toLowerCase()))
                })
            return { names , search, match,valueNames,valueAges}
        },
        data() {
            return {

            }
        },
        methods: {
            deleteEmployee(id) {
                this.names = this.names.filter(emp => emp.id !== id)
            },

            addEmployee() {
                if (this.valueNames == "") {
                    alert('Name is required')
                }
                if (this.valueAges == "") {
                    alert('Age is required')
                }
                if(this.valueNames !== "" && this.valueAges !== ""){
                    this.names.push({id:this.names.length+1,name:this.valueNames,age:this.valueAges})
                    this.valueNames = ""
                    this.valueAges = ""
                }

            
            }
        }
    }
</script>

<style>
    #all {
        max-height: 80%;
        text-align: center;
        font-family: cursive;
        display: grid;
    }
    h1 {
        color: white;
        text-align: center;
        font-family: cursive;
    }
    ul {
        padding-left: 0; 
        list-style-position: inside; ;
    }
    li {
        padding-left: 0; 
        color: white;
    }
    button{
        background-color: red;
        color: white;
        border: none;
        padding: 5px 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 10px;
    }
    input{
        border-radius: 10px;
        padding: 5px 10px;
        margin: 4px 2px;
    }
</style>