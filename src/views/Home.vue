<template>
  <div class="home container-fluid ">
    <h1>Maps</h1>
    <google-maps class="maps card px-5" :center="{
      lat: -7.058751,
      lng: 109.239062
      }"
      :zoom="12">

    </google-maps>
  </div>
</template>

<script>
// @ is an alias to /src
import * as VueGoogleMaps from 'vue2-google-maps'

export default {
  name: 'Home',
  components: {
    'google-maps': VueGoogleMaps.Map
  }
}
</script>
<style scoped>
.maps{
  width: 100%;
  height: 300px;
  align-content: center;
}
</style>
