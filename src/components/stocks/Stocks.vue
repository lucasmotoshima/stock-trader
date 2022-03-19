<template>
    <v-layout row wrap>
        <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
    </v-layout>
</template>

<script>
import Stock from './Stock'

export default {
    components: { Stock },
    computed: {
        stocks() {
            return this.$store.getters.stocks
        }
    },
    beforeRouteLeave(to, from, next){
        if(this.salvo){
            next()
        }else{
            if(confirm('Tem certeza?')){
                next(true)
            }else{
                next(false)
            }
        }
    }
}
</script>

<style>

</style>