<template>
  <!-- <div class="container">
    <users-list></users-list>
  </div>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock()">Animate</button>
  </div>
  <div class="container"> -->
    <!-- Para renombrar las clases de transition completamente sería así -->
    <!-- <transition name="para" enter-active-class="para-enter-active" enter-from-class="para-enter-from" enter-to-class="para-enter-to" -->
    <!-- <transition
      name="para"
      :css="false"
      @before-enter="beforeEnterMethod"
      @before-leave="beforeLeaveMethod"
      @enter="enterMethod"
      @after-enter="afterEnterMethod"
      @after-leave="afterLeaveMethod"
      @leave="leaveMethod"
      @enter-cancelled="enterCancelledMethod"
      @leave-cancelled="leaveCancelledMethod" 
    >
      <p v-if="paragraphIsVisible">This is only sometimes visible...</p>
    </transition>
    <button @click="toggleParagraph()">Toggle paragraph</button>
  </div> -->

  <!-- Transition accepts 2 components as children when you want to transition between them. -->
  <!-- <div class="container">
    <transition name="fade-button" mode="out-in">
      <button @click="showUsers()" v-if="!usersAreVisible">Show users</button>
      <button @click="hideUsers()" v-else>Hide users</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div> -->

  <!-- ROUTER COMPONENTS MUST HAVE JUST ONE DIRECT CHILD IN ORDER TO MAKE TRANSITION WORK PROPERLY -->
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
// import UsersList from './components/UsersList.vue';

export default {
  components: {
    // UsersList
  },
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paragraphIsVisible: true,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null
    };
  },
  methods: {
    enterCancelledMethod(element) {
      console.log('enterCancelledMethod')
      console.log(element)

      // enterCancelledMethod is called when the enter transition is cancelled
      clearInterval(this.enterInterval)
    },
    leaveCancelledMethod(element) {
      console.log('leaveCancelledMethod')
      console.log(element)

      // leaveCancelledMethod is called when the leave transition is cancelled
      clearInterval(this.leaveInterval)
    },
    leaveMethod(element, done) {
      console.log('leaveMethod')
      console.log(element)

      let round = 1
      this.leaveInterval = setInterval(() => {
        element.style.opacity = 1 - round * 0.01
        round++
        if(round === 100) {
          clearInterval(this.leaveInterval)
          
          // Call done to let Vue know that the transition is done
          done()
        }
      }, 20)
    },
    afterLeaveMethod(element) {
      console.log('afterLeaveMethod')
      console.log(element)
    },
    beforeLeaveMethod(element) {
      console.log('beforeLeaveMethod')
      console.log(element)

      element.style.opacity = 1
    },
    beforeEnterMethod(element) {
      console.log('beforeEnterMethod')
      console.log(element)
      element.style.opacity = 0
    },
    enterMethod(element, done) {
      // Equivalent to active css class
      console.log('enterMethod')
      console.log(element)

      let round = 1
      this.enterInterval = setInterval(() => {
        element.style.opacity = round * 0.01
        round++
        if(round === 100) {
          clearInterval(this.enterInterval)
          
          // Call done to let Vue know that the transition is done
          done()
        }
      }, 20)
    },
    afterEnterMethod(element) {
      console.log('afterEnterMethod')
      console.log(element)
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    toggleParagraph() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
    animateBlock() {
      this.animatedBlock = !this.animatedBlock;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  animation: slide-scale 0.5s ease-out forwards;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }

  50% {
    transform: translateX(-150px) scale(1.2);
  }

  100% {
    transform: translateX(-200px) scale(1);
  }
}

/* .para-enter-from {
  opacity: 0;
  transform: translateY(-30px);
} */

/* .para-enter-to {
  opacity: 1;
  transform: translateY(0);
} */

/* .para-enter-active {
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
} */


/* .para-leave-from {
  opacity: 1;
  transform: translateY(0);
} */

/* .para-leave-to {
  opacity: 0;
  transform: translateY(-30px);
} */

/* .para-leave-active {
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  animation: slide-scale 0.5s ease-out forwards;
} */


.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

.fade-button-enter-active {
  transition: opacity 0.5s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.5s ease-in;
}


/* Animation and transition on change of route */
.route-enter-active {
  animation: slide-scale 0.4s ease-out 
}

.route-leave-active {
  animation: slide-scale 0.4s ease-in reverse
}

</style>