/**
Archive size calculator
*/
(function($) {
	
	var round2DP = function(size) {
		return Math.round((size + 0.00001) * 100) / 100;
	};
	
	$(document).ready(function(){
		
		var calcContainer = document.createElement("div");
		
		var resolutionsElement = $("#ASCResolutions");
		var camerasElement = $("#ASCCameras");
		var daysElement = $("#ASCDays");
		var fpsElement = $("#ASCFps");
		var resultElement = $("#ASCResult");
		var calculate = function() {
			var archiveSize = resolutionsElement.val() * camerasElement.val() * daysElement.val() * fpsElement.val();
			//console.log(archiveSize);
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