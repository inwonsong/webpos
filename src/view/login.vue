<template>
    <div class="signin">
      <form>
        <h2 style="color:#fff; font-family: airbnb;">LogIn</h2>
        <input type="text" name="email" placeholder="이메일 주소 입력"/><br /><br />
        <input type="password" name="password" placeholder="패스워드 입력" /><br /><br />
        <input type="button" value="Log In" /><br /><br />
        <div id="container">
        <a href="re.html" style=" margin-right:0px; font-size:13px; font-family: airbnb;
        color: white;">패스워드 초기화</a>
        <a href="for.html" style=" margin-left:30px; font-size:13px; font-family: airbnb;
        color: white;">패스워드 찾기</a>
        </div><br /><br /><br /><br />
        <router-link to="/register"><div class="account">계정이 없으신가요?
        <a>&nbsp;회원가입</a></div></router-link>
      </form>
    </div>
</template>

<script>
export default {
  name: 'Login',
};
</script>

<style scoped>
@font-face {
    font-family: airbnb;
    src: url('../assets/font/AirbnbCerealBold.ttf');
}

body {
    font-family: airbnb;
    position: absolute;
    color: #fff;
    background-size: cover;
    background-position: center center;
    background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
    url(../assets/img/Latte.jpg);
}

.signin {
    background: #57CAD5;
    border-radius: 10px;
    padding: 40px;
    width: 320px;
    margin: auto;
    margin-top: 90px;
    height: 370px;
    margin-left: 180x;
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

input[type=button] {
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
input[type=button]:hover {
    color: #57CAD5;
    background-color: white;
}

h2 {
    color: white;
}

a {
    color: #F24F8A;
    text-decoration: blink;
}

a:hover {
    color: skyblue;
}

.container {
    display: flex;
    flex-direction: row;
    width: 100%;
}

::placeholder {
    color: aliceblue;
    opacity: 0.8; /* Firefox */
}

.account {
    font-family: airbnb;
    color: black;
}
</style>
