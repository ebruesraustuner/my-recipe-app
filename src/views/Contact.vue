<template>
    <div class="main">
        <h1>
            hoşgeldiniz </h1>
    </div>
</template>
<style lang="scss">
    #app {
        height: 99vh;
    }

    .main {
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        position: relative;
        overflow: hidden;


        h1 {
            padding: 0;
            margin: 0;
            text-decoration: underline;
            position: absolute;
            left: 50%;
            top: 30%;
            transform: translate(-50%, -70%);
            animation: lefttoright 2s ease-in ;
        }

        @keyframes lefttoright {
            0% {
                left: 150%; 
            }

            100% {
                left: 50%;
            transform: translate(-50%, -70%);
            }
        }
    }
</style>