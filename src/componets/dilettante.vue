<template>
    <section class="dilettante">
        <h2>НЕ ОБРАЩАЙТЕСЬ К ДИЛЕТАНТАМ</h2>
        <p>По привычке обращаясь к электрикам из ЖЭС вы в 78 % случаев столкнетесь с плохим сервисом</p>
        <div class="container">
            <div class="row">
                <div class="col-lg-3 mb-4">
                    <img src="../assets/img.png" alt="">
                    <h3>Выполнение работ без согласованного проекта и документов</h3>
                </div>
                <div class="col-lg-3 mb-4">
                    <img src="../assets/img1.png" alt="">
                    <h3>Халатное отношение к работе из-за ненадлежащей оплаты труда</h3>
                </div>
                <div class="col-lg-3 mb-4">
                    <img src="../assets/img2.png" alt="">
                    <h3>Отсутствие каких либо гарантий и сертификатов качества</h3>
                </div>
                <div class="col-lg-3 mb-4">
                    <img src="../assets/img3.png" alt="">
                    <h3>Завышение стоимости и реальных объемов работ</h3>
                </div>
                <div class="col-lg-3 mb-4">
                    <img src="../assets/img4.png" alt="">
                    <h3>Использование несертифицированных материалов</h3>
                </div>
                <div class="col-lg-3 mb-4">
                    <img src="../assets/img5.png" alt="">
                    <h3>Отсутствие нужного инструмента</h3>
                </div>
                <div class="col-lg-3 mb-4">
                    <img src="../assets/img6.png" alt="">
                    <h3>Неправильное соединение проводов изолентой</h3>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "dilettante"
    }
</script>

<style scoped lang="scss">
    .dilettante {
        padding: 30px 0;
        text-align: center;
        img{
            margin-bottom: 20px;
        }
        h3{
            font-size: 17px;
        }
    }
</style>