<template>
  <div class="block-wrapper pt-5 pb-5">
    <div class="container">
      <div class="row align-items-center gx-5">
        <div
          class="col-md-6 img-side "
          :class="orderChange == 1 ? 'order-last' : 'order-first'"
        >
          <img :src="imgURL" alt="{{title}}" />
          <!-- <img :src="require(`../assets/images/${imgURL}`)" alt="{{title}}" /> -->
        </div>
        <div class="col-md-6 content-col">
          <h3 v-if="title" class="mb-4">{{ title }}</h3>
          <p v-if="content" v-html="content"></p>
          <ul class="m-0 p-0">
            <li v-for="(item, index) in items" v-bind:key="index">
              {{ item }}
            </li>
          </ul>
          <a v-bind:href="linkUrl" v-show="linkUrl" class="mt-4 btn btn-primary"
            >Book Now</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Block",
  props: {
    title: String,
    content: String,
    imgURL: String,
    orderChange: Number,
    linkUrl: String,
    items: Array,
  },
};
</script>
<style scoped lang="scss">
.block-wrapper {
  .img-side {
    img {
      width: 100%;
    }
  }
  .content-col {
    p {
      font-size: 15px;
      color: #7a7a7a;
      line-height: 1.8rem;
      margin-bottom: 0;
    }
    ul {
      list-style: none;
      padding: 0;
      li {
        margin-bottom: 5px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
