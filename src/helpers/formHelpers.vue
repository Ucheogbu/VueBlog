<template>
  <div>
    <div class="form-wrapper">
        <div class="form-header">
        <slot name="form-header"></slot>
        </div>
        <div class="form-fields">
        <slot name="form-fields"></slot>
        </div>
        <div class="form-controls">
            <slot name="form-controls"></slot>
        </div>
        
        <div class="useful-links">
            <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
                <li><a href="#">Link 4</a></li>
                <li><a href="#">Link 5</a></li>
            </ul>
        </div>
    </div>
    </div>
</template>

<script>

export default {
  name: 'formHelper',
  data() {
    return {
      
    }
  },
  components: {

  },
  methods: {

  }
}
</script>

<style scoped>
.form-wrapper {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
}
.form-controls {
    flex: 1;
}
.form-header {
    flex: 1;
}
.useful-links {
    flex: 1;
}
.form-field {
    flex: 3;
    display: flex;
    box-sizing: border-box;
}
.form-fields textarea {
    margin-bottom: 30px;
    display: block;
    width: 500px;
    border-radius: 5px;
    height: 250px;
    box-sizing: border-box;

}
.form-fields label{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    font-weight: bolder;
}
.form-fields input{
    margin-bottom: 20px;
    flex: 1;
    display: block;
    width: 500px;
    border-radius: 5px;
    padding: 15px;
    box-sizing: border-box;
    }
.form-controls button {
    text-decoration: none;
    width: 100px;
    height: 50px;
    color: rgb(0, 0, 0);
    background-color: orangered;
    border-radius: 10px;
    box-shadow: none;
}
.useful-links li{
    display: inline;
    margin: 38px;

}
.useful-links a{
    text-decoration: none;
}

</style>
