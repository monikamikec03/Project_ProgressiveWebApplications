<template>
<div class="container mb-4">
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
                    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                    <label for="inputEmail">Email adresa</label>
                    </div>

                    <div class="form-label-group">
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                    <label for="inputPassword">Lozinka</label>
                    </div>

                    <div class="custom-control custom-checkbox mb-3">
                    <input type="checkbox" class="custom-control-input" id="customCheck1">
                    <label class="custom-control-label" for="customCheck1">Zapamti lozinku</label>
                    </div>
                    <button class="btn btn-primary btn-login mb-5" type="submit">Prijava</button>
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

}
</script>