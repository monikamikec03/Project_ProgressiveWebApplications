<template>
<div class="container mb-4" id = "login">
    <header class="jumbotron my-4">
            <h1 class="display-5">Prijava</h1>
            <p class="">Samo za članove DVD-a Haganj!</p>
    </header>
    <div class="row no-gutter">
        <div class="col-md-12 col-lg-12">
        <div class="login d-flex align-items-center">
            <div class="container">
            <div class="row">
                <div class="col-md-9 col-lg-9 mx-auto">
                <form>
                    <div class="form-label-group">
                    <input type="text" id="inputEmail" name = "username" class="form-control" placeholder="Email address" v-model="input.username">
                    <label for="inputEmail">Email adresa</label>
                    </div>

                    <div class="form-label-group">
                    <input type="password" id="inputPassword" name = "password" class="form-control" placeholder="Password" v-model="input.password">
                    <label for="inputPassword">Lozinka</label>
                    </div>

                    <div class="custom-control custom-checkbox mb-3">
                    <input type="checkbox" class="custom-control-input" id="customCheck1">
                    <label class="custom-control-label" for="customCheck1">Zapamti lozinku</label>
                    </div>
                    <button type = "button" class="btn btn-primary btn-login mb-5" v-on:click="login()">Prijava</button>
                    <div class="text-center">
                    <a class="small" href="#">Zaboravio si lozinku?</a></div>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "secure" });
                    } else {
                        //console.log("The username and / or password is incorrect");
                    }
                } else {
                    //console.log("A username and password must be present");
                }
            }
        }
    }
</script>
