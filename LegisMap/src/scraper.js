let url =
	"https://www.twinspires.com/adw/todays-tracks?affid=2800&sortOrder=nextUp";

async function getTracks() {
	const response = await fetch(url);
	const html = await response.text();
	const statusMessage = response.ok ? "Success!" : "Failed";
	console.log(statusMessage);
	console.log(html);
}

getTracks();

// import require from "require";

// const fetch = require('node-fetch');
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const { window } = new JSDOM('<!doctype html><html><body></body></html>');
// const $ = require('jquery')(window);
