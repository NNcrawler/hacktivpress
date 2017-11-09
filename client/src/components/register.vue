<template lang="html">
  <div class="">
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" placeholder="Name">
      <small id="emailHelp" class="form-text text-muted">Your tagline will be shown in your articles.</small>
    </div>
    <div class="form-group">
      <label for="tagline">Tagline</label>
      <input type="text" class="form-control" id="tagline" placeholder="Your moto here">
    </div>
    <button @click="register" type="button" name="button">Register</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      name: '',
      tagline: '',
      error: '',
      success: '',
    };
  },
  methods: {
    register() {
      this.$auth.createUserWithEmailAndPassword(this.email, this.password)
        .then((value) => {

        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
        });
    },
  },
};
</script>

<style lang="css">
</style>
