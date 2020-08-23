<template>
<div class="allRectangle">
  <div class="rectangle1">
    <div class="notes">
      <h6>오늘의 수입 내역</h6>
    </div>
    <div class="value">
      <h6>123,456 원</h6>
    </div>
    <div class="bonus">
      <h6>+2% 어제 대비</h6>
    </div>
  </div>
  <div class="rectangle2">
    <div class="notes">
      <h6>주문내역</h6>
    </div>
    <div class="value">
      <h6>327</h6>
    </div>
    <div class="bonus">
      <h6>+5% 지난주 대비</h6>
    </div>
  </div>
  <div class="rectangle3">
    <div class="notes">
      <h6>금년도 수입 현황</h6>
    </div>
    <div class="value">
      <h6>123,456,789 원</h6>
    </div>
    <div class="bonus">
      <h6>+10% 작년 대비</h6>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Rectangle',
};
</script>

<style scoped>
.allRectangle {
  display: flex;
  flex-direction: row;
  margin-left: 90px;
  margin-top: 125px;
}

.rectangle1 {
  background: linear-gradient(285.38deg, #FBB2B4 30.05%, rgba(255, 143, 178, 0) 133.19%);
  box-shadow: 10px 15px 10px rgba(255, 143, 178, 0.25);
  border-radius: 10px;
  height: 213px;
  width: 402px;
  padding-top: 60px;
  padding-left: 40px;
}

.rectangle2 {
  background: linear-gradient(285.38deg, #29DFFF 30.05%, rgba(41, 223, 255, 0) 133.19%);
  box-shadow: 10px 15px 10px rgba(41, 223, 255, 0.25);
  border-radius: 10px;
  height: 213px;
  width: 402px;
  padding-top: 60px;
  padding-left: 40px;
  margin-left: 20px;
}

.rectangle3 {
  background: linear-gradient(285.38deg, #AB84C8 30.05%, rgba(241, 201, 236, 0) 133.19%);
  box-shadow: 10px 15px 10px rgba(241, 201, 236, 0.25);
  border-radius: 10px;
  height: 213px;
  width: 402px;
  padding-top: 60px;
  padding-left: 40px;
  margin-left: 20px;
}

.notes h6 {
  font-size: 15px;
}

.value h6 {
  font-size: 30px;
}

.bonus h6 {
  font-size: 15px;
}
</style>
