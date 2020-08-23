import vue from 'vue';
import vuex from 'vuex';
import axios from 'axios';

vue.use(vuex);

// eslint-disable-next-line import/prefer-default-export
export const store = new vuex.Store({
  state: {
    menu: [],
    selectMenu: [],
    totalPage: [],
    currentPage: 2,
  },
  // getters: {
  //   selected: (state, id) => {
  //     const data = state.menu.filter((item) => item.id === id);
  //     const selectCard = state.selectMenu.filter((item) => item.id === id);
  //     return (selectCard.length === data.length);
  //   },
  // },
  mutations: {
    GET_MENU(state, data) {
      state.menu = data;
    },
    SELECT_MENU(state, id) {
      const data = state.menu.filter((item) => item.id === id);
      const selectCard = state.selectMenu.filter((item) => item.id === id);
      if (state.selectMenu.length === 0 || selectCard[0] === undefined) {
        state.selectMenu.unshift(...data);
        console.log(state.selectMenu);
      }
    //   }else{
    //     if (dataSelected.id === selectCard[0].id) {
    //       const selectId = state.selectMenu.map(item => item.id).indexOf(id)
    //       state.selectMenu.splice(selectId, 1)
    //       return
    //     }
    //   }
    },
  },
  actions: {
    getApi(context) {
      axios.get('http://localhost:8080/api/v1/menu/')
        .then((res) => {
          context.commit('GET_MENU', res.data.result);
        });
    },
  },
});
