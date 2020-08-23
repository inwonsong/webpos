<template>
<div class="container-chart">
  <div class="rectangle">
    <div class="notes">
      <h3>최근 결제내역</h3>
    </div>
    <div class="body-chart">
      <div class="value">
        <h6>주문번호</h6>
        <p>#1101154288</p>
        <p>#1101154288</p>
        <p>#1101154288</p>
      </div>
      <div class="value">
        <h6>결제자</h6>
        <p>송인원</p>
        <p>전태준</p>
        <p>김정필</p>
      </div>
      <div class="value">
        <h6>날짜</h6>
        <p>2020-08-15</p>
        <p>2020-08-10</p>
        <p>2020-08-05</p>
      </div>
      <div class="value">
        <h6>주문내역</h6>
        <p>틈새라면</p>
        <p>진라면(매운맛)</p>
        <p>신라면</p>
      </div>
      <div class="value">
        <h6>가격</h6>
        <p>5800 원</p>
        <p>4300 원</p>
        <p>6500 원</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Chart',
};
</script>

<style lang="scss" scoped>
.container-chart{
  overflow: auto;
  margin: 50px 50px 50px 90px;
  .rectangle {
    background: linear-gradient(285.38deg, lightgray 30.05%, rgba(255, 143, 178, 0) 133.19%);
    border-radius: 10px;
    height: 243px;
    width: 1245px;
    padding-top: 30px;
    padding-bottom: 30px;
    .notes{
      h3{
        font-size: 20px;
        text-align: center;
      }
    }
    .body-chart{
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }
  }
}
</style>
