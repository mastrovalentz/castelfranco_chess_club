const pageTitleBase = 'Scacchi Castelfranco'

// TODO improve with base route class and wrapper
export const ROUTES = {
  404: {
    template: 'src/pages/404.html',
    title: `404 | ${pageTitleBase}`,
    description: 'Page not found.'
  },
  '/': {
    template: 'src/pages/home.html',
    title: `Home | ${pageTitleBase}`,
    description: 'Club di Scacchi Castelfranco Veneto: Home Page'
  },
  '/about': {
    template: 'src/pages/about.html',
    title: `Chi siamo | ${pageTitleBase}`,
    description: 'Club di Scacchi Castelfranco Veneto: Chi siamo'
  },
  '/contacts': {
    template: 'src/pages/contacts.html',
    title: `Contattaci | ${pageTitleBase}`,
    description: 'Club di Scacchi Castelfranco Veneto: Contattaci'
  },
  '/events': {
    template: 'src/pages/events.html',
    title: `Eventi | ${pageTitleBase}`,
    description: 'Club di Scacchi Castelfranco Veneto: Eventi'
  }
}
