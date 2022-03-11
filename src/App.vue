<template>
	<v-app>
		<Header :salvo="salvo" @setarSalvo="setSalvo"/>
		<v-content>
			<v-container>
				<transition name="slide" mode="out-in">
					<router-view></router-view>
				</transition>
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
import Header from './components/Header'

export default {
	data() {
		return {
			salvo: false
		}
	},
    components: { Header },
	created() {
		this.$store.dispatch('initStocks')
		localStorage.setItem('salvo', false)
	},
	methods: {
		setSalvo(flag) {
			console.log('flag:'+ flag)
			localStorage.setItem('salvo', flag)
		}
	},
	watch: {
		salvo: {
			deep: true,
			handler() {
				localStorage.setItem('salvo', salvo)
			}
		}
	},
}
</script>

<style>
	@keyframes slide-in {
		from { transform: translateY(-30px); opacity: 0; }
		to { transform: translateY(0px); opacity: 1; }
	}
	@keyframes slide-out {
		from { transform: translateY(0px); opacity: 1; }
		to { transform: translateY(-30px); opacity: 0; }
	}
	.slide-enter-active {
		animation: slide-in 0.3s ease;
	}
	.slide-leave-active {
		animation: slide-out 0.3s ease;
	}
</style>

