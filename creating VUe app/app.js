
// Importing
const app = Vue.createApp({
    // Vue app data
    data(){
        return {
            count : 0
        };
        
    },

    methods:{
        resetCounter(){
            this.count = 0;
        }
    }
});


// Mounting
app.mount('#app');



/*

    # We can defile methods in methods property in app component of Vue js

    # whatever method we defined, later we can call them from HTML as well 

    # Update data when we click from html element

*/