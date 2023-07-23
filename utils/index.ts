const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '558a3cc1cbmsh3a024a18a0e6e4cp1d46b4jsn54267033e8ee',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

export async function fetchCars() {
   const headers = {
		'X-RapidAPI-Key': '558a3cc1cbmsh3a024a18a0e6e4cp1d46b4jsn54267033e8ee',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
});

const result = await response.json();

return result;
}