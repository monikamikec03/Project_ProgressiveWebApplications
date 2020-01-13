<style scoped>
#more{
  display:none;
}
</style>

<template>
  <div class="container">
    <header class="jumbotron my-4">
      <h1 class="display-5">Aktivnosti i događanja</h1>
      <p class="lead">Opis</p>
    </header>

    <!-- Page Features -->
    <div class="row text-center">
      <div class="col-lg-3 col-md-6 mb-4 text-dark {
" v-for="(obj, key) in novostiJSON" :key="key">
        <div class="card h-100">
          <img class="card-img-top" alt="" :src="obj.img">
          <div class="card-body">
            <h4>{{ obj.caption }}</h4>
            <p class="card-text">{{ obj.paragraph }}<span id = "dots">...</span><span id = "more">{{ obj.paragraphMore }}</span></p>
          </div>
          <div class="card-footer">
            <button onclick="readMore()" id = "myBtn">Pročitaj više</button>
          </div>
        </div>
      </div>
    </div>
    <!-- /.row -->

  </div>
  <!-- /.container -->
</template>

<script>

export default{
  
    data: () => ({
      
        novostiJSON: [
            {
              
                img: '/something/random/img.jpg',
                title: 'Natjecanje u Ostrni', 
                paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.',
                paragraphMore:'',
                readMore: 'Pročitaj više!' 
            },
            {
                img: '/something/random/img.jpg',
                title: 'Godišnja skupština', 
                paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.',
                paragraphMore: '',
                readMore: 'Pročitaj više!' 
            },
            {
                img: '/something/random/img.jpg',
                title: '16. Memorijal bana Josipa Jelačića', 
                paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.',
                paragraphMore:'',
                readMore: 'Pročitaj više!' 
            },
            {
                img: 'https://scontent.fzag2-1.fna.fbcdn.net/v/t1.0-9/31957693_593647094325809_6428701027108651008_o.jpg?_nc_cat=111&_nc_oc=AQm4o4rlFoUYp9e8rxtpnlX77729yIYUvrsO9sTqHw1JFGjR2CgVVtb9vIETvi-TWRY&_nc_ht=scontent.fzag2-1.fna&oh=1d6d23f2729b301b59f8e88a6c862f79&oe=5E99D3AC',
                title: 'DAN OTVORENIH VRATA', 
                paragraph: 'U petak, 4. svibnja povodom blagdana Sv. Florijana i mjeseca zaštite od požara organizirali smo DAN OTVORENIH VRATA.',
                paragraphMore: 'Posjetili su nas učenici od 1 do 4 razreda područne škole u Hagnju. Najprije smo naše goste provozali našim vatrogasnim kombijem, zatim smo ih upoznali sa načinom funkcioniranja Društva i njegovim ustrojstvom. Potom je zapovjednik DVD-a g, Zlatko Slunjski upoznao prezentirao opremu s kojom raspolažemo. Zatim je uslijedio i praktični dio u kojem smo pokazali kakao se koristi S aparat i kako se gasi pjenom. Na kraju smo prezentirali rad sa C mlazom i gašenje vodom. Normalno da su sve imali prigodu isprobati naši gosti, a što im se je posebno svidjelo. Nadamo se da smo bar djelomično ispunili očekivanja naših mališana i nadamo se da je to samo početak u nizu aktivnosti koje ćemo provoditi u svrhu edukacije djece i pučanstva kada je u pitanju prutupožarna zaštita i preventiva. Zahvaljujemo učiteljicama Kristini Ivančić i Snježani Petrinjac na susretljvosti i razumjevanju prilikom realizacije ovog događaja koji će, nadamo se djeci ostati u lijepom sjećanju. tekst',
                readMore: 'Pročitaj više!' 
            }
        ]
    }),
    methods:{
      show:function readMore(){
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more"; 
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less"; 
          moreText.style.display = "inline";
        }
      }
    }

}


</script>
  function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}