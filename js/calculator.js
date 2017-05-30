/**
Archive size calculator
*/
(function($) {
	$(document).ready(function(){
		console.log($('.ASCalculator').text());		
	}) 
	
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