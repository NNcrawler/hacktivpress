<template lang="html">
  <div class="">
    <!-- {{isLogin}} -->
    <router-link :to="{ name: 'recent-post', params: {} }">Home</router-link>
    <router-link v-if="!isLogin" :to="{ name: 'register', params: {} }">register</router-link>
    <router-link v-if="!isLogin" :to="{ name: 'login', params: {} }">login</router-link>
    <router-link :to="{ name: 'post', params: {} }">post</router-link>
    <button v-if="isLogin" @click="logout" class="btn btn-link" type="button" name="button">logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      alert('masu');
      this.$auth.signOut()
       .then(() => {
         alert('masu');
         this.$store.commit('changeUser');
       });
    },
  },
  computed: {
    isLogin() {
      if (this.$auth.currentUser) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="css">
</style>
