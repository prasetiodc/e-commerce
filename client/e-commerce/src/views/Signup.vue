<template>
  <div id="container" v-if="!this.$store.state.islogin">
    <div id="box">
      <b-form method="POST" @submit.prevent="signup">
        <h1>Signup</h1>

        <b-form-group id="input-group-1" label="Fullname :" label-for="fullname">
          <b-form-input id="fullname" required placeholder="Fullname"
          v-model="name"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-1" label="Email :" label-for="email">
          <b-form-input id="email" type="email" placeholder="Enter email"
          required v-model="email" ></b-form-input>
        </b-form-group>

        <b-form-group label="Password :" label-for="text-password">
          <b-form-input type="password" id="text-password" v-model="password"></b-form-input>
        </b-form-group>

        <div id="buttonSignup">
          <b-button type="submit" variant="primary">Signup</b-button>
          <b-button type="submit" variant="danger">Cancel</b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    signup() {
      const user = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      axios.post('http://localhost:3000/user', user)
        .then(({ data }) => {
          swal("Thanks to join Us!", "Register Success", "success");

        })
        .catch(({ err }) => {
          console.log(err);
        });
    },
  },
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
