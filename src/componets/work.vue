<template>
    <section class="work">
        <div class="container">
            <h2>НАШИ РАБОТЫ</h2>
            <div class="row">
                <div class="col-3 mb-4">
                    <img src="../assets/work.jpg" alt="">
                </div>
                <div class="col-3 mb-4">
                    <img src="../assets/work.jpg" alt="">
                </div>
                <div class="col-3 mb-4">
                    <img src="../assets/work.jpg" alt="">
                </div>
                <div class="col-3 mb-4">
                    <img src="../assets/work.jpg" alt="">
                </div>
                <div class="col-3 mb-4">
                    <img src="../assets/work.jpg" alt="">
                </div>
                <div class="col-3 mb-4">
                    <img src="../assets/work.jpg" alt="">
                </div>
                <div class="col-3 mb-4">
                    <img src="../assets/work.jpg" alt="">
                </div>
                <div class="col-3 mb-4">
                    <img src="../assets/work.jpg" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "work"
    }
</script>

<style scoped lang="scss">
    .work {
        transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
        padding: 30px 0;
        img{
            max-width: 100%;
        }
    }
</style>