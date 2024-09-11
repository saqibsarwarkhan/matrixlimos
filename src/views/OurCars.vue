<template>
  <div class="our-cars">
    <Block
      v-for="(fleetBlock, i) in fleetBlocks"
      v-bind:key="i"
      :title="fleetBlock.name"
      :content="fleetBlock.discription"
      :imgURL="fleetBlock.image"
      :linkUrl="fleetBlock.button_url"
      :orderChange="fleetBlock.orderby % 2"
    />
    <!-- <Block
      title="Sedan"
      content="Rear passenger controls for a/c, heat, radio ad movement of front passenger seat Reading lights, individual lights for each occupant Up to 4-passenger 3 medium size bags capacity. Powerful engine Spacious cabin and cargo hold User-friendly infotainment system More-powerful V6 engine now standard All-wheel drive now standard Reshuffled features and trims"
      imgURL="avalon-2020.jpg.webp"
      orderChange
      button
    />
    <Block
      title="Toyota Highlander"
      content="Just-right exterior and interior size for many families Standard high-tech safety features Strong V6 engine with good fuel economy Very quiet and pleasantly compliant ride quality Up to 6-passenger 4 medium size bags capacity Extra folding seat for additional luggage 4-Wheels Drive"
      imgURL="2020-highlander.jpg"
      orderChange
      button
    />
    <Block
      orderChange
      title="SUV"
      content="Chevrolet Suburban & Ford Expedition Spacious seating and abundant cargo space Muscular V8 engine Comfortable ride User-friendly features Complimentary WiFi available Extended passenger compartment Up to 6-passenger 6 medium size bags capacity Fold-down the rear bench for added luggage 4-wheel drive"
      imgURL="cc_2018CHS270030_03_1280_GBA.jpg"
      button
    />
    <Block
      orderChange
      button
      title="Mercedes Sprinter"
      imgURL="1553004394-mercedes-sprinter.png.webp"
      :items="[
        '32′ DVD Flat Screen',
        'HDMI Input Port (gaming)',
        'LED Mood Lighting',
        'Wood Flooring',
        'USB/110v Charging Ports',
        'Fridge/Cooler',
        'Luggage Wall Divider with Plenty of Room',
        'Back Up Camera',
        'GPS Navigation',
        'Privacy Window Shades',
      ]"
    />
    <Block
      title="Mercedes Sprinter Limo"
      orderChange
      button
      :items="[
        'The ultimate people mover',
        'Enormous amount of luggage space',
        'Add wifi available upon request',
        'Equipped with GPS & Airline Tracking',
        'Custom Leather Limo Style Seating',
      ]"
      imgURL="mercedes-sprinter.png.webp"
    />
    <Block
      title="14 Passenger Ford Transit"
      button
      :items="[
        'The ultimate people mover',
        'Enormous amount of luggage space',
        'Add wifi available upon request',
        'Equipped with GPS & Airline Tracking',
        'Custom Leather Limo Style Seating',
      ]"
      imgURL="ford-transit-van.png.webp"
      orderChange
    />
    <Block
      orderChange
      title="Stretch Limousine"
      button
      content="Enter our 8-passenger stretch limousine, and step into an atmosphere of pampered luxury. Bask in the soothing glow of customized track lighting, while indulging in music from the ultimate surround sound stereo system. Stock your favorite beverages in the onboard bar so you can toast your companions while enjoying the ride. Whether it’s a wedding, anniversary, or a night out with friends, a limousine is the perfect way to make it memorable."
      imgURL="lincoln-mkt-awd-stretch-limo.png.webp"
    />

    <Block
      title="Party Bus"
      button
      :items="[
        'Restroom equipped',
        'AM/FM CD sound-system',
        'Video monitors and DVD player',
        'Large touring windows',
        'Airplane style recliner seating',
        'Large basement storage for luggage',
        'Perfect for long distance charters',
        'Climate controlled interiors',
        'Overhead reading lamps',
        'Wi-fi available on select coaches',
      ]"
      imgURL="Mega-40-Party-Bus-1.jpg.webp"
      orderChange
    />
    <Block
      title="Charter Bus"
      button
      :items="[
        'Restroom equipped',
        'AM/FM CD sound-system',
        'Video monitors and DVD player',
        'Large touring windows',
        'Airplane style recliner seating',
        'Large basement storage for luggage',
        'Perfect for long distance charters',
        'Climate controlled interiors',
        'Overhead reading lamps',
        'Wi-fi available on select coaches',
      ]"
      imgURL="matrix-bus.jpg.webp"
      orderChange
    /> -->
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Block from "@/components/Block.vue";
import axios from "axios";

export default {
  name: "OurCars",
  components: {
    Block,
  },
  data: function() {
    return {
      fleetBlocks: [],
    };
  },
  created() {
    this.loadFleet();
  },
  methods: {
    loadFleet() {
      axios
        .get("https://matrixlimos.pearlalgorithms.com/site/api/fleet")
        .then((response) => {
          console.log(response.data);
          const fleetData = response.data;
          const fleetDataLength = fleetData.length;
          for (let index = 0; index < fleetDataLength; index++) {
            this.fleetBlocks.push(fleetData[index]);
          }
        });
    },
  },
  computed: {
    hasCards: function() {
      return this.fleetBlocks.length <= 0;
    },
  },
};
</script>
