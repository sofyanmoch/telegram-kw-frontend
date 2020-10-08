<template>
    <div class="container-fluid pl-5">
        <b-row>
            <b-col lg="12">
                <b-row>
                    <b-col lg="3">
                        <b-row>
            <div class="chat-header">
            <b-col lg="12">
                <b-row class="py-4 px-3">
                    <b-col lg="10" cols="10">
                        <h4 class="text-left title">Telegram</h4>
                    </b-col>
                    <b-col lg="2" cols="2">
                        <button class="btn">
                            <img src="../assets/img/Menu.png" class="text-left">
                        </button>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col lg="3" cols="3">
                        <div class="user-login">
                            <img src="../assets/img/eimi.jpg" alt="">
                        </div>
                    </b-col>
                    <b-col lg="5" cols="6" class="text-left py-2">
                        <p>{{username}}</p>
                    </b-col>
                    <b-col lg="4" cols="3">
                        <button class="btn bg-danger tombol text-white mb-0" @click="logout()">
                           <p style="font-size:14px; text-align:center;">OUT</p>
                        </button>
                    </b-col>
                </b-row>
                <b-row class="pb-4 px-3">
                    <b-col lg="10" cols="10" class="search">
                        <b-row class="py-2">
                            <div class="input-group px-3">
                                <div class="input-group-prepend">
                                    <button class="btn btn-outline-secondary" type="button" id="button-addon1">
                                        <img src="../assets/img/Search.png" alt="">
                                    </button>
                                </div>
                                <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
                                </div>
                        </b-row>
                    </b-col>
                    <b-col lg="2" cols="2" class="py-2">
                        <button class="btn">
                            <img src="../assets/img/Plus.png" style="text-align:center;">
                        </button>
                    </b-col>
                </b-row>
            </b-col>
            <b-col lg="12" class="pb-3">
                <b-row>
                    <b-col lg="3" cols="3">
                        <h5 class="pt-2">All</h5>
                    </b-col>
                    <b-col lg="5" cols="5" class="important text-white">
                        <h5 class="pt-2">Important</h5>
                    </b-col>
                    <b-col lg="4" cols="4">
                        <h5 class="pt-2">Unread</h5>
                    </b-col>
                </b-row>
            </b-col>
            </div>
            <div class="chat-list">
            <b-col lg="12" v-for="(item,index) in listUsers" :key="index">
                    <b-row v-if="username !== item.username">
                        <b-col lg="2" cols="2" class="profile-img">
                            <img src="../assets/img/eimi.jpg">
                        </b-col>
                        <b-col lg="7" cols="7" @click="selectUser(item.username)" class="btn">
                            <b-row class="text-left pl-4 pt-1">
                                <b-col lg="12" cols="12">
                                    <h6>{{item.username}}</h6>
                                </b-col>
                                <b-col lg="12" cols="12" class="message-look">
                                    <p>Yang??</p>
                                </b-col>
                            </b-row>
                        </b-col>
                        <b-col lg="2" cols="2">
                            <b-row >
                                <b-col lg="12" class="text-left">
                                    <p style="text-align:center;">15.20</p>
                                </b-col>
                                <b-col lg="12" class="text-right pl-3">
                                    <div class="notification">
                                        <p class="text-white" style="text-align:center;">2</p>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-row>
                </b-col>
            </div>
        </b-row>
                    </b-col>
                    <b-col lg="9" class="select-chat">
                        <div v-if="userReceiver === null">
                            <EmptyChat />
                        </div>
                        <div v-else>
                            <b-row>
                            <b-col lg="1" cols="1" class="my-3">
                                <div class="profile-chat">
                                    <img src="../assets/img/eimi.jpg">
                                </div>
                            </b-col>
                            <b-col lg="2" class="mt-4">
                                <b-row class="text-left">
                                    <!-- <div  v-if="userReceiver === null"> -->
                                    <!-- <b-col lg="12" class="ml-3"> -->
                                        <!-- <h5>Select User</h5> -->
                                    <!-- </b-col> -->
                                    <!-- </div> -->
                                    <!-- <div  v-else> -->
                                    <b-col lg="12">
                                        <h5>{{userReceiver}}</h5>
                                    </b-col>
                                    <!-- </div> -->
                                    <b-col lg="12" class="online text-left">
                                      <p>Online</p>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col lg="12">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="message" >
                                            <!-- nanti untuk pesan -->

                                            <div v-if="userReceiver !== null" >
                                                <div class="text-left" v-for="(item,index) in historyMessages" :key="index">
                                                <div v-if="item.sender !== username">
                                                   <p class="text-left mr-auto chat-from text-white my-2">{{item.message}}</p>
                                                </div>

                                                <div v-else>
                                                    <div>
                                                    <p class="text-right chat-to ml-auto text-white">{{item.message}}</p>
                                                    </div>
                                                </div>
                                            </div>
                                                <div class="text-right" v-for="(item,index) in privateMessages" :key="index">
                                                    <!-- {{item.message}} -->
                                                <div v-if="item.sender !== username" class="mt-4">
                                                   <p class="text-left mr-auto chat-from text-white my-2">{{item.message}}</p>
                                                </div>

                                                <div v-else>
                                                    <p class="text-right chat-to ml-auto text-white">{{item.message}}</p>
                                                </div>

                                            </div>
                                            </div>
                                            <div v-else>
                                                 <!-- <div v-for="(item,index) in historyMessage" :key="index">
                                                    {{item.message}} -->
                                            <!-- </div> -->

                                            <div v-for="(item,index) in listMessages" :key="index">
                                                    {{item.message}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-footer">
                                        <form @submit.prevent="sendMessage">
                                        <div class="input-group mb-3">
                                            <input v-model="message" type="text" class="form-control" placeholder="Message ..." aria-label="Recipient's username" aria-describedby="button-addon2">
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary" type="button">
                                                    <img src="../assets/img/Plus.png" alt="">
                                                </button>
                                                <button class="btn btn-outline-secondary" type="button">
                                                    <img src="../assets/img/Vector.png" alt="">
                                                </button>
                                                <button class="btn btn-outline-secondary" type="button">
                                                    <img src="../assets/img/Group 181.png" alt="">
                                                </button>
                                            </div>
                                            </div>
                                            </form>
                                    </div>
                                </div>
                            </b-col>
                            </b-row>
                            </div>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import EmptyChat from '../components/EmptyChat'
import { mapActions } from 'vuex'
import io from 'socket.io-client'

export default {
  components: {
    EmptyChat
  },
  data () {
    return {
      username: localStorage.getItem('username'),
      listUsers: [],
      listMessages: [],
      privateMessages: [],
      historyMessages: [],
      message: '',
      userReceiver: null,
      socket: io('http://localhost:3008')
    }
  },
  methods: {
    ...mapActions({
      onLogout: 'auth/logout'
    }),
    logout () {
      this.onLogout().then((response) => {
        window.location = '/login'
      })
    },
    selectUser (username) {
      this.privateMessages = []
      this.listMessages = []
      this.userReceiver = username
      this.getPrivateMessages()
      this.socket.emit('get-history-message', {
        sender: this.username,
        receiver: username
      })
      this.getHistoryMessages()
    },
    getPrivateMessages () {
      const privateMessage = this.listMessages.filter((item) => item.sender === this.userReceiver || item.sender === this.username)
      this.privateMessages = privateMessage
    },
    getHistoryMessages () {
      this.socket.on('history-list-messages', (data) => {
        this.historyMessages = data
      })
    },
    sendMessage () {
      const msg = `${this.message}`
      this.listMessages = [...this.listMessages, {
        sender: this.username,
        message: msg,
        receiver: this.userReceiver
      }]
      this.getPrivateMessages()
      this.socket.emit('send-message', {
        sender: this.username,
        message: this.message,
        receiver: this.userReceiver
      })
      this.message = ''
    }
  },
  mounted () {
    this.socket.emit('get-all-users', [])
    this.socket.on('list-users', data => {
      this.listUsers = data
    })
    this.socket.emit('join-room', {
      user: this.username
    })
    this.socket.on('list-messages', message => {
      this.listMessages = [...this.listMessages, message]
      if (this.userReceiver !== null) {
        this.getPrivateMessages()
      }
    })
    this.getHistoryMessages()
  }
}
</script>
<style scoped>
    .important{
        background: #7E98DF;
        border-radius: 20px;
    }
    .user-login img{
        width: 40px;
        height: 40px;
        border-radius: 30px;
    }
    .select-chat{
        background: #FAFAFA;
    }
    .message-look{
        letter-spacing: -0.165px;
        color: #7E98DF;
    }
    .notification{
        width: 20px;
        height: 20px;
        background: #7E98DF;
border-radius: 30px;
    }
    .profile-img img{
        width: 64px;
        height: 64px;
        border-radius: 10px;
    }
    .profile-chat img{
        width: 64px;
        height: 64px;
        border-radius: 15px;
    }
    .online p{
        letter-spacing: -0.165px;
        color: #7E98DF;
    }
    .title{
        color: #7E98DF;
    }
    .search {
        background: #FAFAFA;
        border-radius: 15px;
        outline: none;
    }
    .message{
    height: 60vh;
    overflow: auto;
  }
  .chat-message{
      position: fixed;
  }
  .chat-from{
      width: fit-content;
  background: #7E98DF;
  padding: 15px 20px;
  margin-left: 10px;
  border-radius: 10px 35px 35px 35px;
  }
  .chat-to{
      width: fit-content;
  background:#e84466;
  padding: 15px 20px;
  margin-right: 10px;
  border-radius: 35px 10px 35px 35px;
  }
  .chat-to p{
      color: white;
  }
  .tombol{
      width: 50px;
      height: 30px;
  }
</style>
