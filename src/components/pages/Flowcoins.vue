<template>
    <div id="flowcoins">
        <div class="title">
            <h1>Comprar Flowcoins</h1>
            <p>Sua carteira está vazia!</p>
        </div>
        <div class="flow-list">
            <ul>
                <li class="row">
                    <div class="qt-flow">
                        <img src="../../assets/flowcoins/FLOWCOINS_MIC.svg">
                        <p class="value">200 Flowcoins</p>
                    </div>
                    <button class="flow-value">R$ 20,00</button>
                </li>
                <li class="row">
                    <div class="qt-flow">
                        <img src="../../assets/flowcoins/FLOWCOINS_MIC.svg">
                        <p class="value">400 Flowcoins</p>
                    </div>
                    <button class="flow-value">R$ 40,00</button>
                </li>
                <li class="row">
                    <div class="qt-flow">
                        <img src="../../assets/flowcoins/FLOWCOINS_MIC.svg">
                        <p class="value">800 Flowcoins</p>
                    </div>
                    <button class="flow-value">R$ 80,00</button>
                </li>
                <li class="row">
                    <div class="qt-flow">
                        <img src="../../assets/flowcoins/FLOWCOINS_MIC.svg">
                        <p class="value">1.000 Flowcoins</p>
                    </div>
                    <button class="flow-value">R$ 100,00</button>
                </li>
                <li class="row">
                    <div class="qt-flow">
                        <img src="../../assets/flowcoins/FLOWCOINS_MIC.svg">
                        <p class="value">2.500 Flowcoins</p>
                    </div>
                    <button class="flow-value">R$ 250,00</button>
                </li>
                <li class="row">
                    <div class="qt-flow">
                        <img src="../../assets/flowcoins/FLOWCOINS_MIC.svg">
                        <p class="value">5.000 Flowcoins</p>
                    </div>
                    <button class="flow-value">R$ 500,00</button>
                </li>
                <li class="row">
                    <div class="qt-flow">
                        <img src="../../assets/flowcoins/FLOWCOINS_MIC.svg">
                        <p class="value">10.000 Flowcoins</p>
                    </div>
                    <button class="flow-value">R$ 1000,00</button>
                </li>
                <li class="row">
                    <div class="qt-flow">
                        <img src="../../assets/flowcoins/FLOWCOINS_MIC.svg">
                        <p class="value">50.000 Flowcoins</p>
                    </div>
                    <button class="flow-value">R$ 4.500,00</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style>
    #flowcoins{
        display: flex;
        flex-direction: column;
        gap:25px;
        margin: 0 auto;
        margin-bottom: 80px;
        width: 700px;

        background: white;
        border-radius: 5px;
        padding-bottom: 35px;
    }
    .title{
        text-align: center;
        margin-top: 25px;
    }
    .title > h1{
        font-size: 2.5rem;
        letter-spacing: 1px;
        font-weight: 500;
    }
    .title > p{
        font-size: 1.6rem;
        margin-top: 15px;
    }
    .flow-list ul{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 25px;
    }
    .row{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        width: 100%;
        padding: 0 10%;
    }
    .qt-flow{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 15px;
    }
    .qt-flow > img{
        width: 45px;
    }
    .value{
        font-weight: 500;
        font-size: 1.2rem;
        letter-spacing: 1px;
    }
    .flow-value{
        font-size: 1.2rem;
        border: none;
        border-radius: 5px;
        background: var(--color-);
        width: 120px;
        cursor: pointer;
        transition: background .2s linear;
    }
    .flow-value:hover{
        background: var(--color-hover);
    }
</style>
