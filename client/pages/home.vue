<template>
  <div>this is home..
      <v-btn @click="getMessage()">Click me</v-btn>
  </div>
</template>

<script>
export default {
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
    getMessage() {
      this.socket.emit("test", { data: "hey" });
    },
  },
};
</script>

<style>
</style>