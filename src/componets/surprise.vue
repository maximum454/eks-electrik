<template>
    <section class="surprise">
        <div class="container">
            <form class="surprise__form">
                <h4>ПОДАРОК</h4>
                <h5>При подписании договора, страховка вашего имущества до 30 млн.</h5>
                <div class="form-group">
                    <label for="name">ВАШЕ ИМЯ</label>
                    <input type="text" class="form-control" id="name" aria-describedby="nameHelp"
                           placeholder="Например: Андрей">
                </div>
                <div class="form-group">
                    <label for="phone">ВАШ НОМЕР ТЕЛЕФОНА</label>
                    <input type="tel" class="form-control" id="phone" placeholder="+7 (___) ___-__-__">
                </div>
                <div class="form-group text-center">
                    <button type="submit" class="btn btn-primary text-light">Отправить заявку</button>
                </div>
                <div class="text-center">
                    <span class="form-text text-muted">Отправляя сообщение Вы даете согласие на обработку указанных персональных данных</span>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
    export default {
        name: "surprise"
    }
</script>

<style scoped lang="scss">
    .surprise {
        background-image: url("../assets/gift2.jpg");
        background-position: center center;
        padding: 15px;
        transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;

        h4 {
            text-align: center;
            font-weight: bold;
        }

        h5 {
            font-size: 16px;
            text-align: center;
        }

        .small {
            text-align: center;
        }

        &__form {
            background-color: #fff;
            max-width: 450px;
            margin: 0 auto;
            padding: 15px;
        }

        .form-control {
            border-radius: 0;
        }
    }
</style>