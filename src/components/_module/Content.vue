<template>
<div class="content">
  <div class="card">
    <card/>
  </div>
  <div class="rightSide">
      <div class="bodyCart">
        <div class="bodyContent" v-for="item in 7" :key="item.id">
          <div class="row1">
            <img src="../../assets/img/Black Forest.jpg" alt="">
          </div>
          <div class="row2">
            <div class="column1">
              <h6>Black Forest</h6>
            </div>
            <div class="column2">
              <div class="inRow1">
                <button><img src="../../assets/img/-.png" alt=""></button>
              </div>
              <div class="inRow2">
                <p>1</p>
              </div>
              <div class="inRow3">
                <button><img src="../../assets/img/+.png" alt=""></button>
              </div>
              <div class="inRow4">
                <h6>Rp. 30.000</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
  <div class="checkout">
    <div class="price">
      <div class="total">
        <h6>Total :</h6>
      </div>
      <div class="money">
        <h6>Rp. 105.000*</h6>
      </div>
    </div>
    <div class="diskon">
      <h6>*Belum termasuk ppn</h6>
    </div>
    <div class="checkoutButton">
      <button @click="$emit('checkoutHeader')">Check Out</button>
    </div>
    <div class="cancelButton">
      <button><h6>Cancel</h6></button>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'Content',
  components: {
    Card,
  },
  computed: {
    selected() {
      return this.$store.state.selectMenu;
    },
  },
  mounted() {
    this.$store.dispatch('getApi');
  },
};
</script>

<style scoped>
@font-face {
    font-family: "airbnb";
    src: url('../../assets/font/AirbnbCerealBold.ttf');
}

.content {
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 100px;
  left: 70px;
}
.card {
  background: lightgray;
  height: 100%;
  width: 933px;
}

.card h1 {
  text-align: center;
}

.rightSide {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.bodyCart {
  position: fixed;
  background: white;
  display: flex;
  flex-direction: column;
  padding: 5px 15px;
  width: 346px;
  height: 400px;
  font-family: airbnb;
  overflow-y: scroll;
}

.bodyContent {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
}

.row1 {
  background: white;
  height: 100px;
  width: 100px;
}

.row1 img {
  height: 100px;
  width: 76px;
  object-fit: cover;
}
.row2 {
  background: white;
  height: 100px;
  width: 250px;
  padding: 5px;
}

.column1 {
  background: white;
  height: 45px;
  width: 230px;
}

.column1 h6 {
  color: black;
  padding: 5px 7px;
  font-weight: bold;
}

.column2 {
  background: white;
  height: 45px;
  width: 230px;
  padding: 5px;
  display: flex;
  flex-direction: row;
}

.inRow1 {
  background: white;
  height: 35px;
  width: 35px;
}

.inRow1 button {
  width: 33px;
  height: 35px;
}

.inRow2 {
  background: #57CAD5;
  border: 1px solid gray;
  text-justify: center;
  text-align: center;
  padding: 3px;
  height: 35px;
  width: 35px;
}

.inRow3 {
  background: white;
  height: 35px;
  width: 35px;
}

.inRow3 button {
  width: 33px;
  height: 35px;
}
.inRow4 {
  background: white;
  padding-left: 25px;
  padding-top: 15px;
  height: 35px;
  width: 130px;
}

.checkout {
  background: white;
  position: fixed;
  margin-top: 367px;
  width: 346px;
  height: 200px;
  z-index: 50;
  font-family: airbnb;
  box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.2);
}

.price {
  background: white;
  display: flex;
  flex-direction: row;
}

.total {
  background: white;
  margin-left: 15px;
}

.diskon {
  background: white;
  margin-top: 10px;
}

.diskon h6 {
  margin-left: 15px;
}

.money {
  background: white;
  margin-left: 164px;
}

.checkoutButton {
  background: white;
  margin-top: 10px;
}

.checkoutButton button {
  background: #57CAD5;
  margin-left: 15px;
  height: 50px;
  width: 320px;
  border-radius: 15px;
  border: 2px solid lightblue;
}

.cancelButton {
  background: white;
  margin-top: 10px;
}

.cancelButton button {
  background: #F24F8A;
  margin-left: 15px;
  height: 50px;
  width: 320px;
  border-radius: 15px;
  border: 2px solid lightcoral;
}
</style>
