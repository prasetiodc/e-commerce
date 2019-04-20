<template>
  <div id="container">
    <h3>My Cart</h3>
    <b-row class="list" v-for="(a, index) in 3" :key="index">
      <b-col></b-col>
      <b-col cols="8">
        <b-row id="card">
          <b-col id="left">
            <b-img :src="require('../assets/logo.png')"
            style="width:100px; height:100px;">es</b-img>
          </b-col>
          <b-col cols="6" id="center">
            <h3>Laptop</h3>
            <h6>Rp. 7.000.000</h6>
          </b-col>
          <b-col id="right">
            <b-form-group id="input-group-1" label="Quantity :" label-for="quantity">
              <b-form-input id="quantity" required placeholder="Quantity"
              style="width: 100px;"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col id="right">
            <h3>Total</h3>
            <h6>Rp.14.000.000</h6>
          </b-col>
        </b-row>
      </b-col>
      <b-col></b-col>
    </b-row>
    <div id="resume">
      <!-- <div style="border: 1px solid black; width: 150px;"> -->
      <div id="boxResume">
        <h4>Total Harga</h4>
        <h5>Rp. 123123123</h5>
        <b-button size="sm" class="my-2 my-sm-0" variant="success">Checkout</b-button>
      </div>
    </div>
  </div>
</template>


<style scoped>
#resume{
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
#boxResume{
  padding: 20px;
  border: 1px solid black;
  width: 300px;
}
#container {
  padding: 20px;
}
#card {
  padding: 10px;
  display: flex;
  flex-direction: row;
  border-inline-end: 3px;
}
#center {
  text-align: left;
}
#row {
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  right: 0;
  padding: 10px;
  margin-left: 10px;
  justify-items: center;
}
#card:hover {
  box-shadow: 1px 1px 1px 1px;
}
</style>
