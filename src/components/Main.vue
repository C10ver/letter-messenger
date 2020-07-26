!<template>
    <div class="main">
        <Header :onExit="exit" />
        <router-view></router-view>
        <Footer />
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import Footer from '../views/Footer.vue';
import Header from '../views/Header.vue';
import User from '../types/User';

@Component({
    components: {
        Header,
        Footer,
    },
})
export default class Main extends Vue {
    private user: User = this.$store.state.currentUser; 

    exit() {
        this.$store.state.currentUser = {};
        this.$router.push('login');
    }
}

</script>

<style lang="scss">
    .main{ 
        height: 100%;
        width: 90%;
        padding: 50px 10%;
        overflow-y: hidden;
        position: relative;

        &__header, &__footer{
            width: 80%;
            background: linear-gradient(45.49deg, #5C72E8 25.82%, #5068E2 86.22%);
            box-shadow: 0px 5px 25px rgba(42, 139, 242, 0.07), 0px 7px 25px rgba(42, 139, 242, 0.03), 0px 10px 15px rgba(0, 0, 0, 0.03), inset 0px 5px 25px rgba(42, 139, 242, 0.07), inset 5px -4px 10px #4A60D5;
            padding: 10px 20px;
            min-height: 40px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }

        &__header {
            top: 0;
            border-radius: 0px 0px 15px 15px;
            margin-bottom: 10px;
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
        }

        &__header > * {
            margin: 0 10px;
        }

        &__footer {
            bottom: 0;
            border-radius: 15px 15px 0px 0px;
            margin-top: 10px;
        }

        &__exit {
            background: none;
            border: none;
            font-weight: bold;
            color: #fff;
            font-size: 15px;
            cursor: pointer;
        }
    }

    .avatar {
        height: 45px;
        width: 45px;
        min-width: 45px;
        border-radius: 100px;
    }

    @media (max-width: 900px) {
        .main {
            width: 100%;
            padding: 50px 0;

            &__header, &__footer{
                border-radius: 0;
                width: 100%;
            }
            
            .card {
                border-radius: 0;
            }
        }
    }
</style>