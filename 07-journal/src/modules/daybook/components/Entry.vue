<template>
    <div class="entry-container mb-3 pointer p-2"
    @click="$router.push({name:'entry',params:{id:10}})">
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Septiembre</span>
            <span class="mx-2 fw-light">2022</span>
        </div>

        <div class="entry-description">
            Exercitation consectetur qui reprehenderit eu voluptate et ad ex ullamco velit anim esse in. Ut adipisicing aliqua ex ut sint duis ea sit qui id aliqua irure elit. Cupidatat quis nostrud incididunt consectetur eu velit cillum aliqua tempor labore. Eu aute est voluptate ipsum in deserunt id minim qui ullamco. Id ex cillum ex culpa cupidatat culpa sit tempor proident officia dolor id proident reprehenderit. Mollit nulla sit ipsum tempor voluptate quis ex non do veniam consequat dolor. In consectetur velit deserunt velit deserunt aliquip nulla qui.

        </div>
    </div>
</template>

<script>

export default {
    
}
</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }

    .entry-description{
        font-size: 12px;
    }
}
</style>
