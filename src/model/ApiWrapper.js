import axios from 'axios'

class ApiWrapper {

	constructor () {
		this.baseUrl = process.env.VUE_APP_API_URL;
	}

	addMeterState (date, commodity, state) {
		let data = {
			commodity: commodity,
			datetime:  date,
			state:     state
		};

		return axios.post(this.baseUrl + '/api/v1/meter-state/add', data).then((response) => {
			return response.data;
		});
	}

	getConsumptionData (commodity) {
		return axios.get(this.baseUrl + '/api/v1/consumption?commodity=' + commodity).then((response) => {
			return response.data;
		});
	}

	getAllMeterStates (commodity) {
		return axios.get(this.baseUrl + '/api/v1/meter-state/all?commodity=' + commodity).then((response) => {
			return response.data;
		});
	}

}

export {ApiWrapper}
