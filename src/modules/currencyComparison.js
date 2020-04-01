import axios from 'axios';

const _apiUrl = 'https://api.exchangeratesapi.io/latest';

let _baseCurrencyName = '';

let _sourceCurrencies = {
	first: {
		name: '',
		conversionRate: 0
	},
	second: {
		name: '',
		conversionRate: 0
	},
	third: {
		name: '',
		conversionRate: 0
	}
};

let _rates = {};

const _buildApiParams = () => {
	return {
		params: {
			base: _baseCurrencyName
		}
	};
};

const initialize = (baseCurrencyName, sourceCurrencyNames) => {
	_baseCurrencyName = baseCurrencyName;
	_sourceCurrencies.first.name = sourceCurrencyNames.first;
	_sourceCurrencies.second.name = sourceCurrencyNames.second;
	_sourceCurrencies.third.name = sourceCurrencyNames.third;
};

const _getRatesForBaseCurrency = () => {
	return new Promise((resolve, reject) => {
		axios.get(_apiUrl, _buildApiParams())
			.then(response => {
				_rates = response.data.rates;
				_setSourceCurrenciesConversionRates();
				resolve();
			});
	});
};

const convert = () => {
	return new Promise((resolve, reject) => {
		_getRatesForBaseCurrency().then(() => resolve(_sourceCurrencies));
	});
};

const _setSourceCurrenciesConversionRates = () => {
	_sourceCurrencies.first.conversionRate = _rates[_sourceCurrencies.first.name];
	_sourceCurrencies.second.conversionRate = _rates[_sourceCurrencies.second.name];
	_sourceCurrencies.third.conversionRate = _rates[_sourceCurrencies.third.name];
};

const setBaseCurrencyName = baseCurrencyName => {
	_baseCurrencyName = baseCurrencyName;
};

export default {initialize, convert, setBaseCurrencyName};
