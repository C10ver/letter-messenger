import Vue from 'vue';
import Vuex from 'vuex';
import User from '../types/User';
import Message from '../types/Message';

Vue.use(Vuex);

interface Chat {
  friend: User;
  messages: Message[]
}

export default new Vuex.Store({
  state: {
    currentUser: <User>{},
    currentChat: {
      messages: [{}],
    },
    contacts: [],
  },
  mutations: {
    SET_USER(state, payload) {
      state.currentUser = payload.user;
    },
    SET_CONTACTS(state, payload) {
      console.log(payload.contacts);
      
      state.contacts = payload.contacts;
    },
    SET_CURRENT_CHAT(state, payload) {
      console.log(payload);
      state.currentChat = payload.chat;
    },
    SEND_MESSAGE(state, payload) {
      state.currentChat.messages.push({
        author: payload.author,
        text: payload.text,
      });
    },
  },
  actions: {
    FETCH_CONTACTS({commit}) {
      const contacts: User[] = [
      {
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSb_OsCbk2ds_EqPOrrGTuBxE0g6mnpS-0qSQ&usqp=CAU',
        name: 'Иван Иванов',
      },
    ];

      commit('SET_CONTACTS', {contacts});
    },
    FETCH_CHAT({commit}, friend) {
      const chat = {
        friend,
        messages: [
          {
            author: friend,
            text: 'Привет!',
          },
        ],
      };
      commit('SET_CURRENT_CHAT', {chat});
    },
  },
  modules: {
  },
});
