
// Importing
const app = Vue.createApp({
    // Vue app data
    data(){
        return {
            title: 'Learn Vue by Net Ninja',
            book : {
                price : 250,
                pages : 720,
                eddition : 'Third Edition'
            }
        };
    }
});


// Mounting
app.mount('#app');




/*

    // Whatever the data presen in the data function in Vue app it will be accessible in htmlfil 

    // The data type in data function can be anytype

    // NOTE: The only limitation is that we can access the data into the html elements only on which the Vue app is mounted or linked to the tag.

    // Outside of that html mounted tag we can not access the data


*/ 