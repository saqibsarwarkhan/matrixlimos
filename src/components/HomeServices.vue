<template>
  <div class="services pt-5 pb-5">
    <div class="container">
      <div class="row mb-3">
        <div class="col-12 text-center">
          <h3>Our Awesome Services</h3>
          <p>Join Our Popular Services And Enjoy The Life</p>
        </div>
      </div>
      <div class="row gy-4">
        <div
          class="col-12 col-sm-6 col-md-6 col-lg-4"
          v-for="(service, i) in homeServices"
          v-bind:key="i"
        >
          <div class="service-wrapper text-center">
            <div class="icon-wrapp">
              <i :class="service.icon"></i>
            </div>
            <h4>{{ service.name }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "HomeServices",
  data: function() {
    return {
      homeServices: [],
    };
  },
  created() {
    this.loadServices();
  },
  methods: {
    loadServices() {
      axios
        .get("https://matrixlimos.pearlalgorithms.com/site/api/home_services2")
        .then((response) => {
          //console.log(response.data);
          const cardData = response.data;
          const cardDataLength = cardData.length;
          for (let index = 0; index < cardDataLength; index++) {
            this.homeServices.push(cardData[index]);
          }
        });
    },
  },
  computed: {
    hasCards: function() {
      return this.homeServices.length <= 0;
    },
  },

  // data: function() {
  //   return {
  //     services: [
  //       {
  //         name: "Night Parties",
  //         icon: '<i class="fas fa-wine-glass"></i>',
  //       },
  //       {
  //         name: "Shopping Malls",
  //         icon: '<i class="fas fa-shopping-cart"></i>',
  //       },
  //       {
  //         name: "Weddings",
  //         icon: '<i class="far fa-heart"></i>',
  //       },
  //       {
  //         name: "Airports",
  //         icon: '<i class="fas fa-plane"></i>',
  //       },
  //       {
  //         name: "Hotels",
  //         icon: '<i class="far fa-building"></i>',
  //       },
  //       {
  //         name: "Cinemas",
  //         icon: '<i class="fas fa-play-circle"></i>',
  //       },
  //     ],
  //   };
  // },
};
</script>
<style scoped lang="scss">
.services {
  background: #f9f9f9;
  h3 {
    color: #00bfff;
    // font-style: italic;
  }
  p {
    font-size: 24px;
  }
  .service-wrapper {
    background: #00bfff;
    color: #ffffff;
    padding: 10px;
    .icon-wrapp {
      font-size: 50px;
    }
    h4 {
      font-weight: 600;
    }
  }
}
</style>
