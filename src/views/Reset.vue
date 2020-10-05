<template>
    <div class="body container-fluid">
        <div class="forgot-password">
            <b-row>
                <b-col lg="12" class="form-reset">
                    <b-row class="py-5 px-3">
                        <b-col lg="1" cols="1">
                            <router-link to="/login">
                            <button class="btn">
                                <img src="../assets/img/back.png" alt="">
                            </button>
                            </router-link>
                        </b-col>
                        <b-col lg="11" cols="11" class="pt-1 title text-center">
                            <h4>Forgot Password</h4>
                        </b-col>
                        <b-col lg="12" class="text-left black pt-4">
                            <p style="color:black;">You’ll get messages soon on your e-mail </p>
                        </b-col>
                        <b-col lg="12">
                            <form>
                                <div class="form-group">
                                    <p class="text-left input-reset">Email</p>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                </div>
                                <button type="submit" class="mb-4 py-2 btn button-register text-white">Send</button>
                            </form>
                        </b-col>
                    </b-row>
                    </b-col>
                </b-row>
            </div>
    </div>
</template>
<style scoped>
    .body{
        background: #E5E5E5;
        width: 100%;
        height: 100%;
    }
    .form-reset{
        background: white;
        background: #FFFFFF;
box-shadow: 0px 20px 20px rgba(126, 152, 223, 0.05);
border-radius: 30px;
    }
    .input-reset{
        color: #848484;

opacity: 0.75;
    }
    .button-register{
        background: #7E98DF;
        border-radius: 70px;
        width: 100%;
    }
    .button-login-google{
        border-radius: 70px;
        width: 100%;
    }
    .forgot-password{
        padding-top: 10%;
        padding-bottom: 10%;
        padding-right: 35%;
        padding-left: 35%;
    }
    .forgot-password{
        color: #7E98DF;
        text-align: right;
    }
    .title{
        letter-spacing: -0.165px;
        color: #7E98DF;
    }
    @media only screen and (max-width: 700px) {
        .forgot-password{
            padding: 0px;
        }
        .form-reset{
            background: white;
            background: #FFFFFF;
        }
    }
</style>
