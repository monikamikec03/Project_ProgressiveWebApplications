<template>
    <div id="secure">
        <h1>Samo za članove</h1>
        <p>
            Ovdje su sve obavijesti za članove
        </p>
        <div id = "add-blog">
            <h2>Dodaj novu obavijest</h2>
            <form>
                <label>Naslov</label>
                <input type="text" v-model="blog.title" required/>
                <label>Sadržaj</label>
                <textarea v-model="blog.content"></textarea>
            </form>
            <div id = "preview">
                <h3>Prikaz</h3>
                <p>Naslov: {{ blog.title }}</p>
                <p>Sadržaj: {{ blog.content }}</p>
            </div>
        </div>

        <div id = "Skills">
            <h4>Popis članova</h4>
            <form @submit.prevent="addSkill">
            <input type="text" v-model="skill"  style="width:500px; margin:0 auto">
            </form>

            <ul>
                <li v-for="(data, index) in skills" :key="index">{{ data.skill }}</li>
            </ul>
        </div>


    </div>
</template>

<script>

export default{

    name: 'Skills',
    data(){
        return{
            skill:'',
            skills:[
                {
                    "skill":"Ivan Dončević"
                },
                {
                    "skill":"Mihaela Dončević"
                },
                {
                    "skill":"Mihael Dončević"
                },
                {
                    "skill":"Monika Mikec"
                },
                {
                    "skill":"Martina Moguš"
                },
                {
                    "skill":"Ivan Dončević"
                },
                {
                    "skill":"Mihaela Dončević"
                },
                {
                    "skill":"Mihael Dončević"
                },
                {
                    "skill":"Monika Mikec"
                },
                {
                    "skill":"Martina Moguš"
                },
                {
                    "skill":"Ivan Dončević"
                },
                {
                    "skill":"Mihaela Dončević"
                },
                {
                    "skill":"Mihael Dončević"
                },
                {
                    "skill":"Monika Mikec"
                },
                {
                    "skill":"Martina Moguš"
                },
            ],
            blog:{
                title: "",
                content: ""
            }
        }
  
    },
    methods:{
        addSkill(){
            this.skills.push({skill: this.skill})
            this.skill = '';
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
        padding-bottom:5px;
    }

    #add-blog *{
        box-sizing: border-box;
    }
    #add-blog{
        margin:20px auto;
        max-width:500px;
    }
    label{
        display:block;
        margin:20px 0 10px;
    }
    input[type="text"], textarea{
        display:block;
        width:100%;
        padding:8px;
    }
    #preview{
        padding:10px 20px;
        border:1px dotted #ccc;
        margin:30px 0;
    }
    h3{
        margin-top:20px;
    }
    h2{
        margin-top:100px;
    }
</style>


