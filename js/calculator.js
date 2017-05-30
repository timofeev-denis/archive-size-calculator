/**
Archive size calculator
*/

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