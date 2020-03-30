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

const initialize = (baseCurrencyName, sourceCurrencyNames) => {
	_baseCurrencyName = baseCurrencyName;
	_sourceCurrencies.first.name = sourceCurrencyNames.first;
	_sourceCurrencies.second.name = sourceCurrencyNames.second;
	_sourceCurrencies.third.name = sourceCurrencyNames.third;
	console.log(_sourceCurrencies);
};

export default {initialize};
