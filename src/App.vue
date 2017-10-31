<template>
  <div id="app">
    <router-view/>

    <button @click.prevent="openTest">test</button>

    <div id="modalStack"></div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import TestModal from './modals/TestModal.vue'

  export default {
    name: 'app',
    components: {
      TestModal
    },
    methods: {
      openTest: function() {

        let Constructor = Vue.extend(TestModal);

        new Vue({
          el: '#modalStack',
          mounted: function() {
            let testModal = new Constructor({
              el: this.$el,
              parent: this,
            });
          },
        });
      },
    }
  }
</script>

