<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="#"><img src="../assets/logo.png" width="180" alt=""></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Услуги</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Схема работы</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Отзывы</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Наши услуги</a>
                    </li>
                </ul>
                <div class=" my-2 my-lg-0">
                    <div>
                        <a href="#" class="text-light mr-1">+7 (7172) 472-574</a><span class="text-light">|</span>
                        <a href="#" class="text-light">+7 701 516 69 28</a>
                    </div>
                    <button class="btn btn-block btn-primary">Заказать звонок</button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "nav"
    }
</script>

<style scoped lang="scss">
    .navbar{

    }
</style>