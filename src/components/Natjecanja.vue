<template>
  <div class="container">
    <header class="jumbotron my-4">
      <h1 class="display-5">Natjecanja</h1>
    </header>

    <div class="row text-center">
      <div class="col-lg-3 col-md-6 mb-4" v-for="(obj, key) in novostiJSON" :key="key">
        <div class="card h-100">
          <img class="card-img-top" src="" alt=""/>
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
                img: 'ZA_Hrebinec.jpg',
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