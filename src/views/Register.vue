<template>
    <div class="body container-fluid">
        <div class="register">
            <b-row>
                <b-col lg="12" class="form-register">
                    <b-row class="px-4">
                        <b-col lg="1">
                            <button class="btn pt-5">
                                <img src="../assets/img/back.png" alt="">
                            </button>
                        </b-col>
                        <b-col lg="11" class="mt-5 title text-center">
                            <h4>Register</h4>
                        </b-col>
                        <b-col lg="12" class="text-left pt-4">
                            <p>Let’s create your account!</p>
                        </b-col>
                        <b-col lg="12">
                            <form>
                                 <div class="form-group">
                                    <p class="text-left input-register">Name</p>
                                    <input type="text" class="form-control" id="exampleInputPassword1">
                                </div>
                                <div class="form-group">
                                    <p class="text-left input-register">Email</p>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                </div>
                                <div class="form-group">
                                    <p class="text-left input-register">Password</p>
                                    <input type="password" class="form-control" id="exampleInputPassword1">
                                </div>
                                <button type="submit" class="mb-4 py-2 btn button-register text-white">Register</button>
                            </form>
                        </b-col>
                        <b-col lg="12">
                            <b-row class="py-3">
                                <b-col lg="3">
                                    <img src="../assets/img/Line 4.png" alt="">
                                </b-col>
                                <b-col lg="5" class="text-center mx-2">Register With</b-col>
                                <b-col lg="3">
                                    <img src="../assets/img/Line 4.png" alt="">
                                </b-col>
                            </b-row>
                        </b-col>
                        <b-col lg="12" class="py-4">
                            <button type="button" class="btn button-login-google btn-outline-secondary">
                                <img src="../assets/img/Group 5792.png" alt="">
                            </button>
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
    .form-register{
        background: white;
        background: #FFFFFF;
box-shadow: 0px 20px 20px rgba(126, 152, 223, 0.05);
border-radius: 30px;
    }
    .input-register{
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
    .register{
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
</style>
