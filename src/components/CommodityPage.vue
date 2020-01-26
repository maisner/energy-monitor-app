<template>
	<div class="commodity-page">

		<div class="d-sm-flex align-items-center justify-content-between mb-4">
			<h1 class="h3 mb-0 text-gray-800">{{commodity}}</h1>
			<a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
		</div>

		<div class="row">
			<!-- Area Chart -->
			<div class="col-xl-8 col-lg-7">
				<div class="card shadow mb-4">
					<!-- Card Header - Dropdown -->
					<div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
						<h6 class="m-0 font-weight-bold text-primary">Spotřeba</h6>
						<div class="dropdown no-arrow">
							<a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
							</a>
							<div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
								<div class="dropdown-header">Dropdown Header:</div>
								<a class="dropdown-item" href="#">Action</a>
								<a class="dropdown-item" href="#">Another action</a>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" href="#">Something else here</a>
							</div>
						</div>
					</div>
					<!-- Card Body -->
					<div class="card-body">
						<CommodityChartV2 :commodity="commodity"/>
					</div>
				</div>
			</div>

			<!-- Pie Chart -->
			<div class="col-xl-4 col-lg-5">
				<div class="card shadow mb-4">
					<!-- Card Header - Dropdown -->
					<div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
						<h6 class="m-0 font-weight-bold text-primary">Přidat stav měřidla</h6>
						<div class="dropdown no-arrow">
							<a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
							</a>
							<div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
								<div class="dropdown-header">Dropdown Header:</div>
								<a class="dropdown-item" href="#">Action</a>
								<a class="dropdown-item" href="#">Another action</a>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" href="#">Something else here</a>
							</div>
						</div>
					</div>
					<!-- Card Body -->
					<div class="card-body">
						<AddMeterState :commodity="commodity"/>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-sm-12">
				<div class="accordion" id="ac-states">
					<div class="card">
						<div class="card-header" id="states-viewer">
							<h2 class="mb-0">
								<button class="btn btn-link collapsed" type="button" data-toggle="collapse"
										data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
									Zobrazit všechny stavy
								</button>
							</h2>
						</div>
						<div id="collapseTwo" class="collapse" aria-labelledby="states-viewer" data-parent="#ac-states">
							<div class="card-body">
								<MeterStates :commodity="commodity"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	import CommodityChartV2 from './CommodityChartV2'
	import MeterStates from './MeterStates'
	import AddMeterState from './AddMeterState'

	export default {
		name:       'CommodityPage',
		props:      {
			commodity: String
		},
		components: {
			CommodityChartV2,
			MeterStates,
			AddMeterState
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
