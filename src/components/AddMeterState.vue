<template>
	<div class="add-meter-state">

		<form class="form-inline">
			<div class="form-group mb-2">
				<label for="date" class="sr-only">Datum</label>
				<input type="date" class="form-control" id="date" v-model="date">
			</div>
			<div class="form-group mx-sm-3 mb-2">
				<label for="state" class="sr-only">Stav</label>
				<input type="number" min="0" class="form-control" id="state" placeholder="Stav měřidla" v-model="state">
			</div>
			<button class="btn btn-primary mb-2" v-on:click="add()">Přidat stav</button>
		</form>
	</div>
</template>

<script>
	import ApiWrapper from '../model/ApiWrapper'
	import moment from 'moment'

	export default {
		name:    'AddMeterState',
		data () {
			return {
				api:    null,
				date:   moment().format('YYYY-MM-DD'),
				state:  0,
				alerts: []
			}
		},
		props:   {
			commodity: String
		},
		methods: {
			reset () {
				this.date = moment().format('YYYY-MM-DD');
				this.state = 0
			},
			add () {
				let date = this.date;
				let state = this.state;

				let self = this;

				ApiWrapper.addMeterState(date, this.commodity, state).then(function () {
					self.reset();
					self.flashMessage.success({
						title:   'Stav měřidla byl přidán',
						message: 'Pro datum ' + date + ' byl přidán stav ' + state
					});
				});
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
