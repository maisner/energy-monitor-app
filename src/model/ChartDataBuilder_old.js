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

		return data;
	}

	getConfigFromData (type, consumptionData) {
		let labels = this.prepareLabelsFromData(consumptionData);

		return {
			labels:   labels,
			series: [
				this.prepareDatasetFromData(consumptionData),
				this.getLimitDataset(labels.length)
			]
		};
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
