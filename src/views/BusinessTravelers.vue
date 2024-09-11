<template>
  <div
    class="bussiness-travlers py-5"
    :style="{ backgroundImage: `url(${bannerImage})` }"
  >
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-lg-4 order-2">
          <div class="form-wrapper p-4 bg-white">
            <h3>Get Started Today</h3>
            <p>
              We’ll contact you within an hour to set up your new corporate
              account.
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
                  type="number"
                  class="form-control"
                  id="phone"
                  placeholder="Phone"
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

              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1"
                  >I give Matrix Limos consent to contact me about offers and
                  services.</label
                >
              </div>
              <button type="submit" class="btn btn-primary mb-3">
                Lets Connect
              </button>
            </form>
            <p class="form-text">
              By submitting this form, you're accepting Matrix Limos Privacy
              Policy
            </p>
            <a href="#!">Book Immediately</a>
            <p class="form-text">
              If you need to book a ride right away, connect to our retail
              channel and we’ll migrate the details to your corporate account
              later.
            </p>
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
  name: "BusinessTravelers",
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
  background-size: cover;
}
</style>
