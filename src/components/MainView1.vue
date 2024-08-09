<template>
<div id="all">
        <h1>CHOOSE TYPE</h1>
        <button @click="handleColorChange">Change color :)</button>
    
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
    </div>
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
            },
            handleColorChange() {
                const cards = document.querySelectorAll('.cards');
    
        if (cards[0].style.backgroundColor !== "gray") {
            cards.forEach(card => {
            card.style.backgroundColor = "gray";
            });
        } else {
            cards.forEach(card => {
            card.style.backgroundColor = "";
            });
    }

            },
        }
    }

</script>

<style scoped>
    #all {
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: top;
    }
    .card-container {
        width: 80%;
        min-height: 300px;
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
        color: black;
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
        font-size: 20px;
        background-color: white;
        border-radius: 50px;
        padding: 10px;
        margin: 10px;
        transition: .5s all;
    }
    h1 {
        color: white;
        font-family: cursive;
    }
    
</style>