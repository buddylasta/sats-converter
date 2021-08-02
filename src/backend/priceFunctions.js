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

function convertUsdToSats(usd) {
	fetchBtcPrice().then((btcPrice) => {
		console.log("btc price: " + btcPrice); //btc price in usd
		let satsPerUsd = Math.round(satsPerBtc/btcPrice); //number of sats per usd
		console.log("sats per USD: " + satsPerUsd); 
		let usdOutput = usd*satsPerUsd;
		console.log(usd + " USDs equals " + usdOutput + " sats.");
		return usdOutput; 
	}).catch((err) => {
		console.log("error: " + err);
	});
};

console.log(convertUsdToSats(14000));

function convertSatstoUsd(sats) {
	fetchBtcPrice().then((btcPrice) => {
		console.log("btc price: " + btcPrice); //btc price in usd
		let usdPerSat = btcPrice/satsPerBtc; //number of USDs per sat
		console.log("USDs per sat: " + usdPerSat);
		let satsOutput = sats*usdPerSat;
		console.log(sats + " sats equals " + satsOutput + " USDs.");
		return satsOutput; 
	}).catch((err) => {
		console.log("error: " + err);
	});
};

console.log(convertSatstoUsd(1800));

export { convertSatstoUsd, convertUsdToSats }; 

//documentation: https://www.npmjs.com/package/coingecko-api