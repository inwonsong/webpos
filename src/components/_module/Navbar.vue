<template>
<div class="mainNavbar">
  <div class="leftNavbar">
    <h1>라면 목록</h1>
  </div>
  <div class="search">
    <i class="fas fa-search"></i>
  </div>
  <div class="rightNavbar">
    <h1>카트</h1>
  </div>
</div>
</template>

<script>
export default {
  name: 'Navbar',
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
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
}

.leftNavbar {
  background: white;
  width: 949px;
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

.search {
  background: white;
  height: 100px;
  width: 53px;
}

.fa-search {
  background: white;
  justify-items: center;
  padding: 10px;
  margin-top: 25px;
  margin-left: 8px;
}

.rightNavbar {
  background: white;
  border-left: 2px solid gainsboro;
  width: 363px;
  height: 100px;
}

.rightNavbar h1 {
  background: white;
  margin: 20px 0px;
  padding: 5px;
  text-align: center;
  font-size: 30px;
  line-height: 39px;
  font-family: airbnb;
}
</style>
