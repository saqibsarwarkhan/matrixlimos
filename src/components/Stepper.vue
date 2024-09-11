<template>
  <div>
    <div id="stepper4" class="stepper vertical">
      <div class="stepper-header" role="tablist">
        <div class="step" data-target="#test-vl-1">
          <button
            type="button"
            class="step-trigger"
            role="tab"
            id="stepper4trigger1"
            aria-controls="test-vl-1"
          >
            <span class="stepper-circle">1</span>
            <span class="stepper-label">Email</span>
          </button>
        </div>
        <div class="stepper-line"></div>
        <div class="step" data-target="#test-vl-2">
          <button
            type="button"
            class="step-trigger"
            role="tab"
            id="stepper4trigger2"
            aria-controls="test-vl-2"
          >
            <span class="stepper-circle">2</span>
            <span class="stepper-label">Password</span>
          </button>
        </div>
        <div class="stepper-line"></div>
        <div class="step" data-target="#test-vl-3">
          <button
            type="button"
            class="step-trigger"
            role="tab"
            id="stepper4trigger3"
            aria-controls="test-vl-3"
          >
            <span class="stepper-circle">3</span>
            <span class="stepper-label">Validate</span>
          </button>
        </div>
      </div>
      <div class="stepper-content">
        <form onSubmit="return false">
          <div
            id="test-vl-1"
            role="tabpanel"
            class="stepper-pane fade"
            aria-labelledby="stepper4trigger1"
          >
            <div class="form-group">
              <label for="exampleInputEmailV1">Email address</label>
              <input
                type="email"
                class="form-control "
                id="exampleInputEmailV1"
                placeholder="Enter email"
              />
            </div>
            <button class="btn btn-primary" onclick="stepper4.next()">
              Next
            </button>
          </div>
          <div
            id="test-vl-2"
            role="tabpanel"
            class="stepper-pane fade"
            aria-labelledby="stepper4trigger2"
          >
            <div class="form-group">
              <label for="exampleInputPasswordV1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPasswordV1"
                placeholder="Password"
              />
            </div>
            <button class="btn btn-primary" onclick="stepper4.previous()">
              Previous
            </button>
            <button class="btn btn-primary" onclick="stepper4.next()">
              Next
            </button>
          </div>
          <div
            id="test-vl-3"
            role="tabpanel"
            class="stepper-pane fade"
            aria-labelledby="stepper4trigger3"
          >
            <button class="btn btn-primary mt-5" onclick="stepper4.previous()">
              Previous
            </button>
            <button type="submit" class="btn btn-primary mt-5">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Stepper",
};
</script>
