<template>
  <div class="home">
    <h1 class="header-title"> PEER 2 PEER CHAT ☕ 💬 </h1>
    <div v-on:click="getdata" class="home-detail"></div>
   
     <div class="list-name">
      <div
        v-for="(data, index) of getListData"
        :key="index"
      >
      <Displayer :listName="data"/>
      </div>
    </div>

     <div class="buttons">
        <!-- <b-button type="is-primary" @click="start"  outlined>ready</b-button> -->
        <b-button type="is-warning" @click="stop"  outlined>ta-daaa!</b-button>
        <b-button type="is-success" @click="saveData"  outlined>save</b-button>
      </div>
  </div>
</template>

<script>
import Displayer from "../components/Displayer";
import { FETCH_LISTDATA, SAVE_LISTDATA } from "@/store/actions.type";
import { mapGetters } from 'vuex'
import baffle from 'baffle';

export default {
  name: 'Home',
  data(){
    return {
      hometitle: "",
      baf: null,
      listData: "",
      isBaffling: false,
      initLists: [["Satomi Osaki","Juri Fujii"],["Yuki","Bohyun Jung"],["Nariaki Iwatani","SUGIMOTO Tatsuo"],["Hind Al Saad","Kiwako"],["Takuma Oami","Takashi Mukoda"],["Masaya Ishikawa","karnpapon boonput"],["Fabian"]]
    }
  },
  created(){
    this.$store.dispatch(FETCH_LISTDATA).then(()=>  this.start() );
   
    },
  mounted() {
    // if(this.getListData){
      // this.start()
    // }

  },
  components: {
    Displayer
  },
  props: {
    msg: String
  },
  computed: {
    ...mapGetters(['getListData', 'isLoading'])
  },
  methods: {
    getdata(){
    },
    start(){
      this.isBaffling = true
      this.baf = baffle('.baffling', {
        characters: '█▒ ▒▒▓/'
      });
      this.baf.start().set({ speed: 50 });
    },
    stop(){
      this.listData =  this.getListData
      this.baf.reveal(1500);
    },
    saveData(){
      if(!this.listData){
        this.listData = this.getListData
      }

      console.log("this.listData", this.listData)
      // this.$store.dispatch(SAVE_LISTDATA, this.listData);
    }
  }
}
</script>

<style scoped>
  .home{
    margin: auto;
    /* background-color: green; */
    text-align: center;
    align-items: center;
    display: flex;
    position: relative;
    flex-direction: column;
  }

  .header-title{
    width: fit-content;
    padding: 20px 0;
    font-size: 2.25rem;
  }

  .home-detail{
    /* cursor: pointer; */
    /* font-weight: bolder; */
  }

  .list-name { 
    /* width: 100%; */
    height: 100%;
    padding-top: 20px;
    padding-bottom: 10px;
    box-sizing: content-box;
    transition: 200ms;
  }

  .btn-wrapper{
    padding-top: 15px;
    padding-bottom: 15px;
    width: 300px;
    justify-content: space-between;
    display: flex; 
  }

  .btn-wrapper button{
    padding: 10px;
    font-size: 2rem;
  }
</style>
