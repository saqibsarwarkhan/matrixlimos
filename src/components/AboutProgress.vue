<template>
  <div class="progress-outer">
    <div class="progress-wrapper mb-4 ">
      <span>90%</span>
      <h5>NEW CARS</h5>
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          style="width: 90%"
          aria-valuenow="90"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
    <div class="progress-wrapper mb-4">
      <span>80%</span>
      <h5>IN-HOUSE CHAUFFUERS</h5>
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          style="width: 80%"
          aria-valuenow="80"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
    <div class="progress-wrapper mb-4">
      <span>92%</span>
      <h5>SATISFACTION RATE</h5>
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          style="width: 92%"
          aria-valuenow="92"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
    <div class="progress-wrapper mb-4">
      <span>99%</span>
      <h5>WILLING TO COME BACK</h5>
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          style="width: 99%"
          aria-valuenow="99"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutProgress",
};
</script>
<style scoped lang="scss">
.progress-outer {
  .progress-wrapper {
    position: relative;
    span {
      position: absolute;
      right: 0;
    }
    .progress {
      height: 4px;
    }
    h5 {
      padding-right: 30px;
    }
  }
}
</style>
