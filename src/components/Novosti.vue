<template>
  <!-- Page Content -->
  <div class="container">

    <!-- Jumbotron Header -->
    <header class="jumbotron my-4">
      <h1 class="display-5 py-5">Dobrodošli na stranicu Dobrovoljnog vatrogasnog društva Haganj</h1>
      <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
      <a href="https://www.facebook.com/Dvd-Haganj-145464629144060/" class="btn btn-primary btn-lg" target="_blank">Posjeti facebook stranicu!</a>
    <div v-for="(obj,key) in slike" :key="key">

            <ul>
                <li v-for="(data, index) in slike" :key="index">
                              <img class="card-img-top" alt="" :src="data.slika">
                </li>
            </ul>
    </div>
    </header>
  </div>
</template>

<script>
export default{
data: () => ({
  slike: [
    {
      slika: "https://scontent.fzag2-1.fna.fbcdn.net/v/t1.0-9/s960x960/39454208_677875732569611_420377886965366784_o.jpg?_nc_cat=110&_nc_oc=AQlaMBjqNUQKXdrkQ4Lom_6IiUJqsBwKG1DP2agv74wsJwpPjWy0ucfSoKi0Vb_sB58&_nc_ht=scontent.fzag2-1.fna&_nc_tp=7&oh=f93db63e80a481d27a0da181da643f4b&oe=5F021CCD"
    },
    {
      slika: "https://scontent.fzag2-1.fna.fbcdn.net/v/t31.0-8/s960x960/28516780_563935500630302_4453077750382845337_o.jpg?_nc_cat=102&_nc_oc=AQkQYVdIEWZJvvLpVVOZY_36Olu1_8PtUZMXgyWdZ4n4pxlGl6_9oGKC383-C9TyJOE&_nc_ht=scontent.fzag2-1.fna&_nc_tp=7&oh=985ced84c8ba27e07824f483db9c4979&oe=5EC20D0D",

    },
    {
      slika: "https://scontent.fzag2-1.fna.fbcdn.net/v/t1.0-9/s960x960/39454208_677875732569611_420377886965366784_o.jpg?_nc_cat=110&_nc_oc=AQlaMBjqNUQKXdrkQ4Lom_6IiUJqsBwKG1DP2agv74wsJwpPjWy0ucfSoKi0Vb_sB58&_nc_ht=scontent.fzag2-1.fna&_nc_tp=7&oh=f93db63e80a481d27a0da181da643f4b&oe=5F021CCD"
    },
    {
      slika: "https://scontent.fzag2-1.fna.fbcdn.net/v/t31.0-8/s960x960/28516780_563935500630302_4453077750382845337_o.jpg?_nc_cat=102&_nc_oc=AQkQYVdIEWZJvvLpVVOZY_36Olu1_8PtUZMXgyWdZ4n4pxlGl6_9oGKC383-C9TyJOE&_nc_ht=scontent.fzag2-1.fna&_nc_tp=7&oh=985ced84c8ba27e07824f483db9c4979&oe=5EC20D0D",

    },

    

  ]

    })
    
}
</script>

<style scoped>
 ul{
        list-style-type:none;
        -webkit-column-count: 4;
        -moz-column-count: 4;
        column-count: 4;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        margin-top: 30px;

        

    }
    #clanovi{
        width:100%;
        margin:10px;
        margin-top:100px;

    }
    li:hover{
        font-size: 20px;
        color:orange;
        opacity: 1;

    }
    li{
        padding-bottom:5px;
    }
    img:hover{
      position: relative;
      width:420%;
      z-index: 1;
      opacity: 1;
    }

img{
  width:100%;
  z-index:-1;
  opacity:0.5;
}
</style>