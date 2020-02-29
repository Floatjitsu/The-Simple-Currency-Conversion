import axios from 'axios';

const _apiUrl = 'https://api.exchangeratesapi.io/latest';

let _sourceCurrencyName = '';
let _targetCurrencyName = '';
let _conversionRate = 1;

const initialize = (fromCurrency, toCurrency) => {
	setSourceCurrency(fromCurrency);
	setTargetCurrency(toCurrency);
};

const convert = value => {
	return new Promise((resolve, reject) => {
		_setConversionRate().then(result => resolve(_buildFrontendData(value)));
	});
};

const setSourceCurrency = currencyName => {
	_sourceCurrencyName = currencyName;
};

const setTargetCurrency = currencyName => {
	_targetCurrencyName = currencyName;
};

const _setConversionRate = () => {
	return new Promise((resolve, reject) => {
		axios.get(_apiUrl, _buildApiParams())
			.then(response => {
				_conversionRate = response.data.rates[_targetCurrencyName];
				resolve(response);
			})
			.catch(error => reject(error));
	});
};

const _buildApiParams = () => {
	return {
		params: {
			base: _sourceCurrencyName,
			symbols: _targetCurrencyName
		}
	};
};

const _buildFrontendData = value => {
	return {
		convertedValue: _calculateConvertedValue(value),
		exchangeRate: _conversionRate
	};
};

const _calculateConvertedValue = value => {
	return (value * _conversionRate).toFixed(3);
};

export default {initialize, convert, setSourceCurrency, setTargetCurrency};
