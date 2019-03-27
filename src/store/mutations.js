export default {
  setUser (state, {user}) {
    state.user = user
    state.isLogin = true
  },
  clearUser (state) {
    state.user = null
    state.isLogin = false
    localStorage.setItem('token', '')
  }
}
