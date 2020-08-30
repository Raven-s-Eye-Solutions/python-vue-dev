<template>
  <div class="home">
    <Header />
        <p v-if="!error" class='pt-2 text-center text-success'>
          {{!time ? 'Loading...' : `Server time: ${time}`}}
        </p>
        <p v-if="error" class='pt-2 text-center text-error'>{{error}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  components: {
    Header,
  },
  data() {
    return {
      error: null,
      time: "",
    };
  },
  methods: {
    async fetchTime () {
      const response = await fetch("/current-time");
      if (response.ok) {
        const data = await response.json();
        if (data.time) {
          const date = new Date();
          date.setTime(data.time * 1000);
          date.toUTCString();
          this.time = date;
        }
      } else {
       this.error = response.statusText;
      }
    },
  },
  mounted() {
    this.fetchTime();
  },
};
</script>
