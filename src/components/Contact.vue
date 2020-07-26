<template>
    <div class="contact" @click="goToChat(contact)">
        <img class="contact__avatar avatar" :src="contact.avatar" alt="Avatar">
        <p class="contact__name">{{contact.name}}</p>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import User from '../types/User';

@Component
export default class Contact extends Vue {
    @Prop() contact!: User;

    goToChat(contact: User): void {
        this.$store.dispatch('FETCH_CHAT', contact);
        this.$router.push('chat');
    }
}
</script>

<style lang="scss">
    .contact {
        padding: 10px 15px;
        cursor: pointer;
        display: flex;
        display: -webkit-flex;
        align-items: center;

        &:hover {
            background: rgba(92, 114, 232, 0.15);;
        }

        &__avatar {
            margin-right: 25px;
        }

        &__name {
            font-size: 15px;
        }
    }
</style>