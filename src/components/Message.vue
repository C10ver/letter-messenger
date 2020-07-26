<template>
    <div class="message">
        <img :src="author.avatar" class="message__avatar avatar">
        <div class="message__content" :class="{ personal }">
            <p class="message__author">{{ author.name }}</p>
            <p class="message__text">{{ text }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import User from '../types/User';

@Component
export default class Message extends Vue{
    @Prop() author!: User;
    @Prop() user!: User;
    @Prop() text!: string;
    private personal: Boolean = false;

    created() {
        if(this.author == this.user) 
            this.personal = true;
    }
}
</script>

<style lang="scss">
    .message {
        margin: 27px 0;

        &__avatar {
            height: 35px;
            width: 35px;   
            min-width: 35px;
            margin-right: 10px;
        }

        &__content {
            display: inline-block;
            background: rgba(163, 164, 170, 0.17);
            box-shadow: 0px 5px 25px rgba(42, 139, 242, 0.05), 0px 7px 25px rgba(42, 139, 242, 0.01), 0px 10px 15px rgba(0, 0, 0, 0.01);
            border-radius: 15px;
            font-size: 13px;
            padding: 10px 15px;
            max-width: 40%;

            &.personal {
                background: rgba(0, 38, 255, 0.17);
            }
        }

        &__text {
            overflow-wrap: break-word;
        }

        &__author {
            color: #4454AD;
            font-weight: bold;
            margin-bottom: 3px;
        }
    }
</style>