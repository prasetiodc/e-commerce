<template>
  <div id="container">
    <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000; height: 400px; overflow: hidden;"
        fade
        controls
        indicators
        img-width="1024"
        img-height="400"
      >
        <b-carousel-slide caption="" img-src="https://picsum.photos/1024/480/?image=10"></b-carousel-slide>
        <b-carousel-slide caption="" img-src="https://picsum.photos/1024/480/?image=12"></b-carousel-slide>
        <b-carousel-slide caption="" img-src="https://picsum.photos/1024/480/?image=22"></b-carousel-slide>
      </b-carousel>
    <b-row class="text-center">
      <b-col cols="8" id="left">
        <div id="row">
          <b-card-group class v-for="(product, index) in listProduct" :key="index" >
            <router-link :to="{ name: 'detail', params: {id: product._id}}">
              <b-card :img-src="product.image" img-alt="Card image" img-top>
                <b-card-text>
                  {{ product.name }}
                </b-card-text>
              </b-card>
            </router-link>
          </b-card-group>
        </div>
      </b-col>
      <b-col style="border: 3px solid black; padding: 20px;">
        <router-view></router-view>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      listProduct: [],
    };
  },
  created() {
    axios.get('http://localhost:3000/products')
      .then(({ data }) => {
        this.listProduct = data;
      })
      .catch(({ err }) => {
        console.log(err);
      });
  },
};
</script>


<style scoped>
#left {
  
}
.card-img-top {
  height: 150px;
  width: auto;
}
.card {
  width: 200px;
}
.card-group {
  width: 200px;
  margin: 5px;
}
#row {
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  right: 0;
  padding: 10px;
  margin-left: 10px;
  justify-items: center;
}
.card:hover {
  box-shadow: 1px 1px 1px 1px;
}
</style>
