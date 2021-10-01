<script lang="ts">
    let dateNow = new Date();
    let dateCalculated;
    let dayNumber = dateNow.getDay;
    let monthNumber = dateNow.getMonth();
    let yearNumber = dateNow.getFullYear;
    const decrementMonth = () => {
        if(monthNumber) {

        }
    }
    const incrementMonth = () => {
        
        monthNumber++;
    }
</script>

<div class="main-wrapper">
    <div class="top-bar">
        <div class="left-arrow" on:click={decrementMonth}>L</div>
        <div class="month-name">{monthNumber + 1}</div>
        <div class="right-arrow" on:click={incrementMonth}>></div>
    </div>
</div>
<slot />

<style>
    .main-wrapper {
        position: absolute;
        z-index: 999;
        width: 350px;
        transform: TranslateY(-200%);
    }
    .top-bar {
        display: flex;
        flex-flow: row;
        background: #ddd;
        color: #222;
        justify-content: space-around;
    }
    @media only screen and (max-width: 1700px) {
        .main-wrapper {
            transform: Translate(-100%, -200%);
        }
    }
    
    @media only screen and (max-width: 1300px) {
        .main-wrapper {
            transform: Translate(0,0);
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
        }
    }
</style>
