<template>
  <div >
      <app-header :title='title'></app-header>
    <div class="container">

    </div>    
    <app-footer :title='title'></app-footer> 
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './footer.vue'

export default {
  name: 'shoBlogs',
  data() {
    return {
      
    }
  },
  components: {
      'app-header':Header,
      'app-footer':Footer,
  },
  methods: {

  }
}
</script>

<style>


</style>
