const primaryNav = document.getElementById('primary-navigation')
primaryNav.addEventListener('click', (event) => {
    const {target} = event
    if (!target.matches("nav a")) {
        return null
    }
    event.preventDefault()
    urlRoute(target)
})

const urlRoute = (target) => {
    window.history.pushState(null, null, target.href)
    urlLocationHandler()
}

const urlLocationHandler = async () => {

}
