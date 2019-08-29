<template>
  <div id="add-body">
    <app-header :showSearch="true"></app-header>
    <div class="wrapper">
      <div class="form-wrap">
        <form-helper>
        <H1 slot='form-header'>Add a Blog Post</H1>
        <div slot='form-fields'>
          <label for="title">Title</label>
          <input type="text" name="title" v-model="blog.title">
          <label for="Body">Body</label>
          <textarea type="text" name="Body" v-model="blog.body"></textarea>
        </div>
        <div slot='form-controls'>
          <button type="submit" @click.prevent="addForm">Add Post</button>
        </div>
      </form-helper>
      </div>
      <hr>
      <div class="jumbotron">
        <h1>Preview</h1>
        <h2 class="text-muted">{{ blog.title }}</h2>
        <p class="text-lead">{{ blog.body }}</p>
      </div>
    </div>    
    <!-- <app-footer :title='title'></app-footer> -->
      
  </div>
</template>

<script>
// import Fs from 'fs'
import FormHelper from '../helpers/formHelpers.vue'
import Header from './Header.vue'
// import Footer from './footer.vue'

export default {

  name: 'addBlogs',
  data() {
    return {
        title: 'Blogger',
        showSearch: true,
        blog:{
            title: '',
            body: '',
            author: '',
            categories: [],
            id: '',
        },
        blogs: []
    }
  },
  components: {
        'form-helper': FormHelper,
        'app-header':Header,
        // 'app-footer':Footer,
  },
  methods: {
    addForm(){
      this.blogs.append(this.blogs)
    }
  }
}
</script>

<style scoped>
#add-body {
  background-color: rgb(1, 75, 62)
}
.wrapper hr {
  width: 3px;
  margin-right: 3px;
  margin-left:3px;
  color: black;
  fill: black;
}
.wrapper {
  display: flex;
  width: 100%;
  margin: 0 auto;
  height: 90vh;
}
.form-wrap {
  flex: 2;
  margin-right: 10px;
}
.jumbotron {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
