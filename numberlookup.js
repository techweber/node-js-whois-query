const whoiser = require('whoiser');

( async() => {

	let whois = await whoiser.asn(15169);

	console.log(whois);

})();

