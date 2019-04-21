<template>
  <div id="container" v-if="!this.$store.state.islogin">
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
            <router-link to="/signup">Not registered?</router-link>
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
      password: '',
    };
  },
  methods: {
    signin() {
      const user = {
        email: this.email,
        password: this.password,
      };
      axios.post('http://localhost:3000/users/login', user)
        .then(({data}) => {          
          this.email = '',
          this.password = '',
          
          localStorage.setItem('token', data.token);
          this.$store.commit('setLogin', true);
          if(data.role){
            this.$store.commit('setAdmin', true);
          }
          swal("Welcome back!", "Login Success", "success");
          this.$router.push('/');
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
