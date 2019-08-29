<template>
  <div >
    <component @changeComponent="changeComponent($event)" :is="componentID"></component>
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
      title: 'Blogger',
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
    }
  },
  created(){
    bus.$on('changeComponent', (component) => {
      this.componentID = component
    })
  }
}
</script>

<style>


</style>
