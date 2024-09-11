<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container">
        <router-link class="" to="/">
          <picture>
            <source srcset="../assets/images/logo.png" type="image/webp" />
            <source srcset="../assets/images/logo.png" type="image/jpeg" />
            <img src="../assets/images/logo.png" alt="Alt Text!" />
          </picture>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
              <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About Us</router-link>
              <!-- <a class="nav-link" href="#">About Us</a> -->
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/services"
                >Services</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/our-cars">Fleet</router-link>
            </li>

            <li class="nav-item dropdown">
              <a
                @click="toggle = !toggle"
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Partner With Us
              </a>

              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <router-link class="nav-link" to="/business-travelers"
                    >Business Travel</router-link
                  >
                </li>
                <li>
                  <router-link class="nav-link" to="/travel-agents"
                    >Travel Agents</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="nav-link"
                    to="/matrix-limos-driver-registration"
                    >Drivers</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      toggle: true, //toggle variable
    };
  },
};
</script>
<style scoped lang="scss">
.header {
  ul {
    li {
      a {
        font-size: 16px;
      }
    }
  }
  img {
    width: 100px;
  }
}
</style>
