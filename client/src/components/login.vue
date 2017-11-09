<template lang="html">
  <div class="">
    <div v-if="error != ''" class="alert alert-danger" role="alert">
      <strong>Oops!</strong> {{error}}
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <button @click="login" type="button" name="button">Login</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    login() {
      this.$auth.signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$axios.get(`/user/${this.email}`)
            .then((response) => {
              const data = response.data;
              this.$store.commit('changeUser', data.data.name);
              this.$router.push({ name: '' });
            })
            .catch((err) => {
              this.error = err;
            });
        })
        .catch((error) => {
          this.error = error.message;
        });
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (vm.$auth.currentUser) {
        vm.$router.push({ name: 'recent-post' });
      }
    });
  },
};
</script>

<style lang="css">
</style>
