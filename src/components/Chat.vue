<template>
    <div>
        <b-row>
            <b-col lg="12">
                <b-row class="py-5 px-3">
                    <b-col lg="10" cols="10">
                        <h4 class="text-left title">Telegram</h4>
                    </b-col>
                    <b-col lg="2" cols="2">
                        <button>
                            <img src="../assets/img/Menu.png" class="text-left">
                        </button>
                    </b-col>
                </b-row>
                <b-row class="pb-4 px-3">
                    <b-col lg="10" class="search">
                        <b-row class="py-2">
                            <b-col lg="1" class="text-center">
                                <img src="../assets/img/Search.png" alt="">
                            </b-col>
                            <b-col lg="10">
                                <input type="text" class="search">
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col lg="2" class="py-2">
                        <!-- <button> -->
                            <img src="../assets/img/Plus.png" style="text-align:center;">
                        <!-- </button> -->
                    </b-col>
                </b-row>
            </b-col>
            <b-col lg="12" class="pb-3">
                <b-row>
                    <b-col lg="3">
                        <h5>All</h5>
                    </b-col>
                    <b-col lg="5">
                        <h5>Important</h5>
                    </b-col>
                    <b-col lg="4">
                        <h5>Unread</h5>
                    </b-col>
                </b-row>
            </b-col>
            <b-col lg="12" class="py-3">
                <ListChat />
            </b-col>
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
</style>
