<template>
  <div>
    <h2>Detail Product</h2>
    <div>
      <img :src="this.product.image" :alt="this.product.name" style="height: 200px;">
      <div v-if="show">
        <h3>{{ this.product.name }}</h3>
        <h4>Rp. {{ this.product.price }}</h4>
        <h6>Stock : {{ this.product.stock }}</h6>
      </div>
      <div v-if="!show">
        <b-form method="POST" @submit.prevent="add">
        <h1>Update Product</h1>

        <b-form-group label="Name :" label-for="name">
          <b-form-input id="name" required placeholder="Name item" v-model="name" :value="this.product.name"></b-form-input>
        </b-form-group>

        <b-form-group label="Image :" label-for="image">
          <b-form-file
            type="file"
            ref="file"
            v-model="image"
            placeholder="Choose a file..."
            drop-placeholder="Drop file here..."
            @click="uploadImage"
          ></b-form-file>
        </b-form-group>

        <b-form-group label="Price :" label-for="price">
          <b-form-input id="price" required placeholder="Price item" v-model="price" :value="this.product.price"></b-form-input>
        </b-form-group>

        <b-form-group label="Stock :" label-for="stock">
          <b-form-input id="stock" required placeholder="Stock" v-model="stock" :value="this.product.stock"></b-form-input>
        </b-form-group>

        <div id="buttonSignup">
          <b-button type="submit" variant="primary">Save</b-button>
          <b-button type="submit" variant="danger">Cancel</b-button>
        </div>
      </b-form>
      </div>
      <b-button variant="primary" @click="addCart" v-if="!this.$store.state.isAdmin">Add to Product</b-button>
      <b-button variant="primary" @click="updateCart" v-if="this.$store.state.isAdmin && show">Update Product</b-button>
      
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'detail',
  data(){
    return{
      id: this.$route.params,
      product: {},
      show: true
    }
  },
  created(){
    axios
      .get('http://localhost:3000/products/'+this.$route.params.id)
      .then(({data}) => {
        this.product = data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  beforeRouteUpdate (to, from, next) {
    axios
      .get('http://localhost:3000/products/'+to.params.id)
      .then(({data}) => {
        this.product = data;
      })
      .catch(err => {
        console.log(err);
      });
        next()
  },
  watch: {
    id(val){
      this.tes = val;
    }
  },
  methods: {
    addCart(){
      axios
        .post('http://localhost:3000/cart', { productId: this.product._id },
          {
            headers: {
              auth : localStorage.token,
            }
          })
        .then(({ data }) => {
          // this.product = data
          swal("Add Cart Success!", "", "success");
        })
        .catch(({ err }) => {
          swal("You Must Signin!", "", "error");
        });
    },
    updateCart(){
      this.show = !this.show
    }
  },
};


</script>

<style lang="scss" scoped>
</style>
