<script>
	import {Line} from 'vue-chartjs'

	export default {
		name:    'TestChart',
		extends: Line,
		data:    () => ({
			chartdata: {
				labels:   ['January', 'February'],
				datasets: [
					{
						label:           'Data One',
						backgroundColor: '#f87979',
						data:            [40, 20]
					}
				]
			},
			options:   {
				responsive:          true,
				maintainAspectRatio: false
			}
		}),
		mounted () {
			this.renderChart(this.chartdata, this.options)
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*.chart {*/
	/*	width: 800px;*/
	/*}*/
</style>
