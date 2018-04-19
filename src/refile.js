// refile.js
var fs = require("fs");
var cwd = process.cwd() + "/";

function refile(dir, files) {

	var _dir = [];	
	var _files = [];

	files !== undefined? _files = files: _files;
	dir ? cwd = "": dir = fs.readdirSync(cwd,"utf8");
	console.log(dir)
	for(i in dir) {
		dir[i] !== "node_modules"
		&& ( fs.lstatSync(cwd + dir[i]).isFile() && _files.push(cwd + dir[i]) 
			|| _dir.push(cwd + dir[i])
		)
	}
	console.log(_files)
	console.log(_dir)
}
refile()
//refile();

