<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Bannar />
    <MatrixLimos />
    <HomeServices />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Bannar from "@/components/Bannar.vue";
import MatrixLimos from "@/components/MatrixLimos.vue";
import HomeServices from "@/components/HomeServices.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    Bannar,
    MatrixLimos,
    HomeServices,
  },
};
</script>
