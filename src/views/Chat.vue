<template>
    <div class="container-fluid">
        <b-row>
            <b-col lg="12">
                <b-row>
                    <b-col lg="3">
                        <Chat />
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
import Chat from '../components/Chat'
export default {
  components: {
    EmptyChat,
    Chat
  }
}
</script>
<style scoped>
    .select-chat{
        background: #FAFAFA;
    }
</style>
