<template>
<div>
<div class="mainCard">
  <div class="bodyCard" v-for="mainCard in getMenu" :key="mainCard.id"
  @click="cardSelect(mainCard.id)">
    <div class="cardImage">
      <img :src="mainCard.image" alt="food-drink">
    </div>
    <div class="cardTitle">
      <h6> {{mainCard.name}} </h6>
    </div>
    <div class="cardText">
      <h6> {{mainCard.price}} </h6>
    </div>
  </div>
</div>

  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
        <a class="page-link" style="cursor:pointer" @click="prevPages">Previous</a>
        </li>
        <li class="page-item" v-for="pagination in totalPage" :key="pagination">
          <a class="page-link" style="cursor:pointer"
        @click="pages(pagination)"  >{{pagination}}</a></li>
        <li class="page-item next">
        <a class="page-link" style="cursor:pointer" @click="nextPages">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</div>

</template>

<script>
export default {
  name: 'Card',
  computed: {
    getMenu() {
      return this.$store.state.menu;
    },
  },
  mounted() {
    this.$store.dispatch('getApi', this.$store.state.currentPage);
  },
  methods: {
    cardSelect(id) {
      this.$store.commit('SELECT_MENU', id);
    },
  },
};
</script>

<style scoped>
@font-face {
    font-family: "airbnb";
    src: url('../../assets/font/AirbnbCerealBold.ttf');
}

.mainCard {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.bodyCard {
  width: 270px;
  height: 250px;
  margin-top: 15px;
  margin-left: 30px;
  border-radius: 10px;
  overflow: hidden;
  transition: linear 0.25s;
}

.bodyCard:hover {
  transform: scale(1.1);
  transition: linear 0.25s;
}

.cardImage img {
  width: 270px;
  height: 170px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
}

.cardTitle {
  background: lightgray;
  height: 35px;
}

.cardTitle h6 {
  font-size: 21px;
  padding-left: 10px;
  line-height: 30px;
  font-family: airbnb;
}

.cardText {
  background: lightgray;
  margin-top: 0px;
}

.cardText h6 {
  font-size: 21px;
  padding-left: 10px;
  line-height: 30px;
  font-weight: bold;
  font-family: airbnb;
}

.pagination {
  margin-top: 30px;
  margin-left: 350px;
  font-family: airbnb;
}

.pagination:hover {
  color: #57CAD5;
}

</style>
