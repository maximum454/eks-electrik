<template>
    <section class="reviews">
        <div class="container">
            <h2>ЧТО ГОВОРЯТ НАШИ КЛИЕНТЫ</h2>


        </div>
    </section>
</template>

<script>
    export default {
        name: "reviews"
    }
</script>

<style scoped lang="scss">
    .reviews {
        padding: 30px 0;
        text-align: center;
        transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;

        p {
            color: #000;
        }

        h5 {
            color: #ff7c05;
            font-style: normal;
        }
    }
</style>