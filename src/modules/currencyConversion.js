import axios from 'axios';

const _apiUrl = 'https://api.exchangeratesapi.io/latest';
const _params = {params: { base: '', symbols: '' } };

let _conversionRate = 1;

const initialize = (fromCurrency, toCurrency) => {
	_setSourceCurrency(fromCurrency);
	_setTargetCurrency(toCurrency);
};

const convert = value => {
	return new Promise((resolve, reject) => {
		_setRate().then(result => resolve(_conversionRate * value));
	});
};

const _setRate = () => {
	return new Promise((resolve, reject) => {
		axios.get(_apiUrl, _params)
			.then(response => {
				_conversionRate = response.data.rates[_params.params.symbols];
				resolve(response);
			})
			.catch(error => reject(error));
	});
};

const _setSourceCurrency = currencyName => {
	_params.params.base = currencyName;
};

const _setTargetCurrency = currencyName => {
	_params.params.symbols = currencyName;
};

export default {initialize, convert};
