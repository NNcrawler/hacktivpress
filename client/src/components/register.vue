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
    <div class="form-group">
      <label for="name">Name</label>
      <input v-model="name" type="text" class="form-control" id="name" placeholder="Name">
      <small id="emailHelp" class="form-text text-muted">Your tagline will be shown in your articles.</small>
    </div>
    <div class="form-group">
      <label for="tagline">Tagline</label>
      <input v-model="tagline" type="text" class="form-control" id="tagline" placeholder="Your moto here">
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
    };
  },
  methods: {
    register() {
      this.error = '';
      this.$auth.createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          const passedData = {
            email: this.email,
            name: this.name,
            tagline: this.tagline,
          };
          this.$store.commit('changeUser', this.name);
          this.$axios.post('/user', passedData)
            .then((response) => {
              if (response.data.message === 'berhasil') {
                this.$router.push({ name: 'home' });
              }
            })
            .catch((err) => {
              // eslint-disable-next-line
              console.log(err);
              this.error = err;
            });
        })
        .catch((error) => {
          this.error = error.message;
        });
    },
  },
};
</script>

<style lang="css">
</style>
