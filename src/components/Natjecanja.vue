<template>
  <div class="container">
    <header class="jumbotron my-4">
      <h1 class="display-5">Natjecanja</h1>
    </header>

    <div class="row text-center">
      <div class="col-lg-3 col-md-6 mb-4" v-for="(obj, key) in novostiJSON" :key="key">
        <div class="card h-100">
          <img class="card-img-top" src="http://placehold.it/500x325" alt="">
          <div class="card-body">
            <h4>{{ obj.caption }}</h4>
            <p class="card-text">{{ obj.paragraph }}</p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary">{{ obj.readMore }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
    data: () => ({
        novostiJSON: [
            {
                img: '/something/random/img.jpg',
                title: 'Natjecanje u Ostrni', 
                paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.',
                readMore: 'Pročitaj više!' 
            },
            {
                img: '/something/random/img.jpg',
                title: 'Godišnja skupština', 
                paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.',
                readMore: 'Pročitaj više!' 
            },
            {
                img: '/something/random/img.jpg',
                title: '16. Memorijal bana Josipa Jelačića', 
                paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.',
                readMore: 'Pročitaj više!' 
            },
            {
                img: '/something/random/img.jpg',
                title: 'Dva nova vatrogasca s posebnim ovlastima', 
                paragraph: 'Neki tekst',
                readMore: 'Pročitaj više!' 
            },
            {
                img: '/something/random/img.jpg',
                title: 'Nanovo dodani članak', 
                paragraph: 'Ovo sam sama naknadno unijela',
                readMore: 'Pročitaj više!' 
            }
        ]
    })

}
</script>

<style lang="css">

</style>