<template>
<div class="mainNavbar">
  <div class="leftNavbar">
    <h1>주문현황</h1>
  </div>
</div>
</template>

<script>
export default {
  name: 'Navbar2',
};
</script>

<style scoped>
@font-face {
    font-family: "airbnb";
    src: url('../../assets/font/AirbnbCerealBold.ttf');
}

.mainNavbar {
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2);
}

.leftNavbar {
  background: white;
  width: 1366px;
  height: 100px;
}

.leftNavbar h1 {
  background: white;
  margin: 20px 0px;
  padding: 5px;
  text-align: center;
  font-size: 30px;
  line-height: 39px;
  font-family: airbnb;
}
</style>
