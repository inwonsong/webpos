<template>
<div>
  <div>
    <!-- <Modal/> -->
  </div>
  <div class="container" :class="{'show': showSidebar}">
    <div class="control">
      <i class="fas fa-angle-double-right" @click="showNav"></i>
    </div>
    <div class="navigation-icons">
      <router-link to='/home'><i class="fas fa-utensils"></i></router-link>
      <router-link to='/history'><i class="fas fa-book-open"></i></router-link>
      <i class="fas fa-plus" @click="$emit('addItem')"></i>
      <i class="fas fa-sign-out-alt"></i>
    </div>
    <div class="navigation-links">
      <transition-group name="fade">
        <div v-show="showLink" key="1"><router-link to="/home" class="home">Home</router-link></div>
        <div v-show="showLink" key="2"><router-link to="/history" class="history">
        History</router-link></div>
        <div v-show="showLink" key="3" title="아이템 추가">아이템 추가</div>
        <div v-show="showLink" key="4">로그아웃</div>
      </transition-group>
    </div>
  </div>
</div>
</template>

<script>
// import Modal from './Modal.vue';

export default {
  name: 'Sidebar',
  components: {
    // Modal,
  },
  data: () => ({
    showSidebar: false,
    showLink: false,
    name: '',
    nameState: null,
    submittedNames: [],
    file: null,
    file2: null,
    selected: null,
    options: [
      { value: null, text: 'Please select some item' },
      { value: 'a', text: 'This is First option' },
      { value: 'b', text: 'Default Selected Option' },
      { value: 'c', text: 'This is another option' },
      { value: 'd', text: 'This one is disabled', disabled: true },
    ],
    types: [
      'number',
    ],
  }),
  methods: {
    // showNav() {
    //   if (this.showSidebar) {
    //     this.showLink = false;
    //     setTimeout(() => {
    //       this.showSidebar = false;
    //     }, 500);
    //   } else {
    //     this.showSidebar = true;
    //     setTimeout(() => {
    //       this.showLink = true;
    //     }, 500);
    //   }
    // },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal() {
      this.name = '';
      this.nameState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing');
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: airbnb;
  src: url('../../assets/font/OpenSans-SemiBold.ttf')
}
  .container {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 70px;
    height: 100vh;
    padding: 10px;
    padding-top: 27px;
    min-height: calc(100vh - 20px);
    background-color: white;
    border: solid white;
    border-width: 0 1px 0 0;
    z-index: 90;
    transition: all .5s ease-in-out;
    .control {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      margin-bottom: 50px;
      i {
        font-size: 2rem;
        cursor: pointer;
        transition: all .5s ease-in-out;
      }
    }
    &.show {
      width: 200px;
      z-index: 999;
      .control > i {
        color: #F24F8A;
        transform: rotateZ(-180deg);
        z-index: 999;
      }
      .navigation-icons {
        color: #F24F8A;
      }
    }
    .navigation-icons {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 50px;
      float: left;
      i {
        font-size: 2rem;
        padding: 25px 0;
        cursor: pointer;
        transition: all .5s ease-in-out;
        &:hover {
          color: #57CAD5;
        }
      }
    }
    .navigation-links {
      padding-top: 20px;
      float: left;
      div {
        font-size: 1.35rem;
        padding-left: 10px;
        margin-bottom: 52px;
        font-family: airbnb;
        cursor: pointer;
        &:hover {
          color: #57CAD5;
        }
      }
    }
  }
  @mixin nav-childs($values...) {
    @each $var in $values {
      &:nth-child(#{$var}) {
        transition: transform linear calc(.1s * #{$var}), display .5s;
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    @include nav-childs(1,2,3,4,5);
  }
  .fade-enter, .fade-leave-to {
    transform: scale(0);
  }
  .home {
    color: black;
    text-decoration: none;
      &:hover {
      color: #57CAD5;
    }
  }
  .history {
    color: black;
    text-decoration: none;
      &:hover {
      color: #57CAD5;
    }
  }
</style>
