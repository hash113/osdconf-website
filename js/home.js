$(document).ready(function(){
	var firebase = new Firebase('https://osdconf.firebaseio.com/notifyusers');
	$('#notify-me').click(function() {
		$('#notify-box').slideToggle();
		var email = $('#notify-email').val();

		if (email.length) {
			firebase.push({email: email});
			$('#notify-box').html('<p>Thank you! You will hear from us soon.</p>');
		}

	});
});