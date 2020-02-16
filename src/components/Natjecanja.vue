<template>
  <div class="container">
    <header class="jumbotron my-4">
      <h1 class="display-5">Natjecanja</h1>
    </header>

    <div class="row text-center">
      <div class="col-lg-3 col-md-6 mb-4 text-dark" v-for="(obj, key) in novostiJSON" :key="key">
        <div class="card h-100">
          <img class="card-img-top" :src="obj.img">
          <div class="card-body">
            <h4>{{ obj.title }}</h4>
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
                img: 'https://scontent.fzag2-1.fna.fbcdn.net/v/t1.0-9/70284072_925074894516359_1125879943834632192_n.jpg?_nc_cat=103&_nc_oc=AQkcZkfgZqDIX41Xdr9lHa1ZnRoE2lfB4nURILJt-7UkVzYnvOQAKjMU86-BccUSLMM&_nc_ht=scontent.fzag2-1.fna&oh=d177642e5922b75c1403b577b5bcd463&oe=5ECB4AA1',
                title: 'Error', 
                paragraph: 'Ne uzima sliku iz foldera. Pogledati putanju jer mislim da ona nije dobra',
                readMore: 'Pročitaj opis!' 
            },
                        {
                img: 'https://www.dnevno.hr/wp-content/uploads/2019/01/PXL_021018_22191831vatrogasci-660x450.jpg',
                title: 'Slika s interneta', 
                paragraph: 'Pronašla sam sliku na internetu i kopirala njen url da vidim kako to učitava... Radi!',
                readMore: 'Pročitaj više!' 
            }
        ]
    })

}
</script>

<style lang="css">

</style>