$(document).ready(function(){

	// Mobil Navigation ------------------------------------------------------

	$('.navigation__btn').click(function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
		$('.navigation__controls').toggleClass('active');
	});


	// Carousel --------------------------------------------------------------

	$('#slick-obj').slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		accessibility: true,
		autoplay: true,
		arrows: true,
		centerMode: false,
		variableWidth: false,
		respondTo: 'window'
	});


	// Diagram ---------------------------------------------------------------

	var isDiagramShown = false;
	function showDiagram($frameStub, $button) {
		isDiagramShown = true;
		$frameStub.hide();
		$("#diagramFrame")
			.attr("src", "//www.ontodia.org/embedded?sharedDiagram=" + $button.data("target"))
			.show();
	}

	var $diagramFrameStub = $("#diagramFrameStub");
	var $diagramButton = $(".diagramBtn");
	if ($diagramFrameStub.length !== 0 && $diagramButton.length !== 0) {
		$(".diagramBtn").click(function () {
			showDiagram($diagramFrameStub, $(this));
		});
	}
});