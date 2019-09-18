<template>
  <div id="add-body">
    <app-header :showSearch="showSearch" :showBlogtoggle="showBlogtoggle" :addBlogtoggle="addBlogtoggle" @showBlog="updateComponent($event)"></app-header>
    <span v-if="success" class="success">Blog Post Added Successfully</span>
    <span v-if="error" class="error">Unable to add Post. Error({{errorMessage}}) </span>
    <div class="wrapper">
      <div class="form-wrap">
        <form-helper>
        <H1 slot='form-header'>Add a Blog Post</H1>
        <div slot='form-fields'>
          <label for="title">Title</label>
          <input type="text" name="title" v-model="blog.title">
          <label for="Body">Body</label>
          <!-- <ckeditor :editor="editor" v-model="editorData" :config="editorConfig " tag-name='textarea'></ckeditor> -->
          <textarea type="text" name="Body" v-model="blog.body"></textarea>
          <Label for="categories">Select Author</Label>
          <select name="categories" v-model="blog.author" >
              <option v-for="author in users" :key="author.id" :value="author.name">{{author.name}}</option>
          </select>
        </div>
        <div slot='form-controls'>
          <button type="submit" @click.prevent="addBlog">Add Post</button>
        </div>
      </form-helper>

      </div>
      <hr>
      <div class="preview">
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
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Header from './Header.vue'
// import {bus} from '../main'
// import Footer from './footer.vue'

export default {

  name: 'addBlogs',
  data() {
    return {
        editorConfig: {},
        success: false,
        error: false,
        title: 'Blogger',
        errorMessage: '',
        showSearch: true,
        showBlogtoggle: true,
        addBlogtoggle: false,
        users : [
          {
            name: 'Uche Ogbu',
            id: 1,
          },
          {
            name: 'NetNinja',
            id: 2,
          },
          {
            name: 'Alternate Ego',
            id: 3,
          },
        ],
        blog:{
            title: '',
            body: '',
            author: '',
            categories: [],
            id: '',
        },
        // editor: ClassicEditor,
        // editorData: '',
        blogs: []
    }
  },
  components: {
        'form-helper': FormHelper,
        'app-header':Header,
        
        // 'app-footer':Footer,
  },
  methods: {
    addBlog(){
      let senddata = JSON.stringify(this.blog)
      this.success = false
      this.error = false
      fetch('http://127.0.0.1:4000/blogs', {
        'method': 'POST',
        'credentials': 'include',
        'headers': new Headers({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'X-Requested-With': 'XMLHttpRequest'
          }),
        body: `blog=${senddata}`,
      }).then((response)=>{
        if (response.statusText === 'Created'){
          this.success = true
        }else {
          this.error = true
          this.errorMessage = `Could not communicate with server Response:${response} ResponseText:${response.statusText}`
        }
      }).catch((err)=>{
        this.error = true
        this.errorMessage = err
      })
      this.blogs.unshift({
        title: this.blog.title,
        body: this.blog.body,
        createdAt: Date.now(),
        author: this.blog.author,
        categories: this.blog.categories,
      })
      this.blog.title = ''
      this.blog.body = ''
      this.blog.author = ''
      this.blog.category = []
      
    },
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>

<style scoped>
#add-body {
  background-color: rgb(255, 255, 255);
  color: #424040;
  max-width: 100vw;
}
.wrapper hr {
  width: 3px;
  margin-right: 3px;
  margin-left:3px;
  color: rgb(48, 47, 47);
  fill: rgb(88, 86, 92);
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
.preview {
  flex: 1;
  color: #353434;
  overflow-y: scroll;
  display: flex;
  flex-wrap: nowrap;
  flex-flow: initial;
  overflow-x:hidden;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  word-wrap: break-word;
}
.success{
  width: 100%;
  max-width: 100vw;
  height: 40px;
  background-color: rgb(98, 199, 98);
  opacity: .5;
}
.error{
  width: 100%;
  max-width: 100vw;
  height: 40px;
  background-color:#F00;
  opacity: .5;

}
</style>
