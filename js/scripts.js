$(document).ready(function() {
	// Slider de página principal, cambia cada 5 segundos
	if($('.slider').length) {
		$('.slider li:first-child').addClass('active');
		setInterval(function() {
			var $active = $('.slider li.active');
			var $next = ($active.next().length > 0) ? $active.next() : $('.slider > *:first-child');
			$active.fadeOut(500, function() {
				$active.removeClass('active');
				$next.fadeIn(100, function() {
					$next.addClass('active');
					$next.removeAttr('style');
				});
				$active.removeAttr('style');
			});
		}, 5000);
	}

	// Generate Slider
	if($('.sidebar .slider').length) {
		$('.sidebar .slider').html('');
		console.log('yess');
		$.getJSON('https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&format=json&api_key=bca5967b8308a3c928db8a7a5a34b5c9&photoset_id=72157646408522657&extras=url_m', function(data) {
			//$('.sidebar .slider').append();
			console.log('Test, vamos a ver si desde la web regresa algo');
		});
	}
	
	// Facebook Scripts
	if($('.sidebar .stats .members').length || $('.sidebar .social-profiles').length) {
		$.ajaxSetup({ cache: true });
		$.getScript('https://connect.facebook.net/es_LA/all.js', function() {
			FB.init({ appId: '274324772768932' });
			$('#loginbutton, #feedbutton').removeAttr('disabled');
			FB.getLoginStatus(function(response) {
				if (response.status === 'connected') {
					// the user is logged in and has authenticated your
					// app, and response.authResponse supplies
					// the user's ID, a valid access token, a signed
					// request, and the time the access token 
					// and signed request each expire
					var uid = response.authResponse.userID;
					var accessToken = response.authResponse.accessToken;
					console.log('Respuesta Login');
					console.log(response);
					FB.api('/318240698253471/members', { access_token:accessToken }, function(response) {
						console.log('Respuesta Members');
						console.log(response);
						if (response  && !response.error) {
							if($('.sidebar .stats .members').length) {
								$('.sidebar .stats .members .value').html(response.data.length);
							}
							if($('.sidebar .social-profiles')) {
								$('.sidebar .social-profiles .facebook .value').html(response.data.length + ' Miembros');
							}
						} else if (response.status === 'not_authorized') {
							if($('.sidebar .stats .members').length) {
								$('.sidebar .stats .members .value').html(0);
							}
							if($('.sidebar .social-profiles')) {
								$('.sidebar .social-profiles .facebook .value').html('0 Miembros');
							}
						}
					});
				}
			});
		});
	}

	// GitHub & Twitter Scripts
	if($('.sidebar .social-profiles').length) {
		$.getJSON('https://api.github.com/orgs/mxlos/members', function(data) {
			$('.sidebar .social-profiles .github .value').html(data.length + ' Colaboradores');
		});
	}

	// Better Contact Form Script
	/* var bcf_settings = { buttonText:'Contáctenos', buttonTop:'30%', language:'es_ES' }; // Better Contact Form Settings */
	(function (d, s, id) {
		if ('https:' == document.location.protocol || d.getElementById(id)) return;
		var js, fjs = d.getElementsByTagName(s)[0]; js = d.createElement(s); js.id = id;
		js.src = "https://bettercontactform.com/contact/media/7/8/78b4998b7350babeea758d74db807e722bed0caf.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, "script", "bcf-render"));
});