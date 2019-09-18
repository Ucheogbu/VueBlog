<template>
  <div id="show-div">
    <app-header :showSearch="showSearch" :showBlogtoggle="showBlogtoggle" :addBlogtoggle="addBlogtoggle" @showBlog="updateComponent($event)"></app-header>
    <div class="container" >
      <div class="left-sidebar">
        <hr>
        <div class="single-title" v-for="(blog, title) in blogs"> {{title}}
          <!-- <div class="single-title" v-show="blog.author === userId">
            </div> -->
            </div>
        <hr>
      </div>
      <div class="main-body">
        <div class="single-blog" v-for="(blog, title) in blogs">
          <h1>{{title}}</h1>
            <hr>
            <br>
            <p>{{blog.body}}</p>
            <br>
            <div class="author">Author: {{ blog.author }}</div>
            <!-- <div class="" v-show="blog.author === userId">
            </div> -->
        </div>
        </div>
      <div class="right-sidebar"></div>
    </div>    
    <!-- <app-footer :title='title'></app-footer>  -->
  </div>
</template>

<script>
import Header from './Header.vue'
// import Footer from './footer.vue'

export default {
  name: 'shoBlogs',
    data() {
    return {
        userId: 'Uche Ogbu',
        editorConfig: {},
        title: 'Blogger',
        showSearch: true,
        showBlogtoggle: false,
        addBlogtoggle: true,
        blogs: []   
    }
  },
  components: {
      'app-header':Header,
      // 'app-footer':Footer,
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  },
  computed: {
    filterBlog() {
      Object.filter = (obj, predicate) => 
        Object.keys(obj)
              .filter( key => predicate(obj[key]) )
              .reduce( (res, key) => Object.assign(res, { [key]: obj[key] }), {} );

      return Object.filter(this.blogs, blog => blog.author === this.userId)
      
      
    }
  },
  created() {
    fetch('http://127.0.0.1:4000/blogs', {
        'credentials': 'include',
        'headers': new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
            'X-Requested-With': 'XMLHttpRequest'
          }),
      })
      .then((response)=> response.json())
      .then((response)=>{
        this.blogs = JSON.parse(response)        
      })
      .catch((err)=>{
        this.error = true
        this.errorMessage = err
      })
  },
}
</script>

<style scoped>
#show-div {
  background-color: rgb(255, 255, 255);
  color: #2e2c2c
}
.container {
  display: flex;
  height: 90vh;
}
.left-sidebar {
  display: flex;
  flex-direction: column;
  flex: 1;
  border-right: 2px solid rgb(32, 31, 31);
  border-left: 2px solid rgb(32, 31, 31);
  height: 100%;
}

.right-sidebar {
  flex: 1;
  border-right: 2px solid rgb(32, 31, 31);
  border-left: 2px solid rgb(32, 31, 31);
  height: 100%;
}

.single-title{
  background-color: #cecece;
  color: #000000;
  margin-bottom: 25px;
  padding:2px;
  height: 35px;
  text-align: center;
  align-content: center;
  justify-content: center
}

.single-blog{
  font-family: 'Courier New', Courier, monospace;
  text-align:center;
}
.single-blog h1{
  text-align: left;
}

.main-body {
  flex: 3;
  height: 100%;
  background-color: #ffffff;
  /* border: 2px solid 1 #F00; */
  overflow-y:scroll;
  color: #000000;
}
</style>
