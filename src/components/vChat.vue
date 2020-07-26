<template>
    <div class="example">
        <div class="chat__friend card">
            <img class="chat__avatar avatar" :src="friend.avatar" alt="">
            <p class="chat__name">{{ friend.name }}</p>
        </div>
        <div class="chat__window card">
            <Message 
                v-for="(message, index) in messages"
                :key="index"
                :author="message.author"
                :text="message.text"
                :user="user"/>
        </div>
        <div class="chat__enter card">
            <img class="chat__enter__avatar avatar" :src="user.avatar" alt="">
            <input class="chat__input" type="text" v-model="message" placeholder= "Сообщение..." @keypress.enter="sendMsg()">
            <img src="../assets/right-arrow.svg" alt="" class="chat__send" @click="sendMsg()">
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import User from '../types/User';
import Message from './Message.vue';

@Component({
    components: {
        Message,
    }
})
export default class vChat extends Vue{
    @Prop() private friend!: User;
    @Prop() private messages!: Message[];
    @Prop() private user!: User;
    message: string = '';

    mounted() {
        this.$watch('messages', () => {
            this.scrollBottom();
        });
    }

    sendMsg() {
        if(!this.message){
            alert('Введите сообщение');
            return;
        }
        this.$store.commit('SEND_MESSAGE', {
            author: this.user,
            text: this.message,
        });
        this.message = '';
        setTimeout(this.scrollBottom , 10);
    }

    scrollBottom() {
        const windows = document.querySelectorAll('.chat__window') as NodeListOf<Element>;
        windows.forEach(window => window.scrollTop = window.scrollHeight);
    }
}
</script>