<template lang="html">
  <div class="">
    <h2>Recent Post</h2>
    <div v-if="error != ''" class="alert alert-danger" role="alert">
      <strong>Oops!</strong> {{error}}
    </div>
    <ul v-for="post in recentPost" class="list-group">
      <li class="list-group-item"><h4>{{post.title}}</h4>
        <p>{{post.category}}</p>
        <small>{{post.createdAt}}</small>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recentPost: null,
      error: '',
    };
  },
  created() {
    this.$axios.get('/article/all')
      .then((response) => {
        const message = response.data.message;
        if (message === 'berhasil') {
          console.log(response.data);
          this.recentPost = response.data.articles;
        } else {
          // eslint-disable-next-line
          throw 'Internal server err'
        }
      })
      .catch((err) => {
        this.error = err;
      });
  },
};
</script>

<style lang="css">
</style>
