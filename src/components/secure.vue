<template>
    <div id="secure">
        <h1>Samo za članove</h1>
        <p>
            Ovdje su sve obavijesti za članove
        </p>

        <div id = "clanovi">
            <h4>Popis članova</h4>
            <input v-model="noviClan">
            <button v-on:click="dodajClana">
                + DODAJ
            </button>
            <ul>
                <li v-for="item in items" :key="item">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<script src="https://unpkg.com/vue"></script>
<script>
export default{
    name: 'clanovi',
    data(){
        return{
            items:[
                'Ivan Dončević',
                'Vesna Slunjski',
                'Mihaela Dončević',
                'Martina Moguš',
                'Monika Mikec',
                'Zlatko Slunjski',
                'Maristela Baričević',
                'Vesna Puhača',
                'Valentina Puhača',
                'Mihael Dončević'
            ],
            noviClan: '',


            
            methods:{
                dodajClana: function(){
                    return clanovi.push(noviClan)
                }


            }
            
        }




        
    }
}

</script>

<style scoped>
    #secure {
        background-color: white;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }

    ul{
        list-style-type:none;
        -webkit-column-count: 5;
        -moz-column-count: 5;
        column-count: 5;
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
        opacity: 0.5;
    }
</style>