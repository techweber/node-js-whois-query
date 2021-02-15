const whoiser = require('whoiser');

( async() => {

	let domaininfo = await whoiser('google.com');

	let domaininfo2 = await whoiser.domain('blog.google.com',{host: 'whois.nic.google',follow: 1});

	console.log(domaininfo);

	console.log('======================');
	console.log('======================');

	console.log(domaininfo2);


})();

