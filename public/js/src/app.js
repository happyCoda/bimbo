import Vue from 'vue';
import GreetComponent from './components/greet.vue';

new Vue({
  el: '#app',
  render(createElement) {
    return createElement(GreetComponent);
  }
});
