<template>
    <div class="vi-404-wrapper">
        <div class="vi-404-child-wrapper">
            <div class="vi-img-wrapper">
                <img class="vi-img-parent" src="../../assets/404.png" alt="404">
                <img class="vi-img-left" src="../../assets/404_cloud.png" alt="404">
                <img class="vi-img-mid" src="../../assets/404_cloud.png" alt="404">
                <img class="vi-img-right" src="../../assets/404_cloud.png" alt="404">
            </div>
            <div class="vi-text-wrapper">
                <div class="vi-oops">OOPS!</div>
                <div class="vi-message">{{ message }}</div>
                <div class="vi-info">请检查您输入的网址是否正确，点击以下按钮返回主页</div>
                <a href="/" class="vi-return-home-btn">返回首页</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '页面找不到了哦'
            }
        }
    }
</script>

<style scoped>
    .vi-404-wrapper {
        background: #f0f2f5;
    }
    .vi-404-child-wrapper {
        position: relative;
        width: 1200px;
        margin: 0 auto;
        padding: 0 100px;
        overflow: hidden;
    }
    .vi-img-wrapper {
        position: relative;
        float: left;
        width: 600px;
        padding: 150px 0;
        overflow: hidden;
    }
    .vi-img-parent {
        width: 100%;
    }
    .vi-img-left, .vi-img-mid, .vi-img-right {
        position: absolute;
    }
    .vi-img-left {
        width: 80px;
        top: 17px;
        left: 220px;
        opacity: 0;
        animation-name: cloudLeft;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-delay: 1s;
    }
    .vi-img-mid {
        width: 46px;
        top: 10px;
        left: 420px;
        opacity: 0;
        animation-name: cloudMid;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-delay: 1.2s;
    }
    .vi-img-right {
        width: 62px;
        top: 100px;
        left: 500px;
        opacity: 0;
        animation-name: cloudRight;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-delay: 1s;
    }
    @keyframes cloudLeft {
        0% {
            top: 17px;
            left: 220px;
            opacity: 0;
        }
        20% {
            top: 33px;
            left: 188px;
            opacity: 1;
        }
        80% {
            top: 81px;
            left: 92px;
            opacity: 1;
        }
        100% {
            top: 97px;
            left: 60px;
            opacity: 0;
        }
    }
    @keyframes cloudMid {
        0% {
            top: 10px;
            left: 420px;
            opacity: 0;
        }
        20% {
            top: 40px;
            left: 360px;
            opacity: 1;
        }
        70% {
            top: 130px;
            left: 180px;
            opacity: 1;
        }
        100% {
            top: 160px;
            left: 120px;
            opacity: 0;
        }
    }
    @keyframes cloudRight {
        0% {
            top: 100px;
            left: 500px;
            opacity: 0;
        }
        20% {
            top: 120px;
            left: 460px;
            opacity: 1;
        }
        80% {
            top: 180px;
            left: 340px;
            opacity: 1;
        }
        100% {
            top: 200px;
            left: 300px;
            opacity: 0;
        }
    }
    .vi-text-wrapper {
        position: relative;
        float: left;
        width: 350px;
        padding: 200px 0;
        overflow: hidden;
    }
    .vi-oops {
        font-size: 32px;
        font-weight: bold;
        line-height: 40px;
        color: #1482f0;
        opacity: 0;
        margin-bottom: 20px;
        animation-name: slideUp;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
    }
    .vi-message {
        font-size: 20px;
        line-height: 24px;
        color: #1482f0;
        opacity: 0;
        margin-bottom: 10px;
        animation-name: slideUp;
        animation-duration: 0.5s;
        animation-delay: 0.1s;
        animation-fill-mode: forwards;
    }
    .vi-info {
         font-size: 13px;
         line-height: 21px;
         color: gray;
         opacity: 0;
         margin-bottom: 30px;
         animation-name: slideUp;
         animation-duration: 0.5s;
         animation-delay: 0.2s;
         animation-fill-mode: forwards;
     }
    .vi-return-home-btn {
         display: block;
         float: left;
         width: 110px;
         height: 36px;
         background: #1482f0;
         border-radius: 100px;
         text-align: center;
         color: #ffffff;
         opacity: 0;
         font-size: 14px;
         line-height: 36px;
         cursor: pointer;
         animation-name: slideUp;
         animation-duration: 0.5s;
         animation-delay: 0.3s;
         animation-fill-mode: forwards;
     }
    @keyframes slideUp {
        0% {
            transform: translateY(60px);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
</style>
