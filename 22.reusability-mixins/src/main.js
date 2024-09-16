import { createApp } from 'vue';

import App from './App.vue';
import loggerMixin from './mixins/logger.js';

const app = createApp(App)

// Register a GLOBAL mixin
app.mixin(loggerMixin)

app.mount('#app');
