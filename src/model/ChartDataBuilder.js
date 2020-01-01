class ChartDataBuilder {

	prepareLabelsFromData (consumptionData) {
		let labels = [];
		consumptionData.forEach(function (item) {
			labels.push(item.month + '/' + item.year);
		})

		let labelsCount = labels.length;

		if (labelsCount < 12) {
			let addCount = 12 - labelsCount;

			for (let i = 1; i <= addCount; i++) {
				labels.push('...')
			}

		}

		return labels;
	}

	prepareDatasetFromData (consumptionData) {
		let data = [];
		consumptionData.forEach(function (item) {
			data.push(Math.round(item.month_consumption));
		})

		return {
			label:           'Měsíční spotřeba (m³)',
			data:            data,
			// borderWidth:     1,
			// pointRadius:     1,
			// lineTension:     0.4,
			// backgroundColor: '#44b5ff',
			// backgroundColor: 'rgba(145,202,220,0.1)',
			// borderColor:     'rgba(145,202,220,1)',
			// fill:        false,
			borderColor: "#8e5ea2",
			fill: true
		};
	}

	getConfigFromData (type, consumptionData) {
		let labels = this.prepareLabelsFromData(consumptionData);

		return {
			type:    type,
			data:    {
				labels:   labels,
				datasets: [
					this.prepareDatasetFromData(consumptionData),
					this.getLimitDataset(labels.length)
				]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:  true,
							suggestedMax: this.getYAxesMaxValue(consumptionData)
						}
					}]
				}
			}
		}
	}

	getYAxesMaxValue (consumptionData) {
		let value = 0;
		consumptionData.forEach(function (item) {
			if (item.month_consumption > value) {
				value = item.month_consumption;
			}
		})

		return value * 1.3;
	}

	getLimitDataset (itemsCount) {
		let limit = 200;
		let data = [];

		for (let i = 1; i <= itemsCount; i++) {
			data.push(limit);
		}

		return {
			label:       'Limit záloh',
			data:        data,
			type:        'line',
			borderColor: '#ff0056',
			fill:        false,
			pointRadius: 0,
			borderWidth: 1,
		};
	}

}

export {ChartDataBuilder}
