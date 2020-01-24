<template>
	<div id="chartist"></div>
</template>

<script>
	import Chartist from 'chartist'

	export default {
		name: 'TestChart',
		data: () => ({
			chartdata: {
				labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
				series: [
					[12, 9, 7, 8, 5],
					[2, 1, 3.5, 7, 3],
					[1, 3, 4, 5, 6]
				]
			},
			options:   {
				fullWidth:    true,
				height:       600,
				chartPadding: {
					right: 40
				}
			}
		}),
		mounted () {
			new Chartist.Line('#chartist', this.chartdata, this.options);
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*.chart {*/
	/*	width: 800px;*/
	/*}*/
</style>
