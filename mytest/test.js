var i = 0;
exports.callback0 = function () {
    console.log(i + ": " + window.location);
    window.alert ("i = " + i);
    i = i + 1;
}

var spawn = require('child_process').spawn;
var exec = require('child_process').exec; 

exports.runCmd = function () {
   // var dir = spawn('dir', ['c:']);
   // dir.stdout.on('data', function(data) {
  //  	console.log(data);
  //  })
	exec("d:/calc.bat", function(err, stdout, stderr) {
		console.log(process.cwd())
		console.log(process.execPath)
		if(err) {
			console.log("err:" + err)
		} else {
			console.log(iconv.decode(stdout, "gbk"));
		}
	});
}