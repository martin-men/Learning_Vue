<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="toggleDetails()">{{ detailsAreVisible ? 'Hide' : 'Show' }} details</button>
    <button @click="toggleFavorite()">Toggle favorite</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
    <button @click="deleteFriend()">Delete</button>
  </li>
</template>

<script>
export default {
  // Vue implements the concept of unidirectional data, which means that props passed from parent to a child component should not be modified by the child component.

  // Simplest way of defining props
  // props: [
  //   'name',
  //   'phoneNumber',
  //   'emailAddress'
  // ],

  // Defining props with validation
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: false,
      default: 'no email',
      validator: (value) => {
        // Here we can add custom validation logic to the prop
        return value.includes('@')
      }
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: {
    'toggle-favorite': (friendId) => {
      if (typeof friendId === 'string') {
        return true
      }
      return false
    },
    'delete-friend': (friendId) => {
      if (typeof friendId === 'string') {
        return true
      }
      return false
    }
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id)
    },
    deleteFriend() {
      this.$emit('delete-friend', this.id)
    }
  }
  };
</script>
