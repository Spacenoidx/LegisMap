async function getSearch(statecode) {
	if (statecode !== null && statecode !== "null") {
		const params = {
			state: statecode,
			key: "832888b2712ec76b67d7385597cad774",
			op: "getSearch",
			query: "marijuana",
		};

		const billsArray = [];

		const queryString = new URLSearchParams(params).toString();
		const url = `https://api.legiscan.com/?${queryString}`;

		try {
			const response = await fetch(url);
			const data = await response.json();
			console.log("INSIDE FUNCTION");
			// console.log(data.searchresult);
			const searchresult = data.searchresult;

			for (const key in searchresult) {
				if (key !== "summary") {
					const bill = searchresult[key];
					// console.log(`Bill number: ${bill.bill_number}`);
					// console.log(`Title: ${bill.title}`);
					// console.log("--- \n \n");
					billsArray.push(bill);
				}
			}
			console.log(billsArray);
			return billsArray;
		} catch (error) {
			console.error("Error:", error);
			return null;
		}
	}
}

// // console.log("TESTING TESTING TESTING");
// console.log(results.searchresult);
// const searchresult = results.searchresult;

// const billsArray = [];

// for (const key in searchresult) {
//     if (key !== 'summary') {
//         const bill = searchresult[key];
//         console.log(`Bill number: ${bill.bill_number}`);
//         console.log(`Title: ${bill.title}`);
//         console.log('--- \n \n');
// 		billsArray.push(bill);

//     }
// }
// console.log(billsArray);
export default getSearch;
