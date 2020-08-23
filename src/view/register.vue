<template>
<div class="signup">
    <form>
    <h2 style="color: #fff;">회원가입</h2>
    <div class="a">
        <div class="t"> <!-- This is the wrapper div around the text input -->
            <input type="text" name="userid" placeholder="아이디 입력">
        </div>
        <input type="button" class="idbtn" value="중복 확인" title="중복 확인"><br><br>
    </div>
    <input type="password" name="pass" placeholder="패스워드 입력"><br><br>
    <input type="password" name="pass2" placeholder="패스워드 재입력"><br><br>
    <input type="text" name="username" placeholder="성명"><br><br>
    <!-- <input type="text" name="userbrth" placeholder="생년월일"><br><br> -->
    <div class="a">
        <div class="t">
        <input type="text" name="생년월일" disabled value="생일">
        </div>
        <datetime type="date" class="seldate" v-model="datetime12"></datetime><br><br>
    </div>
    <select type="text" value="" name="usersx" placeholder="성별">
        <option value="1">남자</option>
        <option value="2">여자</option>
        <option value="3">선택안함</option>
    </select><br><br>
    <input type="text" name="useremail" placeholder="본인 이메일"><br><br>
    <input type="button" class="signbtn" value="Sign Up" title="회원가입"><br><br><br><br>
    <div class="account"> 계정이 있으신가요?<router-link to="/"><a
    style="text-decoration: none; font-family: airbnb; color: #F24F8A;">&nbsp;&nbsp;&nbsp;
    로그인</a></router-link></div>
    </form>
</div>
</template>


<script>
import Vue from 'vue';
import Datetime from 'vue-datetime';
import 'vue-datetime/dist/vue-datetime.css';

Vue.use(Datetime);

export default {
  name: 'Register',
};
</script>

<style scoped>
@font-face {
  font-family: airbnb;
  src: url('../assets/font/AirbnbCerealBold.ttf')
}

body {
    font-family: airbnb;
    color: #fff;
    background-size: cover;
}

.signup {
    background: #57CAD5;
    border-radius: 10px;
    padding:40px;
    width:320px;
    margin:auto;
    height:650px;
    margin-left:180px;
    margin:0 auto;
    margin-top:40px;
}

form {
    width: 240px;
    text-align: center;
}

input {
    width: 240px;
    text-align: center;
    background: transparent;
    border: none;
    border-bottom: 1px solid #fff;
    font-family: 'Play', sans-serif;
    font-size: 16px;
    font-weight: 200px;
    padding: 10px 0;
    transition: border 0.5s;
    outline: none;
    color: #fff;
}

input.signbtn[type=button] {
    border: none;
    width: 190px;
    background: #F24F8A;
    color: white;
    font-size: 16px;
    line-height: 25px;
    padding: 10px 0;
    border-radius: 15px;
    cursor: pointer;
    font-family: airbnb;
}

input.idbtn[type=button]:hover {
    color: #57CAD5;
    background-color: white;
}

input.idbtn[type=button] {
    border: none;
    width: 50px;
    background: #E6E6E6;
    color: black;
    font-size: 10px;
    line-height: 25px;
    padding: 10px 0;
    border-radius: 15px;
    cursor: pointer;
    font-family: airbnb;
}

input.signbtn[type=button]:hover {
    color: #57CAD5;
    background-color: white;
}

h2 {
    color: #000;
}

::placeholder {
    color:aliceblue;
    opacity: 0.8; /* Firefox */
}

.account {
  font-family: airbnb;
  margin-bottom:40px;
}

div.a { display: table; }
div.t {
    display: table-cell;
    width: 100%;
}
div.t > input {
    width: 100%;
}
div.t > datetime {
    width: 100%;
}

</style>
