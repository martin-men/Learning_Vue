const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
      watchedProp: 'un rinoceronte',
      watchedPropValue: ''
    };
  },
  // WATCHERS
  // Métodos que tienen por nombre el mismo nombre que una de las propiedades de datos
  // Cuando sea que la propiedad relacionada a un watcher cambia, entonces el watcher se ejecuta
  watch: {
    // value es último valor adquirido por la propiedad que se está observando (se pasa automáticamente)
    // en caso de pasar un segundo parámetro, este sería el valor anterior
    watchedProp(value, oldValue) {
      this.watchedPropValue = 'Un loro cojo ' + value + ' pero antes era ' + oldValue
    },

    counter(value) {
      if (value > 50) {
        this.counter = 0
      }
    }
  },

  // COMPUTED PROPERTIES
  computed: {
    // No se nombra en camelCase por que es una propiedad computada que se usará como dato
    fullname() {
      return this.name === '' ? '' : this.name + ' ' + 'Mendieta'
    }
  },
  methods: {
    outputFullName() {
      return this.name === '' ? '' : this.name + ' ' + 'Mendieta'
    },
    confirmInput() {
      this.confirmedName = this.name
      this.watchedProp = 'HE CAMBIADO ' + this.name
    },
    setName(event) {
      this.name = event.target.value
    },
    add(num) {
      this.counter = this.counter + num
    },
    reduce(num) {
      this.counter = this.counter - num
    },
    submitForm(event) {
      alert('Submitted!')
    },
    resetInput() {
      this.name = ''
    }
  }
});

app.mount('#events');
