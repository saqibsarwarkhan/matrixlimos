<template>
  <div class="about">
    <Block
      v-for="(serviceBlock, i) in serviceBlocks"
      v-bind:key="i"
      :title="serviceBlock.name"
      :content="serviceBlock.discription"
      :imgURL="serviceBlock.image"
      :orderChange="serviceBlock.orderby % 2"
    />
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Block from "@/components/Block.vue";
import axios from "axios";

export default {
  name: "Services",
  components: {
    Block,
  },
  data: function() {
    return {
      serviceBlocks: [],
    };
  },
  created() {
    this.loadServicesBlock();
  },
  methods: {
    loadServicesBlock() {
      axios
        .get("https://matrixlimos.pearlalgorithms.com/site/api/services")
        .then((response) => {
          console.log(response.data);
          const serviceData = response.data;
          const serviceDataLength = serviceData.length;
          for (let index = 0; index < serviceDataLength; index++) {
            this.serviceBlocks.push(serviceData[index]);
          }
        });
    },
  },
  computed: {
    hasCards: function() {
      return this.serviceBlocks.length <= 0;
    },
  },
};
</script>
