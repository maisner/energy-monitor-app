<template>
	<div class="chart">
		<div class="row">
			<div class="col-sm-12 text-right">
				<button class="btn btn-sm" @click="changeType('line')">Line</button>
				<button class="btn btn-sm" @click="changeType('bar')">Bar</button>
				<button @click="reload()" class="btn btn-default btn-sm"><i class="icon ion-md-refresh"></i>
				</button>
			</div>
		</div>

		<div class="row">
			<canvas id="gas-chart"></canvas>
		</div>
	</div>
</template>

<script>
	import Chart from 'chart.js';
	import {ApiWrapper} from '../model/ApiWrapper'
	import {ChartDataBuilder} from '../model/ChartDataBuilder'

	export default {
		name:    'CommodityChart',
		data () {
			return {
				chart:            null,
				api:              null,
				chartDataBuilder: null
			}
		},
		props:   {
			commodity: String
		},
		methods: {
			changeType (type) {
				this.chart.config.type = type;
				this.chart.update();
			},
			reload () {
				this.api.getConsumptionData(this.commodity).then((data) => {
					let type = this.chart.config.type;

					this.chart.config = this.chartDataBuilder.getConfigFromData(type, data.data[ 0 ]);
					this.chart.update();
				});
			},
			createChart () {
				this.api.getConsumptionData(this.commodity).then((data) => {
					const ctx = document.getElementById('gas-chart');
					this.chart = new Chart(ctx, this.chartDataBuilder.getConfigFromData('line', data.data[ 0 ]));
				});
			}
		},
		mounted () {
			this.api = new ApiWrapper();
			this.chartDataBuilder = new ChartDataBuilder();

			this.createChart();
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*.chart {*/
	/*	width: 800px;*/
	/*}*/
</style>
