<template>
  <div >
    <!-- <nav class="navbar navbar-expand-md navbar-light bg-light">
      <a class="navbar-brand" href="#"><img alt="SocialApp" width="72" height="72" src="../../public/img/logo.png">{{title}}</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarsExample04">

        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link " href=#>Logout</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About US</a>
                <div class="dropdown-menu" aria-labelledby="dropdown04">
                    <a class="dropdown-item" href="#">FAQ</a>
                    <a class="dropdown-item" href="#">Request Quotation</a>
                    <a class="dropdown-item" href="#">Make a Review</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Contact Us</a>
            </li>

        </ul>

          <form v-if="showSearch" class="form-inline my-2 my-md-0">
              <input class="form-control" type="text" placeholder="Search">
          </form>
      </div>
    </nav> -->
    <div class="wrapper">
      <div class="nav-wrapper">
      <div class="nav">
      <div class="logo"><a href=""><img src="../../public/img/logo.png" alt="E-vote"></a></div>
      <ul>
        <li v-if="showBlogtoggle"><a href="" @click.prevent="showBlog">Blogs</a></li>
        <li v-if="addBlogtoggle"><a href="" @click.prevent="addBlog">Add Blog</a></li>
        
      </ul>
      <form v-if="showSearch" class="form">
          <input class="" type="text" placeholder="Search">
      </form>
    </div>
    </div>
    </div>
      </div>
</template>

<script>
import {bus} from '../main'
export default {
  name: 'Header',
  data(){
    return{
      
    }
  },
  props: {
    title: String,
    showSearch: Boolean,
    showBlogtoggle: Boolean,
    addBlogtoggle: Boolean,
  },
  methods: {

    showBlog(){
      bus.$emit('changeComponent', 'showBlog')
    },
    addBlog(){
      bus.$emit('changeComponent', 'addBlog')
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper{
  width: 100%;
  border-bottom: 2px solid black;
}

.nav {
  display: flex;
  height: 10vh;
  align-items: center;
  margin: 0px 50px 0px 50px; 
}
.nav-wrapper form input{
  width: 300px;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  height: 20px;
  border: 2px solid #F00;
  border-radius: 5px;
  padding: 15px;
  box-sizing: border-box;
}
.nav-wrapper form input :active{
  box-shadow: 4 2 4 #f05252;

}
h3 {
  margin: 40px 0 0;
}
h1 {
  text-align: center;
}
.nav ul {
  flex: 1;
  list-style-type: none;
  padding: 5px;
}
.nav form {
  flex: 1;
}
.nav ul li {
  display: inline-block;
  line-height: 10px;
  margin: 0 10px;
}
.nav a {
  color: #000000;
  text-decoration: none;
}
.logo {
  flex: 2;
}
.logo a img {
  padding-top: 10px;
  width: 40px;
  height: 40px;
}
</style>
