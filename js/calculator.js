/**
Archive size calculator
*/
(function($) {
	
	var round2DP = function(size) {
		return Math.round((size + 0.00001) * 100) / 100;
	};
	/**
	*	Создание формы калькулятора
	*/
	var createForm = function() {
		// Хардкод сделан для облегчения редактирования без участия программиста
		var calculatorHTML = 
		'	<div class="asc-row">' +
		'		<label for="ASCResolutions">Разрешение</label>' +
		'		<select id="ASCResolutions" class="asc-parameter">' +
		'			<option value="0.5767875">704x576 (D1)' +
		'			<option value="0.6179625">960x576 (960H)' +
		'			<option value="1.235925">1280x720 (720P / HD)' +
		'			<option value="1.8538875">1920x1080 (1080p / FullHD)' +
		'			<option value="2.0601">2048x1536 (3 Mp)' +
		'			<option value="2.47185">2592x1520 (4 Mp)' +
		'			<option value="4.9437">4096x2160 (8 Mp / 4K)' +
		'		<select>' +
		'	</div>' +
		'<div class="asc-row">' +
		'	<label for="ASCCameras">Количество камер</label>' +
		'	<input type="text" id="ASCCameras" value="1" class="asc-parameter" />' +
		'</div>' +
		'<div class="asc-row">' +
		'	<label for="ASCDays">Количество дней</label>' +
		'	<input type="text" id="ASCDays" value="1" class="asc-parameter" />' +
		'</div>' +
		'<div class="asc-row">' +
		'	<label for="ASCFps">Кадров в секунду</label>' +
		'	<input type="text" id="ASCFps" value="25" class="asc-parameter" />' +
		'</div>' +
		'<div class="asc-row">' +
		'	<span id="ASCResult"></span>' +
		'</div>';
		
		var calcContainer = $(".ASCalculator");		
		calcContainer.html(calculatorHTML);
	}
	
	$(document).ready(function(){
		createForm();
		var resolutionsElement = $("#ASCResolutions");
		var camerasElement = $("#ASCCameras");
		var daysElement = $("#ASCDays");
		var fpsElement = $("#ASCFps");
		var resultElement = $("#ASCResult");
		var calculate = function() {
			var archiveSize = resolutionsElement.val() * camerasElement.val() * daysElement.val() * fpsElement.val();
			resultElement.text(round2DP(archiveSize) + " Gb");
		};
		
		$(".asc-parameter").on("change input paste", calculate);
		calculate();;
	}); 
	
}(jQuery));


class ArchiveSizeCalculator {
	toString() {
		return 'ArchiveSizeCalculator';
	}
	
	calculateSize(resolution, cameras, days, fps) {
		return resolution * cameras * days * fps;
	}
}

var calc = new ArchiveSizeCalculator();
console.log(calc.toString());