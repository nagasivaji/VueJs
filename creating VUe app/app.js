// console.log("Hello Vue");


// Importing Vue Create app for creating a Vue App
const app = Vue.createApp({
    // we can have data here to access the data in HTML 

    // We can have function here to cal from HTML

    // We can have template here as well to render those templates in HTML

    template: '<h2>Hello Vue from Uve App</h2>'
});



// Mounting this app to HTML page
//  note : link we use export default ComponentName in react here we are mounting Vue app to html tag
app.mount('#app');
