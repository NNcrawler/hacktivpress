<template lang="html">
  <div class="">
    <div v-if="error != ''" class="alert alert-danger" role="alert">
      <strong>Oops!</strong> {{error}}
    </div>
    <div v-if="success != ''" class="alert alert-success" role="alert">
       {{success}}
    </div>
    <div class="form-group">
      <label for="title">Title</label>
      <input v-model="title" type="text" class="form-control" id="title" >
    </div>
    <div class="form-group">
      <label for="content">Content</label>
      <textarea v-model="content" class="form-control" id="content" rows="9"></textarea>
    </div>
    <div class="form-group">
      <label for="title">category</label>
      <input v-model="category" type="text" class="form-control" id="title" >
    </div>
    <button @click="post" type="button" name="button">Post</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: '',
      error: '',
      success: '',
      category: '',
    };
  },
  methods: {
    post() {
      const data = {
        title: this.title,
        content: this.content,
        author: '5a03f9b7b6202270e8694dc3',
        category: this.category,
      };
      this.$axios.post('/article', data)
        .then((response) => {
          if (response.data.message === 'berhasil') {
            this.success = 'Post created';
            this.content = '';
            this.title = '';
            this.category = '';
          }
        })
        .catch((err) => {
          this.error = err;
        });
    },
  },
};
</script>

<style lang="css">
</style>
