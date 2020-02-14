<template>
  <div class="container mb-4">
        <header class="jumbotron my-4">
            <h1 class="display-5">Kontaktirajte nas! </h1>
        </header>
            <!--Section: Contact v.2-->
    <p class="text-center w-responsive mx-auto mb-3">Ukoliko imate ikakvih pitanja, kontaktirajte nas direktno. Odgovorit ćemo ubrzo.</p>

    <div class="row" id = "root">
        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                <div class="row">
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input v-model = "name" :class = "[name.length < 2 ? 'red' : 'green']" type="text" id="name" name="name" class="form-control">
                            <label for="name" class="">Vaše ime</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input v-model = "email" :class = "[email.length < 2 ? 'red' : 'green']" type="text" id="email" name="email" class="form-control">
                            <label for="email" class="">Email adresa</label>
                        </div>
                    </div>    
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control">
                            <label for="subject" class="">Predmet</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form">
                            <textarea v-model = "textarea" :class = "[textarea.length < 10 ? 'red' : 'green']" type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Vaša poruka</label>
                        </div>
                    </div>
                </div>
            </form>
            <div class="text-center text-md-left">
                <button class="btn btn-primary" v-on:click="greet" :disabled="email.length < 2 || name.length < 2 || textarea.length < 10">Pošalji</button>
            </div>
            <div class="status"></div>
        </div>
        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>DVD Haganj, VZO Gradec</p>
                </li>
                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+38591234567</p>
                </li>
                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>dvdhaganj@gmail.com</p>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'root',
    data(){
        return{
            email: '',
            name: '',
            textarea: ''
        }

    },
    methods:{
        greet:function(event){
            
            

            if(event){
                alert("Vaša poruka je uspješno poslana");
               this.$router.push("/");          
                         
            }
        }
    }
}
</script>

<style scoped>
.red{
    border:1px solid red;
}
.green{
    border:1px solid green;
}

</style>

