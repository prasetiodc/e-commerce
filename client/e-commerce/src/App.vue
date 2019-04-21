<template>
  <div id='app'>
    <div id='nav'>
      <b-navbar toggleable='lg' type='dark' variant='info'>
        <b-navbar-brand to='/'>e-Commerce</b-navbar-brand>

        <b-navbar-toggle target='nav-collapse'></b-navbar-toggle>

        <b-collapse id='nav-collapse' is-nav>
          <b-navbar-nav>
            <router-link to='/addProduct' v-if='this.$store.state.isAdmin'>Add Products</router-link>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class='ml-auto'>
            <b-navbar-nav right v-if='!this.$store.state.islogin'>
              <router-link to='/signin'>Signin</router-link>
            </b-navbar-nav>
            <b-navbar-nav right v-if='this.$store.state.islogin && !this.$store.state.isAdmin'>
              <router-link to='/carts'>
                <!-- <b-badge variant='light' 
                style='max-height: 20px; width: auto;'>4</b-badge>        Notif Cart -->
                <i class='fas fa-shopping-cart'></i>
              </router-link>
            </b-navbar-nav>
            <b-navbar-nav right v-if='this.$store.state.islogin'>
              <a href='' @click.prevent='signout'>Sign Out</a>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    signout() {
      this.$store.commit('setLogin', false);
      this.$store.commit('setAdmin', false);
      localStorage.removeItem('token');
      swal('Logout Success!', '', 'success');
      this.$router.push('/');
    },
  },
};
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}

.fas{
  margin-right: 10px;
  display: flex;
  align-items: center;
}
</style>
