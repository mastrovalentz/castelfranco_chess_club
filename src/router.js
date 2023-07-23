import { ROUTES } from './routes.js'

const primaryNav = document.getElementById('primary-navigation')
primaryNav.addEventListener('click', (event) => {
  const { target } = event
  if (!target.matches('nav a')) {
    return null
  }
  event.preventDefault()
  urlRoute(target)
})

const urlRoute = (target) => {
  window.history.pushState(null, null, target.href)
  urlLocationHandler()
}

// TODO handle fetch error with 404 page
const urlLocationHandler = async () => {
  let location = window.location.pathname
  if (location.length === 0) {
    location = '/'
  }

  // TODO: improve on this with default
  const route = ROUTES[location] || ROUTES[404]
  // TODO: improve on this with reoute class ??
  document.getElementById('page-content').innerHTML = await fetch(
    route.template
  ).then((template) => template.text())
  document.title = route.title
  document
    .querySelector('meta[name="description"]')
    .setAttribute('content', route.description)
}

window.onpopstate = urlLocationHandler
window.route = urlRoute

// TODO create wrapper to persist promise and handle errors
urlLocationHandler()
