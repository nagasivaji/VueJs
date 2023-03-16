import { createApp } from 'vue'
import App from './App.vue'

// Importing child Component
import WelcomeMessage from './components/Welcome.vue'


const app = createApp(App)


// Adding component to app
app.component('welcome-message', WelcomeMessage)

app.mount('#app')
