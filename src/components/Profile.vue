<template>
  <div>
    <b-sidebar id="sidebar-profile" width="360px" shadow>
      <b-row>
        <b-col lg="12">
          <b-row>
            <b-col lg="9" class="pl-5 text-left text-violet">
              <h5>Settings</h5>
            </b-col>
            <b-col lg="1" class="pr-5 text-right">
              <button
                class="btn"
                v-b-modal.modal-edit
                @click="editProfile(detailuser.id)"
              >
                Edit
              </button>
            </b-col>
            <b-col lg="12">
              <div
                class="img-profile"
                :style="`background-image: url(http://localhost:3008/${detailuser.image});`"
              >
                <span></span>
              </div>
            </b-col>
            <b-col lg="12" class="mt-3">
              <div
                v-if="
                  detailuser.fullname === null || detailuser.fullname === ''
                "
              >
                <h4>Please set Profile first</h4>
              </div>
              <div v-else>
                <h4>{{ detailuser.fullname }}</h4>
              </div>
              <p style="color: green">Online</p>
            </b-col>
            <b-col lg="12">
              <h4 class="text-left ml-4 mb-4"><strong>Account</strong></h4>
            </b-col>
            <b-col lg="12" class="text-left ml-4">
              <div v-if="detailuser.phone === null || detailuser.phone === ''">
                <h4>Add phone number</h4>
              </div>
              <div v-else>
                <h4>{{ detailuser.phone }}</h4>
              </div>
              <p>Phone Number</p>
            </b-col>
            <b-col lg="12" class="text-left ml-4">
              <h6>
                <strong>@{{ detailuser.username }}</strong>
              </h6>
              <p>Username</p>
            </b-col>
            <b-col lg="12" class="text-left ml-4">
              <div v-if="detailuser.bio === null || detailuser.bio === ''">
                <h4>Add Bio</h4>
              </div>
              <div v-else>
                <h6>
                  <strong>{{ detailuser.bio }}</strong>
                </h6>
              </div>
              <p>Bio</p>
            </b-col>
            <b-col lg="12">
              <h4 class="text-left ml-4 my-4"><strong>Settings</strong></h4>
            </b-col>
            <b-col lg="12" class="text-left ml-4">
              <p class="setting">
                <b-icon-bell class="mr-2"></b-icon-bell> Notification and Sounds
              </p>
              <p class="setting">
                <b-icon-lock class="mr-2"></b-icon-lock> Private and Security
              </p>
              <p class="setting">
                <b-icon-graph-up class="mr-2"></b-icon-graph-up> Data and
                Storage
              </p>
              <p class="setting">
                <b-icon-chat-square-text class="mr-2"></b-icon-chat-square-text>
                Chat Setting
              </p>
              <p class="setting">
                <b-icon-laptop class="mr-2"></b-icon-laptop> Devices
              </p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-sidebar>

    <div>
      <b-modal id="modal-edit" hide-footer sm hide-header centered>
        <b-col lg="12">
          <b-row>
          <b-col lg="12">
            <h4 class="my-4">Edit Profile</h4>
          </b-col>
          <form>
            <b-col lg="12">
              <div class="form-group">
                          <label>Fullname</label>
                          <input
                          v-model="updateUser.fullname"
                            type="text"
                            class="form-control"
                            placeholder="Masukan nama lengkap"
                  />
             </div>
            </b-col>
             <b-col lg="12">
               <b-row>
                 <b-col lg="6">
                   <div class="form-group">
                          <label>Username</label>
                          <input
                          v-model="updateUser.fullname"
                            type="text"
                            class="form-control"
                            placeholder="Masukan nama lengkap"
                  />
             </div>
                 </b-col>
                 <b-col lg="6">
                   <div class="form-group">
                          <label>Phone Number</label>
                          <input
                          v-model="updateUser.phone"
                            type="text"
                            class="form-control"
                            placeholder="Masukan nama lengkap"
                  />
             </div>
                 </b-col>
               </b-row>
             </b-col>
             <b-col lg="12">
               <div class="form-group">
                          <label>Bio</label>
                          <textarea
                          v-model="updateUser.bio"
                            class="form-control"
                            rows="5"
                            placeholder="Bio anda"
                          ></textarea>
                        </div>
             </b-col>
          </form>
          </b-row>
        </b-col>
      </b-modal>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      detailuser: JSON.parse(localStorage.getItem('detail')),
      updateUser: {
        fullname: null,
        phone: null,
        bio: null
        // image:
      }
    }
  },
  methods: {
    // editProfile (id) {
    //   alert(id)
    // }
  }
}
</script>

<style scoped>
.img-profile {
  width: 120px;
  height: 120px;
  margin-top: 20px;
  margin-left: 120px;
  background-size: cover;
  border-radius: 70px;
}
</style>
