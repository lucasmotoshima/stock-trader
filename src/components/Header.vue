<template>
    <v-toolbar app>
        <v-toolbar-title class="headline text-uppercase mr-4">
            <span>Stock</span>
            <span class="font-weight-light">Trader</span>
        </v-toolbar-title>

        <v-toolbar-items>
            <v-btn flat to="/">Início</v-btn>
            <v-btn flat to="/portfolio">Portifolio</v-btn>
            <v-btn flat to="/stocks">Ações</v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn flat @click="endDay">Finalizar Dia</v-btn>
            <v-menu offset-y>
                <v-btn flat slot="activator">Salvar & Carregar</v-btn>
                <v-list>
                    <v-list-tile @click="saveData">
                        <v-list-tile-title>Salvar Dados</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile @click="loadDataLocal">
                        <v-list-tile-title>Carregar Dados</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
            
            <v-layout align-center>
                <span class="text-uppercase grey--text--darken-2">
                     Saldo:<strong> {{ funds | currency }}</strong>
                     <small class=""> {{ saved }}</small>
                </span>
            </v-layout>

        </v-toolbar-items>

    </v-toolbar>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    props: ['salvo'],
    computed: {
        funds() {
            return this.$store.getters.funds
        },
        saved() {
            return this.$store.getters.saved
        }
    },
    methods: {
        ...mapActions(['randomizeStocks','loadData','setarSalvo']),
        endDay() {
            this.randomizeStocks()
            this.setarSalvo(false)
        },
        saveData() {
            const { funds, stockPortfolio, stocks } = this.$store.getters
            this.$http.put('data.json', { funds, stockPortfolio, stocks })
        },
        loadDataLocal() {
            this.loadData()
            this.setarSalvo(true)
        }
    }
}
</script>
