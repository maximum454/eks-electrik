<template>
    <div id="app">
        <app-nav></app-nav>
        <app-header></app-header>
        <app-services></app-services>
        <app-surprise></app-surprise>
        <app-dilettante></app-dilettante>
        <app-proffesional></app-proffesional>
        <app-feedback></app-feedback>
        <app-reviews></app-reviews>
        <app-per></app-per>
        <app-work></app-work>
        <app-questions></app-questions>
        <app-footer></app-footer>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {}
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    img{
        max-width: 100%;
    }
    .btn-primary,
    .badge-primary{
        background-color: #4B5ED4;
        border: 0;
        border-radius: 0;
        &:hover{
            background-color: #007bff;
        }
    }
    h2{
        margin-bottom: 40px;
        text-align: center;
        text-transform: uppercase;
    }

</style>
