<template>
    <div class="learn">
        <h3>Õpikeskkond</h3>
        <p>Lorem ipsum dolor</p>
    </div>
</template>

/*<script>
    export default {
        name: 'Learn',
        props: {
            msg: String
        }
    }
</script>*/
//name parameter indicates the name of the component 'Learn'
//props parameter indicates the input to this component
//here we have one input calles as msg, of type String
//{{ msg }} is the way in which the input parameter
//to the Vue component can be accessed in the HTML code
<style scoped lang="scss">
//scoped means that the CSS applies to this component only
.learn {
    background-color: #76dbae;
    display: flex;
    flex-flow: flex-wrap;
    flex-direction: column;
    margin: 0 40px 0 40px;
    padding: 15px 0 0 0;
}
</style>