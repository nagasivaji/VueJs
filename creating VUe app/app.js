
// Importing
const app = Vue.createApp({
    // Vue app data
    data(){
        return {
            url : "https://www.crct.in/"
        };
        
    },

    methods:{
        
    }
});


// Mounting
app.mount('#app');



/*

    # for Binding attributes to a html tag from vue app it will be something different than simply assigning data variables


    # <a v-bind:href="url">Go to CRCT</a>
    we have to use "v-bind:attributename" to bind data dynamically to attributes in html page

    #Sortcut fot v-bind
    <a :href="url">Go to CRCT</a>

*/