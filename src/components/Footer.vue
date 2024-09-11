<template>
  <footer class="text-center text-md-start ">
    <!-- Grid container -->
    <div class="container py-5">
      <!--Grid row-->
      <div class="row text-white">
        <!--Grid column-->
        <div class=" col-md-4 col-lg-4 mb-4 mb-md-0">
          <h5 class="mb-3">Explore</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <router-link to="/about"
                ><i class="d-none d-md-block fas fa-chevron-right"></i>About
                Us</router-link
              >
              <!-- <a href="#!"
                ><i class="d-none d-md-block fas fa-chevron-right"></i> About
                Us</a
              > -->
            </li>
            <li>
              <router-link to="/our-cars"
                ><i class="d-none d-md-block fas fa-chevron-right"></i
                >Fleet</router-link
              >
            </li>
            <li>
              <router-link to="/services"
                ><i class="d-none d-md-block fas fa-chevron-right"></i
                >Services</router-link
              >
            </li>
            <li>
              <router-link to="/contact"
                ><i class="d-none d-md-block fas fa-chevron-right"></i>Contact
                Us</router-link
              >
            </li>
          </ul>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class=" col-md-4 col-lg-4 mb-4 mb-md-0">
          <h5 class="mb-4 mb-0">Download Our App</h5>

          <div class="mb-3">
            <a class="btn btn-primary btn-block ">
              <i class=" fas fa-apple-alt"></i> Download
            </a>
          </div>
          <div class="mb-0">
            <a class="btn btn-primary btn-block">
              <i class=" fas fa-robot"></i> Download
            </a>
          </div>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class=" col-md-4 col-lg-4 mb-4 mb-md-0">
          <h5 class="mb-3">Parter With Us</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!"
                ><i class="d-none d-md-block fas fa-chevron-right"></i> Business
                Travelers</a
              >
              <router-link to="/business-travelers"
                ><i class="d-none d-md-block fas fa-chevron-right"></i>Business
                Travelers</router-link
              >
            </li>
            <li>
              <a href="#!"
                ><i class="d-none d-md-block fas fa-chevron-right"></i> Travel
                Agents</a
              >
              <router-link to="/travel-agents"
                ><i class="d-none d-md-block fas fa-chevron-right"></i>Travel
                Agents</router-link
              >
            </li>
            <li>
              <a href="#!"
                ><i class="d-none d-md-block fas fa-chevron-right"></i> Sign Up
                to Drive</a
              >
            </li>
          </ul>
        </div>
        <!--Grid column-->
      </div>
      <!--Grid row-->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3 text-white copyright">
      Copyrights © 2021 Matrix Limos. All Rights Reserved
    </div>
    <!-- Copyright -->
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
<style scoped lang="scss">
footer {
  background: #222;
  h5 {
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
  }
  ul {
    li {
      a {
        position: relative;
        display: block;
        line-height: 24px;
        padding: 4px 0 4px 20px;
        color: #c8c8c8 !important;
        text-transform: capitalize;
        text-decoration: none;
        @include media-breakpoint-down(md) {
          padding: 4px 0 4px 0px;
        }
        svg {
          position: absolute;
          left: 0;
          font-size: 12px;
          line-height: 24px;
          top: 10px;
          color: #0aa3f3;
        }
        &:hover {
          color: #0aa3f3 !important;
        }
      }
    }
  }
  a {
    &.btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 170px;
      padding-left: 35px;
      padding-right: 35px;
      background: #0aa3f3;
      border-color: #0aa3f3;
      @include media-breakpoint-down(md) {
        margin: auto;
      }
      svg {
        font-size: 14px;
      }
    }
  }
  .copyright {
    background: #171717;
  }
}
</style>
