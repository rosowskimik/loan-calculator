// Listen for submit
document.querySelector('#loan-form').addEventListener('submit', calculateResults);


// Calculate results
function calculateResults(e) {
	// UI Variables
	const UIamount = document.querySelector('#amount');
	const UIinterest = document.querySelector('#interest');
	const UIyears = document.querySelector('#years');
	const UImonthlyPayment = document.querySelector('#monthly-payment');
	const UItotalPayment = document.querySelector('#total-payment');
	const UItotalInterest = document.querySelector('#total-interest');

	const principal = parseFloat(UIamount.value);
	const calculatedInterest = parseFloat(UIinterest.value) / 100 / 12;
	const calculatedPayments = parseFloat(UIyears.value) * 12;

	const x = Math.pow(1 + calculatedInterest, calculatedPayments);
	const monthly = (principal*x*calculatedInterest)/(x-1);
	
	if(isFinite(monthly)){
		UImonthlyPayment.value = monthly.toFixed(2);
		UItotalPayment.value = (monthly * calculatedPayments).toFixed(2);
		UItotalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
	} else {
		showError('Please check your numbers');
	}

	e.preventDefault();
}

// Show error message
function showError(error) {
	// Create div
	const errorDiv = document.createElement('div');
	errorDiv.className = 'alert alert-danger';

	// Get UI elements
	const UIcard = document.querySelector('.card');
	const UIheading = document.querySelector('.heading');

	// Add text to error Div
	errorDiv.appendChild(document.createTextNode(error));

	// Insert message into UI
	UIcard.insertBefore(errorDiv, UIheading);

	// Clear error
	setTimeout(clearError, 2500);
}

// Clear error
function clearError(){
	document.querySelector('.alert').remove();
}