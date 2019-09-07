<template>
    <div class="text-container">
      <p class="baffling">{{ listName[0] }}</p>
      <p class="baffling">{{ listName[1] }}</p>
    </div>
</template>

<script>
export default {
  name: "Displayer",
  data(){
    return { 
      isActive: false
    }
  },
  methods: {
    changeNav(){
      this.isActive = true
    }
  },
  props: {
    listName: Array
  }
}
</script>


<style scoped>
  a{
    font-size: 16px;
    text-decoration: none;
  }

  .display-container{
    width: 100%;
    position: inherit;
    padding-bottom: 15px;
    overflow: auto;
    /* opacity: 0; */
    transition: 400ms;
  }

  .text-container {
    width: 100%;
    column-count: 2;
    padding-bottom: 9px;
    height: auto;
    /* padding-bottom: 10px; */
    box-sizing: content-box;
    transition: 200ms;
    /* grid-template-columns: repeat(2,1fr); */
    /* grid-gap: 1rem; */
    /* grid-template-columns: 40px 50px auto 50px 40px; */
    /* grid-template-rows: 25% 100px auto; */
  }

  .container p {
    font-size: 1.5rem;
    text-align: left;
    /* padding: 5px; */
    /* background-color: #c0ffe8; */
  }

  .header-wrapper{
    display: flex;
    width: 100%;
    background-color: deepskyblue;
    justify-content: center;
    align-items: center;
  }

  .header{
    display: flex;
    justify-content: space-between;
  }

  .header a:hover{ color: rgb(121, 121, 121); }

  .active{
    color: rgb(255, 255, 255);
  }
</style>
