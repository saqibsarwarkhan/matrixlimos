<template>
  <div class="accordion about-accordian" id="accordionFlushExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingOne">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseOne"
          aria-expanded="false"
          aria-controls="flush-collapseOne"
        >
          Travel in Style with Matrix Limos
        </button>
      </h2>
      <div
        id="flush-collapseOne"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingOne"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          You may require a long limo for a variety of occasions. It could be a
          corporate event, friends’ night out, bachelor party, or maybe you just
          want pick and drop from or to the airport. We, at Matrix Limos, are
          there for you every step of the way. Our impressive and
          well-maintained cars will pick you up and drop you at the exact
          destination requested by you. Moreover, we also make sure that there
          are no delays by valuing your time. Our first-rate drivers have all
          the skills and experience to make sure that you arrive at your
          destination on time, comfortably, and safely.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingTwo">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseTwo"
          aria-expanded="false"
          aria-controls="flush-collapseTwo"
        >
          Unparalleled Customer Service
        </button>
      </h2>
      <div
        id="flush-collapseTwo"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingTwo"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          There are many occasions when someone orders a limo ride but ends up
          being disappointed once they reach their destination. Disagreeable
          drivers, unmaintained cars, tardiness, and high prices are just a few
          reasons why people end up being disappointed. With Matrix Limos, you
          do not have to worry about anything like this. We guarantee that
          choosing us will provide you a great bang for your buck. Our
          experienced and licensed drivers are very friendly and respect the
          passenger’s boundaries. In addition, you will never need to worry
          about your safety. Our drivers undergo extensive training and are well
          aware of all the traffic rules and regulations. They are also
          excellent in remembering routes and maps which is essential for saving
          time and picking or dropping you in a punctual manner. Booking is
          extremely simple at Matrix Limos. All you have to do is get in touch
          with us, and our responsive customer service team will book your ride
          whenever you want. The customer service team is extremely patient, and
          answers all your service and booking related queries.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingThree">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseThree"
          aria-expanded="false"
          aria-controls="flush-collapseThree"
        >
          Unparalleled Airport Drop off and Pickup Services
        </button>
      </h2>
      <div
        id="flush-collapseThree"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingThree"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          Want a professional drop off and pick up service to the airport?
          Choose us. Our experience of more than a decade speaks for itself.
          Travelling can become extremely uncomfortable when you choose the
          wrong service. No one needs that kind of stress in his or her life.
          Why not choose a reliable limo service that is proficient in airport
          pickups and drop-offs? Booking a ride with Matrix Limos is extremely
          simple and stress-free. You can even make urgent bookings if the need
          arises. Our quality will always remain consistent despite our
          customer’s urgencies. Therefore, rest assured, we guarantee that you
          will never be late for your meeting, flight, or any other event that
          requires your attendance.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingFour">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseFour"
          aria-expanded="false"
          aria-controls="flush-collapseFour"
        >
          Travel in Top of the Line Luxury Cars
        </button>
      </h2>
      <div
        id="flush-collapseFour"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingFour"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          We want nothing but the best for our customers, which is why we only
          send VIP luxury cars to pick you up or drop you off. In addition, if
          you are looking for something extra special, our fleet of VVIP cars
          will prove to be the right match for you. Cars like the Mercedes Benz,
          SUVs, Limos, Luxury Sedans, etc, are just some of the cars from our
          wide range of luxurious fleet that will wait for you on your doorstep.
          Matrix Limos is a 24/7 service. Contact us at any time to book a ride,
          and we will provide you the best possible transportation service
          befitting your particular occasion at any time of the day.
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "bootstrap/dist/js/bootstrap.min.js";
export default {
  name: "AboutAccordian",
};
</script>
<style scoped lang="scss">
.about-accordian {
  .accordion-item {
    &:first-of-type {
      border-radius: 0;
    }
    &:last-of-type {
      margin-bottom: 0;
      border-radius: 0;
    }
    margin-bottom: 10px;
    border-top: 1px solid rgba(0, 0, 0, 0.125);
    .accordion-button {
      &:focus {
        box-shadow: none;
      }
    }
  }
}
</style>
