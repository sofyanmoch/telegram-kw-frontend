import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import auth from './auth'
// import swal from 'sweetalert2'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth
  }
})
