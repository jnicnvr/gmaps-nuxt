<template>
  <v-app>
    <v-app-bar app dark clipped-left>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-app-bar-title>CNEAS.v3</v-app-bar-title>
      <v-spacer></v-spacer>
      <span>User</span>
      <v-toolbar-title></v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!-- <v-breadcrumbs :items="breadCrumbsitems" large :to="breadCrumbsitems.to">       
      </v-breadcrumbs>-->
      <Nuxt />
    </v-main>
    <alerts-handler></alerts-handler>
  </v-app>
</template>

<script>
import AlertsHandler from "../components/ActionCenter/AlertsHandler.vue";

export default {
  components: { AlertsHandler },
  data: () => ({
    // breadCrumbsitems: [
    //   {
    //     text: "Dashboard",
    //     disabled: false,
    //     to: "home",
    //   },
    //   {
    //     text: "Home",
    //     disabled: true,
    //     to: "breadcrumbs_link_1",
    //   },
    // ],
    alerts: {
      name: "",
      lat: "",
      lng: "",
    },
  }),
 
};
</script>