/*
* Test: Utils
*/

var utils = require('../../lib/utils');


describe('Utils', function(){

	var file = {
		dirname : {}, 
		newDirname : {}
	};
	
	beforeEach(function(){
		file.dirname.uno = "main/modules";
		file.dirname.dos = ".";

		file.path = {p1: "/demo/source/", p2: "modules/default/index/"};


		file.newDirname.uno = "main/modules/";
		file.newDirname.dos = "";

		file.newPath = "index";
	});

	describe('fixDirName', function(){

		it('Debe poder normalizar las rutas de las carpetas.', function(){
			utils.fixDirName(file.dirname.uno).should.be.equal(file.newDirname.uno);
			utils.fixDirName(file.dirname.dos).should.be.equal(file.newDirname.dos);
		});

	});

	describe('getFolderName', function(){
		it('Debe poder obtener el nombre de la última carpeta.', function(){
			utils.getFolderName(file.path.p1, file.path.p2).should.be.equal(file.newPath);
		});
	});

});

