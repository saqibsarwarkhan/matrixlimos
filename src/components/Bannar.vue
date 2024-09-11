<template>
  <div
    class="home-banner py-5"
    :style="{ backgroundImage: `url(${bannerImage})` }"
  >
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-md-8 col-lg-8 align-middle  text-center">
          <h2>Black Car Service</h2>
          <p>Top 10 Best Reviews in Tri-State</p>
          <img class="rating-img" src="../assets/images/rating.webp" />
        </div>
        <div class="col-md-4 col-lg-4 text-end">
          <div class="banner-btns">
            <div class="mb-3">
              <a class="number" href="tel:(844) 227-2169">(844) 227-2169</a>
            </div>
            <div class="mb-3">
              <a type="button" class="btn btn-brown btn-block">
                <i class="fas fa-location-arrow"></i> Book Now
              </a>
            </div>
            <div class="mb-3">
              <a type="button" class="btn btn-blue btn-block">
                <i class="fas fa-pencil-alt"></i> Get a Quote
              </a>
            </div>
            <div class="mb-3">
              <a type="button" class="btn btn-brown btn-block">
                <i class="fas fa-question"></i> Questions
              </a>
            </div>
            <div class="mb-3">
              <a type="button" class="btn btn-blue btn-block">
                Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row text-center text-md-end">
        <div class="col-12">
          <p class="italic-style mb-0">
            “We’ll provide superior value for your money”
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bannerImage from "../assets/images/banner.jpg";
export default {
  name: "Bannar",
  data() {
    return {
      bannerImage,
    };
  },
};
</script>
<style scoped lang="scss">
.home-banner {
  //   height: 450px;
  background-size: cover;
  .rating-img {
    width: 180px;
  }
  .banner-btns {
    max-width: 220px;
    margin-left: auto;
    @include media-breakpoint-down(md) {
      margin: auto;
    }
    .btn-brown {
      font-family: "Arial", Sans-serif;
      font-weight: 400;
      text-shadow: 0px 0px 10px rgb(0 0 0 / 30%);
      background-color: #890e1cf2;
      border-style: solid;
      border-width: 2px;
      border-color: #fff;
      box-shadow: 3px -3px 10px 3px #fff;
      padding: 14px 20px 14px 20px;
      width: 100%;
      svg {
        font-size: 15px;
        margin-right: 10px;
      }
    }
    .btn-blue {
      font-family: "Arial", Sans-serif;
      font-weight: 400;
      text-shadow: 0px 0px 10px rgb(0 0 0 / 30%);
      background-color: #235577;
      border-style: solid;
      border-width: 2px;
      border-color: #fff;
      box-shadow: 3px -3px 10px 3px #fff;
      padding: 14px 20px 14px 20px;
      width: 100%;
      svg {
        font-size: 15px;
        margin-right: 10px;
      }
    }
    a.number {
      font-weight: 700;
      font-size: 30px;
    }
  }
  h2 {
    color: $white;
    font-size: 67px;
    font-weight: 400;
    @include media-breakpoint-down(lg) {
      font-size: 50px;
    }
    @include media-breakpoint-down(sm) {
      font-size: 35px;
    }
  }
  p {
    color: $white;
  }
  a {
    color: $white;
    text-decoration: none;
  }
  .italic-style {
    font-family: "Bad Script", Sans-serif;
    font-size: 25px;
    font-weight: 400;
    @include media-breakpoint-down(sm) {
      font-size: 22px;
    }
  }
}
</style>
