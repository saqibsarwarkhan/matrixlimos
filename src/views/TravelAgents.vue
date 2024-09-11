<template>
  <div
    class="bussiness-travlers py-5"
    :style="{ backgroundImage: `url(${bannerImage})` }"
  >
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-lg-4 order-2">
          <div class="form-wrapper p-4 bg-white">
            <h3>Matrix Limos for Travel Agents</h3>
            <p>
              Travel professionals rely on Matrix Limos best-in-the-industry
              technology to provide a seamless experience for their clients.
            </p>
            <form>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="yourname"
                  placeholder="Your Name"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="companyname"
                  placeholder="Company Name"
                />
              </div>
              <div class="mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
              <div class="mb-3">
                <input
                  type="number"
                  class="form-control"
                  id="phone"
                  placeholder="Phone"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="city"
                  placeholder="City"
                />
              </div>
              <div class="mb-3">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Number of trips</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <button type="submit" class="btn btn-primary mb-3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Block from "@/components/Block.vue";
import bannerImage from "../assets/images/Corp-transfers-banner-scaled.jpg";

export default {
  name: "TravelAgents",
  data() {
    return {
      bannerImage,
    };
  },
  components: {
    // Block,
  },
};
</script>
<style scoped lang="scss">
.bussiness-travlers {
  //   height: 500px;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
