<template>
    <div class="chat">
        <vChat :user="friend" :friend="user" :messages="messages"/>
        <vChat :user="user" :friend="friend" :messages="messages"/>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import User from '../types/User';
import vChat from './vChat.vue';
import Message from '../types/Message';

@Component({
    components: {
        vChat,
    },
})

export default class Chat extends Vue{
    public friend!: User;
    public user: User = this.$store.state.currentUser;
    public messages: Message[] = [];

    created() {
        this.messages = this.$store.state.currentChat.messages;
        this.friend = this.$store.state.currentChat.friend;
        if (!this.friend)
            this.$router.push('contacts');
    }
}
</script>

<style lang="scss">

    .example {
        max-height: 50%;
        display: grid;
        grid-template-rows: 1fr 8fr 1fr;
        gap: 20px;
        padding: 25px;
    }

    .chat {
        height: 100%;

        &__friend {
            display: flex;
            display: -webkit-flex;
            align-items: center;
        }
        &__avatar {
            margin-right: 10px;
        }

        &__window {
            overflow-y: auto;
        }

        &__enter {
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 6px;

            & > * {
                margin: 0 5px;
            }

            &__avatar {
                height: 50px;
                width: 50px;
            }
        }

        &__input {
            height: 100%;
            width: calc(100% - 100px);
            font-size: 18px;

            &::placeholder {
                font-size: 18px;
                color: #aaacb3;
            }
        }

        &__send {
            height: 32px;
            cursor: pointer;
        }
    }

    @media (max-height: 750px) {
        .example{
            padding: 0 25px;
            margin-bottom: 10px;
        }
    }

    @media (max-width: 550px) {
        .example{
            padding: 0;
            gap: 10px;
        }

        .message__content {
            max-width: 60%;
        }
    }

</style>