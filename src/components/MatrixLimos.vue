<template>
  <div class="matrix-limos py-5">
    <div class="container">
      <div class="row mb-4">
        <div class="col-12 text-center">
          <h3>Welcome To Matrix Limos</h3>
        </div>
      </div>
      <div class="row gy-md-5">
        <div
          class="col-md-6 col-lg-4 mb-4 mb-md-0"
          v-for="(matrixlimos, i) in magicCards"
          v-bind:key="i"
        >
          <div class="blurb">
            <div class="left-side">
              <div class="icon-wrapp rounded-circle">
                <i :class="matrixlimos.icon"></i>
              </div>
            </div>
            <div class="right-side">
              <div class="content-wrapp">
                <h4>{{ matrixlimos.name }}</h4>
                <p class="mb-0">{{ matrixlimos.discription }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
// const API = "http://matrixlimos.pearlalgorithms.com/site/api/home_services";
export default {
  name: "MatrixLimos",
  data: function() {
    return {
      magicCards: [],
    };
  },
  created() {
    this.loadCards();
  },
  methods: {
    loadCards() {
      axios
        .get("https://matrixlimos.pearlalgorithms.com/site/api/home_services")
        .then((response) => {
          //console.log(response.data);
          const cardData = response.data;
          const cardDataLength = cardData.length;
          for (let index = 0; index < cardDataLength; index++) {
            this.magicCards.push(cardData[index]);
          }
        });
    },
  },
  computed: {
    hasCards: function() {
      return this.magicCards.length <= 0;
    },
  },
};
</script>
<style scoped lang="scss">
.matrix-limos {
  h3 {
    color: #00bfff;
    font-style: italic;
  }
  .blurb {
    display: flex;
    .left-side {
      margin-right: 35px;
      @include media-breakpoint-down(xl) {
        margin-right: 20px;
      }
      .icon-wrapp {
        width: 60px;
        height: 60px;
        background: #6adaff4f;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #1f86e2;
        font-size: 30px;
      }
    }
    .right-side {
      .content-wrapp {
        h4 {
          font-size: 18px;
          font-weight: 600;
        }
        p {
          color: #7a7a7a;
        }
      }
    }
  }
}
</style>
