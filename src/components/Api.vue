<template>
    <div id="all">
        <h1>TYPE ID</h1>
        <input type="number" v-model.number="asd" @input="fetchCarData">
        <hr>
        <ul>
            <li>We find: {{ cars.model }}</li>
            <li>Your ID: {{ asd }}</li>
            <li>Path: {{ getCarPath(asd) }}</li>
        </ul>
        
    </div>
</template>


<script>
 import { ref, reactive } from 'vue'
export default {
    setup() {
        const asd = ref(0);
        const cars = ref({});

        const getCarPath = (carId) => {
            return `https://freetestapi.com/api/v1/cars/${carId}.jpg`;
        };

        const fetchCarData = () => {
            fetch(getCarPath(asd.value))
                .then(response => response.json())
                .then(data => {
                    cars.value = data;
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        };

        return { asd, cars, getCarPath, fetchCarData };
    
    },
};
</script>

<style>
    #all {
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: top;
    }
    ul {
        list-style-type: none;
        font-size: 30px;
        color: white;
    }
</style>