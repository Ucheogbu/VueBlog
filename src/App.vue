<template>
<div class="video-container">
  
  <video autoplay loop="true" width="1280" height="720">
    <source type="video/mp4" src="https://flixels.s3.amazonaws.com/flixel/ct08dlpwq6eqp8yp1r6v.hd.mp4">
    <source type="video/webm" src="http://blucube.net/stuff/codepen-assets/html5vid/beepl-pink-vynil.webm">
    <source type="video/ogg" src="http://blucube.net/stuff/codepen-assets/html5vid/beepl-pink-vynil.ogv">
  </video>
  
  <div class="overlay">
    <div >
      <component @changeComponent="changeComponent($event)" :is="componentID"></component>

  </div>
  </div>
  
</div>
  
</template>

<script>
import addBlog from './components/addBlog'
import showBlog from './components/showBlogs'
import {bus} from './main'

export default {
  name: 'app',
  data() {
    return {
      componentID: 'addBlog'
      
    }
  },
  components: {
    'addBlog':addBlog,
    'showBlog':showBlog,
  },
  methods: {
    updateTitle(title){
      this.title = title
    },
    changeComponent(component){
      this.componentID = component
    }
  },
  // beforeRouteUpdate (to, from, next) {
  //   // react to route changes...
  //   // don't forget to call next()
  // },
  created(){
    bus.$on('changeComponent', (component) => {
      this.componentID = component
    })
  }
}
</script>

<style scoped>
.video-container {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%; 
  overflow: hidden;
}

.video-container video {
  /* Make video to at least 100% wide and tall */
  min-width: 100%; 
  min-height: 100%; 
  
  /* Setting width & height to auto prevents the browser from stretching or squishing the video */
  width: auto;
  height: auto;
  
  /* Center the video */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

.overlay {
  background-image: linear-gradient(to bottom right,#002f4b,#dc4225);
  opacity: .8;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  box-sizing: border-box;
  :last-child { margin-bottom: 0; }
  h1 {font-size: 32pt; font-weight: bold; text-shadow: 0 0 .3em #000; margin: 0 0 1em;}
  p {font-size: 11pt;text-shadow: 0 0 .3em #000;margin: 1em 0;}
  a {color: #fff;}
}

code { font-family: monospace; }
body { 
  background: #333;
  color: #fff;
  font-family: 'Oxygen', sans-serif;
}

</style>
