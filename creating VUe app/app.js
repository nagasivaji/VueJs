
// Importing
const app = Vue.createApp({
    // Vue app data
    data(){
        return {
            marks : this.refreshMarks(),
        };
        
    },

    methods:{
        refreshMarks(){
            console.log(this.marks);

            const mark = Math.floor(Math.random(this.marks) * 100);

            this.marks =  mark;
            
            return mark;
        }
    }
});


// Mounting
app.mount('#app');



/*

    

*/