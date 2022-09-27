<template>
    <div class="home">
        <h1>HOME</h1>
        <h2>Refs</h2>
        <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
        <button @click="updateNinjaOne">Update NinjaOne</button>
        <h2>Reactive</h2>
        <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
        <button @click="updateNinjaTwo">Update NinjaTwo</button>
    </div>
</template>

<script>
// Importing refs
import { ref, reactive } from "vue";

export default {
    name: "HomeView",

    setup() {
        let ninjaOne = ref({ name: "mario", age: 30 });
        let ninjaTwo = reactive({ name: "luigi", age: 35 });

        const updateNinjaOne = () => {
        ninjaOne.value.age = 40;
        };

        const updateNinjaTwo = () => {
        ninjaTwo.age = 50;
        };

        return { ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo };
    },
};
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


    ``````````````````````````````````` NEW NOTE ````````````````````````````````````````````````````

    # If you want to make any variable in setup to become REACTIVE we can use REF's for that like below shown.

    # let name = ref("sivaji"); then the variable name can be dynamic and it will render component when ever name has changed its value.

    # If we want to update value of a refs variable it will be like this name.value = "Naga Sivaji"

    # if we want to show the value of a refs variable in component it will be like name only. No need of name.value

    ``````````````````````````````````` NEW NOTE ````````````````````````````````````````````````````

    # REFS vs REACTIVE
    # we can not use primitive values in REACTIVE
    # But by using REACTIVE we can neglect the usage of value property. Below is the example

            Data...
            let ninjaOne = ref({name: "mario", age:30});
            let ninjaTwo = reactive({name: "luigi", age:35});

            Updating...
            ninjaOne.value.age = 40;
            ninjaTwo.age = 50;
 */