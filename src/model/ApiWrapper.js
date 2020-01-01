import axios from 'axios'

class ApiWrapper {

	constructor () {
		this.baseUrl = 'http://194.182.69.216:8080';//production api
		// this.baseUrl = 'http://194.182.69.216:9080';//test api
		// this.baseUrl = 'https://e293028e-865b-47fe-b977-caa92669e275.mock.pstmn.io';//postman mock
	}

	addMeterState (date, commodity, state) {
		let data = {
			commodity: commodity,
			datetime: date,
			state: state
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
