<template>
<div class="checkoutHeader">
    <div class="checkoutFirst">
      <div class="bodyCheck">
      <div class="firstLine">
        <div class="checkOut">
          <h5>Checkout</h5>
        </div>
        <div class="receiptNumber">
          <h5>Receipt no: #010410919</h5>
        </div>
      </div>
      <div class="secondLine">
        <h5>Cashier: Anya Geraldine</h5>
      </div>
      <div class="thirdLine">
        <div class="firstItem">
          <div class="item">
            <h5>Coffee Latte 1x</h5>
          </div>
          <div class="price">
            <h5>Rp. 15.000</h5>
          </div>
        </div>
        <div class="firstItem">
          <div class="item">
            <h5>Coffee Latte 1x</h5>
          </div>
          <div class="price">
            <h5>Rp. 15.000</h5>
          </div>
        </div>
        <div class="firstItem">
          <div class="item">
            <h5>Coffee Latte 1x</h5>
          </div>
          <div class="price">
            <h5>Rp. 15.000</h5>
          </div>
        </div>
      </div>
      <div class="fourthLine">
        <div class="discount">
          <h5>Pph 10%</h5>
        </div>
        <div class="totalDiscount">
          <h5>Rp. 10.500</h5>
        </div>
      </div>
      <div class="fifthLine">
        <h5>Total: Rp. 115.000</h5>
      </div>
      <div class="sixthLine">
        <h5>Payment: Cash</h5>
      </div>
      <div class="seventhLine">
        <div class="print">
          <button><h5>Print</h5></button>
        </div>
        <div class="or">
          <h5>Or</h5>
        </div>
        <div class="sendEmail">
          <button><h5>Send Email</h5></button>
        </div>
      </div>
      <div class="eightLine">
        <button @click="$emit('closeCheckout')"><h5>Cancel</h5></button>
      </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Checkout',
};
</script>

<style scoped>
@font-face {
  font-family: airbnb;
  src: url('../../assets/font/AirbnbCerealBold.ttf');
}

.checkoutHeader {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  visibility: hidden;
  opacity: 0;
  transition: linear 0.3s;
  font-family: airbnb;
}

.checkoutHeader-active {
  visibility: visible;
  opacity: 1;
  top: 0;
  left: 0;
}

.checkoutFirst {
  width: 546px;
  height: 581px;
  background-color: white;
  border-radius: 10px;
}

.bodyCheck {
  margin-top: 15px;
}

.firstLine {
  display: flex;
  flex-direction: row;
  background: white;
}

.checkOut {
 background: white;
 margin-left: 25px;
}

.receiptNumber {
  background: white;
  margin-left: 173px;
}

.secondLine {
  margin-left: 25px;
}

.thirdLine {
  display: flex;
  flex-direction: column;
  background: white;
  margin-top: 30px;
  height: 250px;
  width: 100%;
}

.firstItem {
  display: flex;
  flex-direction: row;
  padding: 10px 0 10px 0;
}

.item {
 background: white;
 margin-left: 25px;
}

.price {
  background: white;
  margin-left: 210px;
}

.fourthLine {
  display: flex;
  flex-direction: row;
  background: white;
}

.discount {
 background: white;
 margin-left: 25px;
}

.totalDiscount {
  background: white;
  margin-left: 265px;
}

.fifthLine {
  background: white;
  margin-top: 7px;
}

.fifthLine h5 {
  margin-left: 25px;
}

.sixthLine {
  background: white;
  margin-top: 7px;
}

.sixthLine h5 {
  margin-left: 25px;
}

.seventhLine {
  display: flex;
  flex-direction: row;
  background: white;
  justify-content: center;
  align-items: center;
}

.print {
  background: white;
  border-radius: 10px;
  margin-right: 30px;
}

.print button {
  width: 200px;
  height: 50px;
  border-radius: 10px;
  background: #57CAD5;
  color: white;
  border: 1px solid lightblue;
}

.or {
  background: white;
}

.sendEmail {
  background: white;
  margin-left: 30px;
}

.sendEmail button {
  width: 200px;
  height: 50px;
  border-radius: 10px;
  background: #57CAD5;
  color: white;
  border: 1px solid lightblue;
}

.eightLine {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
}

.eightLine button {
  width: 485px;
  height: 50px;
  border-radius: 10px;
  background: #F24F8A;
  color: white;
  border: 1px solid lightpink;
}
</style>
