<template>
  <div class="page1">
      page1
      <p>config: chunkfilename{{abc}}</p>
      <div>你好</div>
      <p>我好 我知道</p>
  </div>
</template>

<script>
import {abc} from './config.js'
export default {
  data () {
    return {
      abc
    }
  },
  components: {

  }
}
</script>

<style lang="less" scoped>
.page1 {
    color: red;
}
</style>
