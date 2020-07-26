<template>
    <div class="contacts card">
        <Contact
            v-for="(contact, index) in contacts" 
            :key="index" :contact="contact"/>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Contact from './Contact.vue';
import User from '../types/User';

@Component({
    components: {
        Contact,
    },
})
export default class Contacts extends Vue {
    contacts: User[] = [];

    mounted() {
        this.$store.dispatch('FETCH_CONTACTS');
        this.contacts = this.$store.state.contacts;
        console.log(this.contacts);
        
    }
}
</script>

<style lang="scss">
    .contacts{
        height: calc(100% - 100px);
        overflow-y: auto;
        width: 100%;
        margin-top: 50px;
        padding: 0;

        .contact:first-child {
            border-radius: 15px 15px 0 0;
        }
    }


    @media (max-height: 550px) {
        .contacts {
            margin: 0;
            height: 100%;
        }
    }

    @media (max-width: 550px) {
        .contact:first-child {
            border-radius: 0;
        }
    }

</style>