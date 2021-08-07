<template>
  <div>
    <v-btn @click="clearAlert()">Clear Alert</v-btn>
    <v-btn @click="sendAlert()">Send Alert</v-btn>
  </div>
</template>

<script>
export default {
  layout: "action_center",
  mounted() {
    this.socket = this.$nuxtSocket({
      // nuxt-socket-io opts:
      name: "home", // Use socket "home"
      channel: "/", // connect to '/index'

      // socket.io-client opts:
      reconnection: false,
    });
  },
  methods: {
    sendAlert() {
      this.socket.emit("sendAlert");
    },
    clearAlert() {
      this.socket.emit("clearAlert");
    },
  },
};
</script>

<style>
</style>