// Listen for submit
document.querySelector('#loan-form').addEventListener('submit', function(e){
	// Hide results
	document.querySelector('#results').style.display = 'none';
	
	// Show loader
	document.querySelector('#loading').style.display = 'block';

	setTimeout(calculateResults, 1700);

	e.preventDefault();
});


// Calculate results
function calculateResults() {
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

		// Display results, hide loader
		document.querySelector('#results').style.display = 'block';
		document.querySelector('#loading').style.display = 'none';
	} else {
		showError('Please check your numbers');
	}
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
		// Display results, hide loader
		document.querySelector('#results').style.display = 'block';
		document.querySelector('#loading').style.display = 'none';

	setTimeout(clearError, 2500);
}

// Clear error
function clearError(){
	document.querySelector('.alert').remove();
}