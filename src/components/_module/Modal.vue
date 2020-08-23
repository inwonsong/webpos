<template>
<div class="addItem">
  <div class="addModal">
    <div class="item">
      <h1>주문 항목 추가</h1>
    </div>
    <div class="form">
    <div class="name" >
      <label for="name" class="label-name">주문 이름</label>
      <input type="text" class="name" id="name" placeholder="아이스아메리카노 한잔이요.">
    </div>
    <div class="image">
      <label for="image" class="label-image">주문 이미지</label>
      <input type="file" class="image" id="image">
    </div>
    <div class="price" >
      <label for="price" class="label-price">가격</label>
      <input type="text" class="price" id="price" placeholder="20,000">
    </div>
    <div class="category" >
      <label for="category" class="label-category">Category</label>
      <select type="text" class="category" id="category">
        <option value="1">Category</option>
        <option value="2">Single Origin</option>
        <option value="3">Milk Base</option>
        <option value="4">Cold Brew</option>
        <option value="5">Espresso Base</option>
        <option value="6">Bread & Pastry</option>
      </select>
    </div>
    <div class="button">
      <div class="cancel">
        <button @click="$emit('closeModal')">Cancel</button>
      </div>
      <div class="add">
        <button>Add</button>
      </div>
    </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Modal',
};
</script>

<style scoped>
@font-face {
  font-family: airbnb;
  src: url('../../assets/font/AirbnbCerealBold.ttf');
}

.addItem {
  background: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  z-index: 999;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  opacity: 0;
  transition: linear 0.3s;
}

.addItem-active {
  visibility: visible;
  opacity: 1;
  top: 0;
  left: 0;
}

.addModal {
  width: 800px;
  height: 450px;
  position: relative;
  background: white;
  display: flex;
  align-items: left;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
}

.button {
  display: flex;
  flex-direction: row;
}

.form {
  background: white;
  padding-top: 25px;
}

.name label {
  font-family: airbnb;
  font-size: 20px;
  line-height: 29px;
}

.name input {
  width: 555px;
  height: 45px;
  margin-left: 45px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #CECECE;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

.image {
  margin-top: 10px;
}

.image label {
  font-family: airbnb;
  font-size: 20px;
  line-height: 29px;
}

.image input {
  width: 555px;
  height: 45px;
  background: white;
  margin-left: 41px;
  padding-left: 10px;
  padding-top: 7px;
  border-radius: 10px;
  border: 1px solid #CECECE;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

.price {
  margin-top: 10px;
}

.price label {
  font-family: airbnb;
  font-size: 20px;
  line-height: 29px;
}

.price input {
  width: 555px;
  height: 45px;
  margin-left: 53px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #CECECE;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

.category {
  margin-top: 10px;
}

.category label {
  font-family: airbnb;
  font-size: 20px;
  line-height: 29px;
}

.category select {
  width: 300px;
  height: 45px;
  margin-left: 10px;
  padding-left: 10px;
  border-radius: 10px;
  border: 1px solid #CECECE;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

.button {
  margin-left: 467px;
  margin-top: 40px;
}

.cancel button {
  background: #F24F8A;
  border-radius: 10px;
  height: 50px;
  width: 90px;
  font-family: airbnb;
  color: white;
  margin-right: 10px;
}

.add button {
  background: #57CAD5;
  border-radius: 10px;
  height: 50px;
  width: 90px;
  font-family: airbnb;
  color: white;
}
</style>
