<template>
    <header class="header">
        <div class="container">
            <div class="row d-flex">
                <div class="align-self-center col-5">
                    <h1>ЭЛЕКТРИК АСТАНА</h1>
                    <p>от простого переноса розеток в квартире до монтажа электропроводки в коммерческих и административных помещениях квалифицированной бригадой электриков</p>
                    <div class="d-flex justify-content-between">
                        <div>
                            <img src="../assets/payment.png" alt="">
                            Без
                            переплат
                        </div>
                        <div>
                            <img src="../assets/measuring-tape.png" alt="">
                            Бесплатный
                            замер
                        </div>
                    </div>

                    <button class="btn btn-primary">Заказать звонок</button>
                </div>
                <div class="align-self-bottom col-7">
                    <img src="../assets/electric.png" alt="">
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped lang="scss">
    .header {
        padding: 40px 0 0;
        img{
            max-width: 100%;
        }
    }
</style>