<template>
    <div>
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
            <b-col lg="12" class="py-2">
                <ListChat />
            </b-col>
            <b-col lg="12" class="py-2">
                <ListChat />
            </b-col>
            <b-col lg="12" class="py-2">
                <ListChat />
            </b-col>
            <b-col lg="12" class="py-2">
                <ListChat />
            </b-col>
            <b-col lg="12" class="py-2">
                <ListChat />
            </b-col>
            <b-col lg="12" class="py-2">
                <ListChat />
            </b-col>
            <b-col lg="12" class="py-2">
                <ListChat />
            </b-col>
            <b-col lg="12" class="py-2">
                <ListChat />
            </b-col>
            </div>
        </b-row>
    </div>
</template>
<script>
import ListChat from './ListChat'
export default {
  components: {
    ListChat
  }
}
</script>
<style scoped>
    .title{
        letter-spacing: -0.165px;
        color: #7E98DF;
    }
    .search{
        background: #FAFAFA;
        border-radius: 15px;
    }
    .important{
        background: #7E98DF;
        border-radius: 20px;
        height: 40px;
    }
    .chat-header{
        position: relative;
    }
</style>
