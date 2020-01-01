<template>
	<div class="meter-states">
		<table class="table table-sm">
			<thead>
			<tr>
				<th scope="col">Datum</th>
				<th scope="col">Stav (m³)</th>
				<th scope="col">Nárust (m³)</th>
				<th scope="col">Poznámka</th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="meterState in meterStates" v-bind:key="meterState.id">
				<td>{{formatDate(meterState.datetime)}}</td>
				<td>{{meterState.state}}</td>
				<td class="text-success">+{{meterState.increase}}</td>
				<td></td>
			</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import {ApiWrapper} from '../model/ApiWrapper'
	import moment from 'moment'

	export default {
		name:    'MeterStates',
		data () {
			return {
				api:         null,
				meterStates: []
			}
		},
		props:   {
			commodity: String
		},
		methods: {
			loadData () {
				this.api.getAllMeterStates(this.commodity).then((data) => {
					let previousState = null;

					let result = [];
					for (let item of data.data[ 0 ]) {
						item.increase = previousState !== null ? item.state - previousState : 0;
						previousState = item.state;
						result.push(item);
					}

					this.meterStates = result;
				});
			},
			formatDate (datetime) {
				let a = moment(datetime);
				moment.locale('cs');
				return a.format("LL");
			}
		},
		mounted () {
			this.api = new ApiWrapper();
			this.loadData();
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*.chart {*/
	/*	width: 800px;*/
	/*}*/
</style>
