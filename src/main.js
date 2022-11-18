import './dist/style.css'
// import App from './App.svelte'
// const app = new App({
//   target: document.getElementById('app')
// })

// import todoapp from './svelte_projects/todoapp.svelte'

// const app = new todoapp({
//   target: document.getElementById('app')
// })

import notification from './App.svelte'

const app = new notification({
  target: document.getElementById('app')
})
export default app