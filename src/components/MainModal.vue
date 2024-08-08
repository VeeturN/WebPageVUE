<template>

    <div class="backdrop" @click.self="closeModal">
        <div class="modal">

            <h1>YOU CHOOSE: {{ type }}</h1>
            
            <label>Maximum mileage:   
                <input type="range" 
                       name="nasycenie" 
                       min="0" 
                       max="500000" 
                       step="500" 
                       v-model="range">
            </label>

            <br>

            {{ range + " KM"}}
            
            <br>    
            
            <label>Price MIN:  
                <input type="number" 
                       name="price" 
                       min="0" 
                       max="100000" 
                       step="1000" 
                       v-model="priceMin" 
                       @input="handlePriceChange">
            </label>

            <br>

            <label>Price MAX:  
                <input type="number" 
                       name="price" 
                       min="0" 
                       max="100000" 
                       step="1000" 
                       v-model="priceMax"
                       @input="handlePriceChange">
                </label>

            <br>
            
            <label>Color: 
                <select v-model="color">
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                </select>
            </label>
    
            <br>

            <h1>CARS</h1>

            <div class="scrollable-container">  
                <div v-for="car in cars" :key="car.id">
                    <div v-if="isCarInRange(car)" class="oneCar">
                        {{ car.brand }} {{ car.model }} {{ car.price }} {{ car.mileage }} {{ car.color }}
                        <img :src="getCarImagePath(car.id)" alt="Car Image" />
                    </div>
                </div>
                <div v-if="!hasCarsInRange">
                    <h1>We don't have such cars</h1>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    export default {
        props: ['type'],
        data() {
            return {
                range: 600000,
                priceMin: '0',
                priceMax: '9999999',
                color: 'black',
                have: true,
                path: "",
                cars: []
            }
        },
        computed: {
            hasCarsInRange() {
                return this.cars.some(car => this.isCarInRange(car));
            }
        },
        methods: {
            closeModal() {
                this.$emit('close')
            },
            handlePriceChange(event) {
                if (this.priceMin > this.priceMax) {
                    this.priceMax = this.priceMin;
                } else if (this.priceMax < this.priceMin) {
                    this.priceMin = this.priceMax;
                }
            },
            isCarInRange(car) {
                const inRange = car.mileage < this.range && car.color == this.color && car.price <= this.priceMax && car.price >= this.priceMin && car.type == this.type;
                    return inRange;
            },
            getCarImagePath(carId) {
                return `/src/assets/${carId}.jpg`;
            }
        },
        mounted() {
        fetch('http://localhost:3000/car')
            .then(response => response.json())
            .then(json => {
                this.cars = json
            })
        }
    }   

</script>

<style scoped>

    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal {
        background-color: #d000ff;
        border: 5px black solid;
        padding: 1rem;
        border-radius: 20px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        width: 30rem;
        max-width: 80%;
        max-height: 80%;
        overflow-y: auto; 
    }
    h1 {
        color: white;
    }
    .scrollable-container {
        max-height: 400px; 
        overflow-y: auto; 
    }
    label {
        color: white;
    }
    input {
        margin: 0.5rem;
        background-color: #d000ff;
        border: 3px solid black;
        color: white;
    }
    select{
        background-color: #d000ff;
        border: 3px solid black;
        color: white;
    }
    img {
        width: auto;
        height: auto;
        max-width: 80%;
        border: 2px solid black;
    }
    .oneCar{
        background-color: #d000ff;
        border: 2px solid black;
        margin: 5px;
        padding: 5px;
    }
</style>