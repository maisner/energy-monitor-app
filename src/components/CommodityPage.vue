<template>
	<div class="commodity-page">
		<div class="row">
			<div class="col-sm-12">
				<CommodityChartV2 :commodity="commodity"/>
			</div>
		</div>
		<div class="mt-5"></div>
		<div class="row">
			<div class="col-sm-7">
				<AddMeterState :commodity="commodity"/>
			</div>
		</div>
		<div class="mt-5"></div>
		<div class="row">
			<div class="col-sm-7">
				<MeterStates :commodity="commodity"/>
			</div>
		</div>
	</div>
</template>

<script>

	import CommodityChart from './CommodityChart'
	import CommodityChartV2 from './CommodityChartV2'
	import MeterStates from './MeterStates'
	import AddMeterState from './AddMeterState'

	export default {
		name:       'CommodityPage',
		props:      {
			commodity: String
		},
		components: {
			CommodityChart,
			CommodityChartV2,
			MeterStates,
			AddMeterState
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
