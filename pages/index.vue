<template>
  <div>    
    <theheader></theheader>
    <themain></themain>
    <thefooter></thefooter>
  </div>
</template>

<style lang="scss" scoped>
  body,
  html {
    padding: 0;
    margin: 0;
  }

  #nav {
    padding: 30px;
  }

</style>
<script>

import Thefooter from '../layouts/Thefooter.vue'
import Theheader from '../layouts/Theheader.vue'
import Themain from '../layouts/Themain.vue'

export default {

layout: 'Thefooter, Theheader, main',
components: {

        Theheader,
        Thefooter,
Themain,
    },

}
</script>