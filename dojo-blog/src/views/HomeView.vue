<template>
    <div class="home">
        <h1>HOME</h1>
        <!-- Data comming from setup function -->
        <p>{{name}}</p>
        <p>{{EmpId}}</p>
        <button @click="handleClick">Click ME</button>
    </div>
</template>

<script>


export default {
    name: 'HomeView',
    // Setup hook will execue before all the hooks going to execute. : Composition API
    setup() {
        let name = "sivaji";
        let id = 22;

        const handleClick = () => console.log("CLICKED");;

        return {name, EmpId: id, handleClick};
    },
    
}
</script>


/*
    # To use data comming from setup hook into our Vue component we have to return those data in object format

    # return {name, EmpId: id};
    # From above return statement we can obser two diffrent patterns
    # Here name is retured as name. So we can use that as name in our components
    # But id is returned as EmpId. So we can use id as EmpId in our components.


    # If we want to access function defined in setup then they also must be returned from setup     function as show in above example

    ``````````````````````````````````` NOTE ````````````````````````````````````````````````````

    # If tha data in the data hook gets chnaged it will reflect the data in the component as well. Because they are REACTIVE data

    # If tha data in the setup hook gets chnaged it will not reflect the data in the component. Because they are NOT REACTIVE data



 */