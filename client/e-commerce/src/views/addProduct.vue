<template>
  <div id="container" v-if="this.$store.state.islogin">
    <div id="box">
      <b-form method="POST" @submit.prevent="add">
        <h1>Add Product</h1>

        <b-form-group label="Name :" label-for="name">
          <b-form-input id="name" required placeholder="Name item" v-model="name"></b-form-input>
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
          <b-form-input id="price" required placeholder="Price item" v-model="price"></b-form-input>
        </b-form-group>

        <b-form-group label="Stock :" label-for="stock">
          <b-form-input id="stock" required placeholder="Stock" v-model="stock"></b-form-input>
        </b-form-group>

        <div id="buttonSignup">
          <b-button type="submit" variant="primary">Save</b-button>
          <b-button type="submit" variant="danger">Cancel</b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: '',
      image: '',
      price: '',
      stock: '',
    };
  },
  methods: {
    uploadImage(event) {
      this.image = event.target.files[0]
    },
    add(){
      const fd = new FormData()
      fd.append('name', this.name)
      fd.append('image', this.image, this.image.name)
      fd.append('price', this.price)
      fd.append('stock', this.stock)

      axios.post('http://localhost:3000/products/', fd,
      {
        headers: {
          auth : localStorage.token
        }
      })
      .then(data => {
          swal("Add Product Success", "", "success");

      })
      .catch(err =>{
        console.log(err);
        
      })
    }
  }
};
</script>


<style scoped>
#box {
  width: 40%;
  border: 1px solid rgb(240, 240, 240);
  padding: 30px;
  margin-top: 50px;
}
#container {
  display: flex;
  justify-content: center;
}
</style>
