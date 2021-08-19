//1. Import coingecko-api
const CoinGecko = require('coingecko-api');
 
//2. Initiate global variables
const CoinGeckoClient = new CoinGecko();
const satsPerBtc = 100000000; //100000000 sats in 1 bitcoin 

//3. Make calls
var fetchBtcPrice = async() => {

	let data = await CoinGeckoClient.simple.price({
		ids: ['bitcoin'],
		vs_currencies: ['usd'],
	});

	let btcusd = data.data.bitcoin.usd;
	return (btcusd);
  };

async function convertUsdToSats(usd) {
	const btcPrice = await fetchBtcPrice();
	const satsPerUsd = Math.round(satsPerBtc/btcPrice); //number of sats per usd
	const satsOutput = usd * satsPerUsd;
	return satsOutput;
};

//console.log(convertUsdToSats(14000));

async function convertSatsToUsd(sats) {
	const btcPrice = await fetchBtcPrice();
	const usdPerSat = btcPrice/satsPerBtc;
	const usdOutput =  sats * usdPerSat;
	return usdOutput;
};

//console.log(convertSatsToUsd(1800));

export { convertSatsToUsd, convertUsdToSats }; 

//documentation: https://www.npmjs.com/package/coingecko-api