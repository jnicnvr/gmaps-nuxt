<template>
  <div>
    <GmapMap
      :center="center"
      :zoom="12"
      map-type-id="hybrid"
      :options="{ zoomControl: true, mapTypeControl: false, scaleControl: false, streetViewControl: false, rotateControl: false, fullscreenControl: true, disableDefaultUi: false}"
      style="height: 100vh"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in locations"
        :position="m"
        :clickable="true"
        :draggable="true"
        @click="center=m"
      />
    </GmapMap>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  layout: "action_center",
  data: () => ({
    locations: [],
    center: { lat: 14.264209, lng: 121.059288 },
  }),
 
  methods: {
    ...mapActions("map", { setLocation: "SET_LOCATION" }),
  },
  mounted() {
    this.socket = this.$nuxtSocket({
      // nuxt-socket-io opts:
      name: "home", // Use socket "home"
      channel: "/", // connect to '/index'

      // socket.io-client opts:
      reconnection: false,
    });

    this.socket.on("onReceived", (data) => {
      console.log("Nuxt js data");
      console.log(data);
    });
    this.socket.on("onAlertSend", (data) => {
      console.log("Alert Received!");
      console.log(data);
      this.locations = data;
         this.setLocation(this.locations)
    });
    this.socket.on("onClearAlert", () => {
      console.log("Alert Cleared!");
      this.locations = [];
       this.setLocation(this.locations)
     
    });
  
  },
};
</script>

<style>
</style>
