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
			console.log(data.length);
			console.log('Test, vamos a ver si desde la web regresa algo');
		});
	}

	// Facebook Scripts
	$.ajaxSetup({ cache: true });
	$.getScript('https://connect.facebook.net/es_LA/all.js', function() {
		FB.init({ appId: '274324772768932' });
		$('#loginbutton, #feedbutton').removeAttr('disabled');
		FB.getLoginStatus(function() {
			if($('.sidebar .stats .members .value').length) {
				FB.api('/318240698253471/members', function(response) {
					console.log(response);
					if (response  && !response .error) {
						$('.sidebar .stats .members .value').html(response.data.length);
						$('.sidebar .social-profiles .facebook .value').html(response.data.length + ' Miembros');
					}
				});
			}
		});
	});

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