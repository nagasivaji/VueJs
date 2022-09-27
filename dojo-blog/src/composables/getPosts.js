// importing refs
import { ref } from "vue";

function getPosts(){
    const posts = ref([]);
    const error = ref(null);

    // API
    const load = async() => {
        try{
            let data = await fetch("http://localhost:8000/posts");
            //console.log(data);
            if(!data.ok)
                throw Error('No data available');

            posts.value = await data.json();
        }
        catch(err){
            error.value = err.message;
            console.log(error.value);
        }
    }

    load();

    return {posts, error};
}

export default getPosts;