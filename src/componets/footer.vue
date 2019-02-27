<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-3 mr-auto ml-0">
                    <img src="../assets/logo.png" alt="">
                </div>
                <div class="col-2 ml-auto mr-0 align-self-center">
                    <a href="#" class="text-light text-right mr-1">+7 (7172) 472-574</a><br>
                    <a href="#" class="text-light text-right">+7 701 516 69 28</a>
                </div>
                <div class="col-2 ml-0 mr-0 align-self-center">
                    <button class="btn btn-primary">Заказать звонок</button>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped lang="scss">
    .footer {
        background-color: #33353c;
        border-style: solid;
        border-width: 1px 0px 0px 0px;
        border-color: #999999;
        transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
        padding: 30px 0px 30px 0px;
    }
</style>