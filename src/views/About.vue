<template>
  <div class="about">
    <Block
      v-for="(aboutBlock, i) in aboutBlocks"
      v-bind:key="i"
      :title="aboutBlock.name"
      :content="aboutBlock.discription"
      :imgURL="aboutBlock.image"
    />
    <!-- <Block
      title="About Matrix Limos"
      content="Looking for a Limo Service with an extensive range of
            well-maintained luxury cars driven by experienced and professional
            chauffeurs? Go For Matrix Limos Matrix Limos has been a mainstay in
            the Limo Service landscape for more than a decade. Our journey began
            in 2006 by providing convenient, comfortable, and luxurious airport
            transportation services to our clients. One would imagine that a
            Limo service as classy and professional as ours would be quite
            pricey, but in reality, we are far from being pricey. In fact, we
            pride ourselves on being amongst a select few groups of Limo
            services that provide quality service at affordable rates."
      imgURL="it-support-pictur.jpg"
    />
    <Block
      content="Despite the presence of several renowned app-based services, you will find Matrix Limos’ services to be heads and shoulders above them. Why? Well, for starters, our consistency is unparalleled when it comes to regional transportation. Moreover, our customized services are perfect for customers to fulfill the precise manner in which they want to travel. We handpick the people on our team with care. Our main criteria for selecting personnel are experience and professionalism. After all, we aim to offer world-class services."
      imgURL="shutterstock_637780504-1-1024x512.jpg"
    /> -->
    <div class="progress-accordian mt-5 mb-5">
      <div class="container">
        <div class="row gx-5">
          <div class="col-md-6"><AboutProgress /></div>
          <div class="col-md-6"><AboutAccordian /></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Block from "@/components/Block.vue";
import AboutAccordian from "@/components/AboutAccordian.vue";
import AboutProgress from "@/components/AboutProgress.vue";
import axios from "axios";

export default {
  name: "About",
  components: {
    Block,
    AboutAccordian,
    AboutProgress,
  },
  data: function() {
    return {
      aboutBlocks: [],
    };
  },
  created() {
    this.loadAboutCards();
  },
  methods: {
    loadAboutCards() {
      axios
        .get("https://matrixlimos.pearlalgorithms.com/site/api/about")
        .then((response) => {
          console.log(response.data);
          const aboutData = response.data;
          const aboutDataLength = aboutData.length;
          for (let index = 0; index < aboutDataLength; index++) {
            this.aboutBlocks.push(aboutData[index]);
          }
        });
    },
  },
  computed: {
    hasCards: function() {
      return this.aboutBlocks.length <= 0;
    },
  },
};
</script>
