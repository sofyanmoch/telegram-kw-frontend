import axios from 'axios'

const state = () => {
  return {
    token: localStorage.getItem('token') || null
  }
}

const getters = {
  isLogin (state) {
    if (state.token !== null) {
      return true
    } else {
      return false
    }
  }
}

const actions = {
  register (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:3008/api/users/register', payload)
        .then((result) => {
          resolve(result.data.message)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  login (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:3008/api/users/login', payload).then((response) => {
        localStorage.setItem('token', response.data.data.token)
        // localStorage.setItem('username', response.data.data.username)
        resolve(response.data.message)
      // eslint-disable-next-line handle-callback-err
      }).catch((err) => {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject(err)
      })
    })
  },
  logout (context) {
    return new Promise((resolve) => {
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      resolve('Logout success')
    })
  }
}

export default {
  namespaced: true,
  actions,
  state,
  getters
}
