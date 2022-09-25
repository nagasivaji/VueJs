
// Importing
const app = Vue.createApp({
    // Vue app data
    data(){
        return {
            numbers : [
                {num: 1, isFav: false},
                {num: 2, isFav: true},
                {num: 3, isFav: true},
                {num: 4, isFav: false},
                {num: 5, isFav: true},
                {num: 6, isFav: false},
                
            ]
        };
        
    },

    methods:{
        
    }
});


// Mounting
app.mount('#app');



/*

    

*/