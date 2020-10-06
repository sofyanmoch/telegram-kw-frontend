<template>
    <div class="container-fluid">
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
                <b-row class="pb-4 px-3">
                    <b-col lg="10" class="search">
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
                    <b-col lg="2" class="py-2">
                        <button class="btn">
                            <img src="../assets/img/Plus.png" style="text-align:center;">
                        </button>
                    </b-col>
                </b-row>
            </b-col>
            <b-col lg="12" class="pb-3">
                <b-row>
                    <b-col lg="3">
                        <h5 class="pt-2">All</h5>
                    </b-col>
                    <b-col lg="5" class="important text-white">
                        <h5 class="pt-2">Important</h5>
                    </b-col>
                    <b-col lg="4">
                        <h5 class="pt-2">Unread</h5>
                    </b-col>
                </b-row>
            </b-col>
            </div>
            <div class="chat-list">
            <b-col lg="12" >
                    <b-row v-for="(item,index) in listUsers" :key="index">
                        <b-col lg="2" class="profile-img">
                            <img src="../assets/img/eimi.jpg">
                        </b-col>
                        <b-col lg="7">
                            <b-row class="text-left pl-4 py-2">
                                <b-col lg="12">
                                    <h6>{{item.username}}</h6>
                                </b-col>
                                <b-col lg="12" class="message">
                                    <p>I Love you :*</p>
                                </b-col>
                            </b-row>
                        </b-col>
                        <b-col lg="2" class="py-1">
                            <b-row >
                                <b-col lg="12" class="text-left">
                                    <p style="text-align:center;">15.20</p>
                                </b-col>
                                <b-col lg="12" class="text-right pl-3">
                                    <div class="notification mb-2">
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
                        <EmptyChat />
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import EmptyChat from '../components/EmptyChat'
import io from 'socket.io-client'

export default {
  components: {
    EmptyChat
  },
  data () {
    return {
      email: this.$route.query.email,
      listUsers: [],
      socket: io('http://localhost:3008')
    }
  },
  mounted () {
    this.socket.emit('get-all-users', [])
    this.socket.on('list-users', data => {
      this.listUsers = data
    })
  }
}
</script>
<style scoped>
    .select-chat{
        background: #FAFAFA;
    }
    .message{
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
        width: 200%;
        height: 70%;
    }
</style>
