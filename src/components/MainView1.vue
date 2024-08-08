<template>

    <header>
        <h1>CHOOSE TYPE</h1>
    </header>

    <body>

        <div class="card-container">
            <button class="cards" @click="toggleModal('SUV')">SUV</button>
            <button class="cards" @click="toggleModal('PICKUP')">PICKUP</button>
            <button class="cards" @click="toggleModal('SPORT')">SPORT</button>
            <button class="cards" @click="toggleModal('OFFROAD')">OFFROAD</button>
            <button class="cards" @click="toggleModal('SMALL')">SMALL</button>
        </div>
        <div v-if="showModal">
            <MainModal @close="toggleModal" :type="typeC" />
        </div>
    </body>

</template>

<script>

    import MainModal from './MainModal.vue';
    export default {
        components: {
            MainModal
        },
        data() {
            return {
                showModal: false,
                typeC: ''
            }
        },
        methods: {
            toggleModal(type) {
                this.showModal = !this.showModal
                this.typeC = type
            }
        }
    }

</script>

<style>

    header {
        background-color: #d000ff;
        padding: 1rem;
        text-align: center;
        font-family: cursive;
    }
    body {
        background-color: #d000ff;
        display: block;
        text-align: center;
        width: 100%;
        font-family: cursive;
    }
    .card-container {
        width: 80%;
        height: 300px;
        display: flex;
        margin: 0 auto;
        margin-top: 50px;
    }
    .cards {
        position: relative;
        left: 0;
        width: auto;
        border: 5px black solid;
        border-radius: 50px;
        padding: 8px;
        height: auto;
        background-color: white;
        transition: .5s all;
        flex: 1;
        font-size: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-family: cursive;
    }
    .cards:nth-child(even) {
        background-color:white;
    }
    .cards:nth-child(odd) {
        background-color: #d000ff;
    }
    .cards{
        flex: 1;  cursor: pointer;
    }
    .cards:hover {
        flex: 3;
    }
    button {
        border: none;
        cursor: pointer;
        color: black;
        font-family: cursive;
    }
    h1 {
        color: white;
        font-family: cursive;
    }
    
</style>