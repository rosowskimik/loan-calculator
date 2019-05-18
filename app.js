// Listen for submit
document.querySelector('#loan-form').addEventListener('submit', calculateResults);


// Calculate results
function calculateResults(e) {
	// UI Variables
	const UIamount = document.querySelector('#amount');
	const UIinterest = document.querySelector('#interest');
	const UIyears = document.querySelector('#years');
	const UImonthlyPay = document.querySelector('#montly-payment');
	const UItotalPay = document.querySelector('#total-payment');
	const UItotalInt = document.querySelector('#total-interest');


	e.preventDefault();
}