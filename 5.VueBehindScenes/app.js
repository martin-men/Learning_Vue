const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.userText.value;
    },
  },
  
  // HOOKS

  // Vue app not initialized yet
  beforeCreate() {
    console.log('beforeCreate()');
  },
  // Vue app initialized internally
  created() {
    console.log('created()');
  },
  // Right before we see something on the screen
  // The template is compiled and ready to be rendered
  beforeMount() {
    console.log('beforeMount()');
  },
  // Vue app is mounted and we see it on the screen
  mounted() {
    console.log('mounted()');
  },
  // Before the DOM is updated (no changes in the DOM yet)
  beforeUpdate() {
    console.log('beforeUpdate()');
  },
  // After the DOM is updated
  updated() {
    console.log('updated()');
  },
  // Before the app is destroyed
  beforeUnmount() {
    console.log('beforeUnmount()');
  },
  // After the app is destroyed
  unmounted() {
    console.log('unmounted()');
  },
});

app.mount('#app');

const app2 = Vue.createApp({
  data() {
    return {
      favoriteMeal: 'Pizza'
    }
  }
})

app2.mount('#app2')

// Vue uses JS proxies to make the data reactive. When you change the data, Vue will automatically update the DOM.

// let message = 'Hello!'
// let longMessage = message + ' World!'
// console.log(longMessage) // Hello World!
// message = 'Hello!!!'
// console.log(longMessage) // Hello World! (longMessage is not updated because JS is not reactive by default)

// JS PROXIES
// const data = {
//   message: 'Hello!',
//   longMessage: 'Hello! World!'
// }

// const handler = {
//   set(target, key, value) {
//     if (key === 'message') {
//       target.longMessage = value + ' World!'
//     }
//     target.message = value
//   }
// }

// const proxy = new Proxy(data, handler)

// proxy.message = 'Hello!!!'

// console.log(proxy.longMessage) // Hello!!! World!
