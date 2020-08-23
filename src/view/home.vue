<template>
<div>
  <Navbar/>
  <div>
    <Sidebar @addItem="addModal"/>
    <Modal @closeModal="closeModal"/>
    <div>
      <Content @checkoutHeader="addCheckout"/>
      <Checkout @closeCheckout="closeCheckout"/>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from '../components/_module/Navbar.vue';
import Content from '../components/_module/Content.vue';
import Modal from '../components/_module/Modal.vue';
import Checkout from '../components/_module/Checkout.vue';
import Sidebar from '../components/_module/Sidebar.vue';

export default {
  name: 'home',
  components: {
    Navbar,
    Content,
    Sidebar,
    Modal,
    Checkout,
  },
  methods: {
    addModal() {
      document.querySelector('.addItem').classList.add('addItem-active');
    },
    closeModal() {
      document.querySelector('.addItem').classList.remove('addItem-active');
    },
    addCheckout() {
      document.querySelector('.checkoutHeader').classList.add('checkoutHeader-active');
    },
    closeCheckout() {
      document.querySelector('.checkoutHeader').classList.remove('checkoutHeader-active');
    },
  },
};
</script>

<style scoped>

</style>
