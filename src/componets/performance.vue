<template>
    <section class="performance">
        <div class="container">
            <h2 class="performance__title">КАК МЫ ВЫПОЛНИМ ВАШ ЗАКАЗ</h2>
            <div class="row">
                <div class="col">
                    <img src="../assets/step1.png" alt="">
                    <div class="performance__num">1</div>
                    <h3>Отправьте заявку</h3>
                </div>
                <div class="col">
                    <img src="../assets/step2.png" alt="">
                    <div class="performance__num">2</div>
                    <h3>Наш технолог приедет к вам</h3>
                </div>
                <div class="col">
                    <img src="../assets/step3.png" alt="">
                    <div class="performance__num">3</div>
                    <h3>Рассчитает стоимость и заключит договор</h3>
                </div>
                <div class="col">
                    <img src="../assets/step4.png" alt="">
                    <div class="performance__num">4</div>
                    <h3>Мы выполним работы</h3>
                </div>
                <div class="col">
                    <img src="../assets/step5.png" alt="">
                    <div class="performance__num">5</div>
                    <h3>Вы произведете оплату</h3>
                </div>
            </div>
            <button class="btn badge-primary mt-5">Отправить заявку</button>
        </div>
    </section>
</template>

<script>
    export default {
        name: "performance"
    }
</script>

<style scoped lang="scss">
    .performance{
        text-align: center;
        background-color: #f2f2f2;
        transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
        padding: 30px 0 30px 0;
        h3{
            font-size: 16px;
        }
        &__title{
            margin-bottom: 40px;
            text-transform: uppercase;
        }
        &__num{
            margin-top: 20px;
            margin-bottom: 10px;
            font-size: 30px;
            font-weight: bold;
        }
    }
</style>