<template>
  <div
    class="bussiness-travlers py-5"
    :style="{ backgroundImage: `url(${bannerImage})` }"
  >
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-lg-4 order-2">
          <div class="form-wrapper p-4 bg-white">
            <Stepper />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bannerImage from "../assets/images/Corp-transfers-banner-scaled.jpg";
import Stepper from "@/components/Stepper.vue";

export default {
  name: "MatrixLimosDriverRegistration",
  components: {
    Stepper,
  },
  data() {
    return {
      bannerImage,
    };
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
