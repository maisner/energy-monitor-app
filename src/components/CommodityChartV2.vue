<template>
	<div class="chart">
		<div class="row">
			<div class="col-sm-12 text-right">
				<!--				<button class="btn btn-sm" @click="changeType('line')">Line</button>-->
				<!--				<button class="btn btn-sm" @click="changeType('bar')">Bar</button>-->
				<button @click="reload()" class="btn btn-default btn-sm"><i class="icon ion-md-refresh"></i></button>
			</div>
		</div>

		<div class="chartist"></div>

	</div>
</template>

<script>
	import Chartist from 'chartist'
	import {ApiWrapper} from '../model/ApiWrapper'
	import {ChartDataBuilder} from '../model/ChartDataBuilder'

	export default {
		name:    'CommodityChartV2',
		data () {
			return {
				chart:            null,
				api:              null,
				chartDataBuilder: null,
				chartData:        null,
				options:          {
					fullWidth: true,
					height:    600,
					// low:       0,
					// showArea:  true
				}
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
					this.chart.config = this.chartDataBuilder.getConfigFromData('line', data.data[ 0 ]);
					this.chart.update(this.chartData, this.options);
				});
			},
			createChart () {
				this.api.getConsumptionData(this.commodity).then((data) => {
					this.chartData = this.chartDataBuilder.getConfigFromData('line', data.data[ 0 ]);
					this.chart = new Chartist.Line('.chartist', this.chartData, this.options);
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
<style>
	.commodity-dataset .ct-line{
		stroke: #76cbff;
		stroke-width: 3px;
		/* Make your points appear as squares */
		stroke-linecap: square;
		/*fill: rgba(20, 20, 50, .2);*/
	}
	.commodity-dataset .ct-point {
		stroke: #76cbff;
		stroke-linecap: round;
		stroke-width: 10px;
	}

	.limit-dataset .ct-line,
	.limit-dataset .ct-point {
		stroke: #ff000a;
		stroke-width: 1px;
		/* Create a dashed line with a pattern */
		stroke-dasharray: 10px 15px;
	}
</style>
