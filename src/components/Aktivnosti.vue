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
              <button v-on:click="show" id = "myBtn">Pročitaj više</button>
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
                id: 1,
                img: 'https://scontent.fzag2-1.fna.fbcdn.net/v/t1.0-9/31957693_593647094325809_6428701027108651008_o.jpg?_nc_cat=111&_nc_oc=AQm4o4rlFoUYp9e8rxtpnlX77729yIYUvrsO9sTqHw1JFGjR2CgVVtb9vIETvi-TWRY&_nc_ht=scontent.fzag2-1.fna&oh=1d6d23f2729b301b59f8e88a6c862f79&oe=5E99D3AC',
                title: 'DAN OTVORENIH VRATA', 
                paragraph: 'U petak, 4. svibnja povodom blagdana Sv. Florijana i mjeseca zaštite od požara organizirali smo DAN OTVORENIH VRATA.',
                paragraphMore: 'Posjetili su nas učenici od 1 do 4 razreda područne škole u Hagnju. Najprije smo naše goste provozali našim vatrogasnim kombijem, zatim smo ih upoznali sa načinom funkcioniranja Društva i njegovim ustrojstvom. Potom je zapovjednik DVD-a g, Zlatko Slunjski upoznao prezentirao opremu s kojom raspolažemo.',
                readMore: 'Pročitaj više!' 
            },
            {
                id: 2,
                img: 'https://scontent.fzag2-1.fna.fbcdn.net/v/t1.0-9/85054519_1059231867767327_2089543860572127232_n.jpg?_nc_cat=110&_nc_oc=AQk62kNaopbTafQSu1GFy4DRYkR9yEyN2O13mEK_m2j5Wo_EsAp3T25wSw_4JLqlys8&_nc_ht=scontent.fzag2-1.fna&oh=b1d1ed5c97e7b6cdbbb757c1832f0827&oe=5EBC07B5',
                title: 'Natjecanje u Ostrni', 
                paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.',
                paragraphMore:'',
                readMore: 'Pročitaj više!' 
            },
            {
                id:3,
                img: 'https://scontent.fzag2-1.fna.fbcdn.net/v/t1.0-9/p720x720/67920375_902730476750801_3621607795121455104_o.jpg?_nc_cat=109&_nc_oc=AQmgqlI-laArMOsSLr0jshvf_ATovy1jnn3EGhnNlAJAw5Oz2sof0OHrL_pcOhQgXak&_nc_ht=scontent.fzag2-1.fna&_nc_tp=6&oh=4f82283587a2047acadd6a14cbc11a8d&oe=5EB94134',
                title: 'Godišnja skupština', 
                paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.',
                paragraphMore: '',
                readMore: 'Pročitaj više!' 
            },
            {
                id: 4,
                img: 'https://scontent.fzag2-1.fna.fbcdn.net/v/t1.0-9/s960x960/67185373_888394464851069_3383556857623740416_o.jpg?_nc_cat=103&_nc_oc=AQkJT5UNl5E2TsZGnOk3w9RtgPXrwW1hhd_zfq1bNmAxYf3wsk9ldquY7ecbY7C0ZN0&_nc_ht=scontent.fzag2-1.fna&_nc_tp=7&oh=6a1779b62eafa23956697b8307cdf354&oe=5EBAF0B3',
                title: '16. Memorijal bana Josipa Jelačića', 
                paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.',
                paragraphMore:'',
                readMore: 'Pročitaj više!' 
            },
            {
                id:5,
                img: 'https://scontent.fzag2-1.fna.fbcdn.net/v/t1.0-9/31957693_593647094325809_6428701027108651008_o.jpg?_nc_cat=111&_nc_oc=AQm4o4rlFoUYp9e8rxtpnlX77729yIYUvrsO9sTqHw1JFGjR2CgVVtb9vIETvi-TWRY&_nc_ht=scontent.fzag2-1.fna&oh=1d6d23f2729b301b59f8e88a6c862f79&oe=5E99D3AC',
                title: 'DAN OTVORENIH VRATA', 
                paragraph: 'U petak, 4. svibnja povodom blagdana Sv. Florijana i mjeseca zaštite od požara organizirali smo DAN OTVORENIH VRATA.',
                paragraphMore: 'Posjetili su nas učenici od 1 do 4 razreda područne škole u Hagnju. Najprije smo naše goste provozali našim vatrogasnim kombijem, zatim smo ih upoznali sa načinom funkcioniranja Društva i njegovim ustrojstvom. Potom je zapovjednik DVD-a g, Zlatko Slunjski upoznao prezentirao opremu s kojom raspolažemo. Zatim je uslijedio i praktični dio u kojem smo pokazali kakao se koristi S aparat i kako se gasi pjenom. Na kraju smo prezentirali rad sa C mlazom i gašenje vodom. Normalno da su sve imali prigodu isprobati naši gosti, a što im se je posebno svidjelo. Nadamo se da smo bar djelomično ispunili očekivanja naših mališana i nadamo se da je to samo početak u nizu aktivnosti koje ćemo provoditi u svrhu edukacije djece i pučanstva kada je u pitanju prutupožarna zaštita i preventiva. Zahvaljujemo učiteljicama Kristini Ivančić i Snježani Petrinjac na susretljvosti i razumjevanju prilikom realizacije ovog događaja koji će, nadamo se djeci ostati u lijepom sjećanju. tekst',
                readMore: 'Pročitaj više!' 
            }
        ]
    }),
    methods:{
      show: function readMore(){
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Pročitaj više"; 
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
