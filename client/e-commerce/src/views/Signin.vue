<template>
  <div id="container">
    <div id="box">
      <h1>Sign in</h1>
      <!-- <b-form @submit="onSubmit" @reset="onReset"> -->
      <b-form method="POST" @submit.prevent="signin">      
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            type="email"
            required
            placeholder="Enter email"
            v-model="email"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Password :" label-for="text-password">
          <b-form-input type="password" id="text-password" v-model="password"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4">
          <b-form-checkbox-group id="checkboxes-4">
            <b-form-checkbox value="me">Check me out</b-form-checkbox>
            <b-form-checkbox value="that">Check that out</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signin(){
      let data = {
        email: this.email,
        password: this.password
      }
      axios.post("http://localhost:3000/users/login", data)
      .then(data=>{
        console.log(data);
        console.log("LOGIN SUKSES");
        
      })
      .catch(err=>{
        console.log(err);
        
      })
    }
  }
};
</script>

<style scoped>
#box {
  width: 30%;
  border: 1px solid rgb(240, 240, 240);
  padding: 50px;
  margin-top: 50px;
}
#container {
  display: flex;
  justify-content: center;
}
</style>
