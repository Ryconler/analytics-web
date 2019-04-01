export default {
  setUser (state, user) {
    state.user = user
    state.isLogin = true
  },
  clearUser (state) {
    state.user = null
    state.isLogin = false
    state.websites = []
    state.currentWebsite = null
    localStorage.setItem('token', '')
  },
  setWebsites (state, websites) {
    state.websites = websites
  },
  setCurrentWebsite (state, website) {
    state.currentWebsite = website
  }
}
