<template>
  <div class="hello">
      <div ref="one">看我字体</div>
      <div>看我字体</div>
      <div></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  created(){
    let wid = window.devicePixelRatio

    // alert(wid)
  },
  mounted () {
      //  let wid = window.devicePixelRatio
      // if(wid == 3){
      //       //36
      //       console.log(this.$refs.one)
      //       this.$refs.one.style.fontSize = '18px'
      //   }else{
      //       this.$refs.one.style.fontSize = '18px'
      //   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

.hello{
  width:750px;
  height:400px;
  background: red;
  >div{
     width:750px;
     height:1px;
     background:red;
     margin-bottom:30px;
     font-size:36px;
  }

}

</style>
