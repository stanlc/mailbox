<template>
  <div id="app">
    <div class="amap-wrapper">
      <el-amap-search-box class="search-box" :search-option="searchOption" :on-search-result="onSearchResult"></el-amap-search-box>
      <el-amap class="amap-box" :vid="'amap-vue'" :center="mapCenter" :events="events" :zoom="15" :plugin="plugin">
          <el-amap-marker v-for="marker in markers" :position="marker" :key="marker.index"></el-amap-marker>
      </el-amap>
    </div>
    <div class="toolbar">
        经纬度: [{{ lng }}, {{ lat }}] 地址: {{ address }}
    </div>
  </div>
</template>

<script>

export default {
  data () {
    // let self = this;
    return {
        events:{
        'click': (e) => {
            let { lng, lat } = e.lnglat;
            this.lng = lng,
            this.lat = lat
            }
          },
        searchOption: {
            city: '成都',
            citylimit: false
          },
        markers:[], 
        mapCenter: [104.063133,30.5737],
        lng:104.063133,
        lat:30.5737,
        geocoder:{},
        address:'成都孵化园',
    } 
  },
   methods: {
        onSearchResult(pois) {
          let latSum = 0;
          let lngSum = 0;
          if (pois.length > 0) {
            pois.forEach(poi => {
              let {lng, lat} = poi;
              lngSum += lng;
              latSum += lat;
              this.markers.push([poi.lng, poi.lat]);
            });
            let center = {
              lng: lngSum / pois.length,
              lat: latSum / pois.length
            };
            this.mapCenter = [center.lng, center.lat];
          }
        }
      },

  
  
}
</script>

<style scoped>
.amap-wrapper {
  width: 800px;
  height: 500px;
  position: relative;
}
.search-box {
    position: absolute;
    top: 25px;
    left: 0px;
    background-color:#fff; 
    color:aqua;
}
.toolbar{
    position: absolute;
    top:0;
    left: 0;
    color: red;
}
</style>