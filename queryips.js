const whoiser = require('whoiser');

( async() => {

	let ipinfo = await whoiser('1.1.1.1');

	let ipinfo2 = await whoiser.ip('8.8.8.8',{host: 'whois.arin.net'});

	console.log(ipinfo);

	console.log('======================');
	console.log('======================');

	console.log(ipinfo2);


})();

