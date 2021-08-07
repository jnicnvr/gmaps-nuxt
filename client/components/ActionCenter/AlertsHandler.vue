<template>
  <v-navigation-drawer width="20vw" clipped fixed permanent left dark app>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto rounded-xl" outlined>
          <v-alert
            border="left"
            color="red"
            class="text-overline mb-4 rounded-t-xl"
            type="error"
            text
          >ALERTS</v-alert>
          <v-list>
            <v-list-item-group color="indigo">
              <v-list-item v-for="alerts in getLocation" :key="alerts.id">
                <v-list-item-content >
                  <v-list-item-title>{{alerts.name}}</v-list-item-title>
                  <v-list-item-subtitle>Daet Camarines Norte</v-list-item-subtitle>
                  <v-list-item-subtitle>Police</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon>mdi-priority-high</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto rounded-xl" outlined>
          <v-alert
            border="left"
            color="blue"
            class="text-overline mb-4 rounded-t-xl"
            type="info"
            text
          >OUTGOING</v-alert>
          <v-list>
            <v-list-item-group color="indigo">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Juan Dela Cruz</v-list-item-title>
                  <v-list-item-subtitle>Daet Camarines Norte</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon>mdi-arrow-down-bold-circle</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto rounded-xl" outlined>
          <v-alert
            border="left"
            color="green"
            class="text-overline mb-4 rounded-t-xl"
            type="success"
            text
          >COMPLETED</v-alert>
          <v-list>
            <v-list-item-group color="indigo">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Juan Dela Cruz</v-list-item-title>
                  <v-list-item-subtitle>Daet Camarines Norte</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon>mdi-check</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-btn @click="getUser()">Get User</v-btn>
    <v-btn @click="sendAlert()">Send Alert</v-btn>
    <v-btn @click="clearAlert()">Clear Alert</v-btn>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    alerts: [],
    outgoing: {},
    completed: {},
  }),
  mounted() {
    this.socket = this.$nuxtSocket({
      // nuxt-socket-io opts:
      name: "home", // Use socket "home"
      channel: "/", // connect to '/index'

      // socket.io-client opts:
      reconnection: false,
    });
  },
  computed: {
    ...mapGetters("map", { getLocation: "getLocation" }),
  },
  methods: {
    getUser() {
      this.socket.emit("test", { data: this.userInfo });
    },
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