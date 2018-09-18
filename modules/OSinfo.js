var os = require('os');
var colors = require('colors');


function getOSinfo() {

	var type = os.type();
	var release = os.release();
	var cpu = os.cpus()[0].model;
	var upTime = os.uptime();
	var userInfo = os.userInfo();

	if(type === 'Darwin'){
		type = 'OSX';
	} else if (type === 'Windows_NT') {
		type = 'Windows';
	}
	console.log('Sytem'.green, type);
	console.log('Release'.red, release);
	console.log('cpu'.yellow, cpu);
	console.log('Sytem uptime: ~'.cyan, (upTime/60).toFixed(0), 'min');
	console.log('User name:'.blue, userInfo.username);
	console.log('Home dir:'.magenta, userInfo.homedir);
}

function checkTimeHour(){
	var upTime = os.uptime();
	upTime = Number(upTime);
	var h = Math.floor(upTime/3600);
	var m = Math.floor(upTime%3600/60);
	var s = Math.floor(upTime%3600%60);
    console.log('czas to ', colors.red(h) , ' godzin ', colors.yellow(m), ' minut ',colors.green(s), 'sekund');

}

function checkTimeMinuts(){
	var upTime = os.uptime();
	upTime = Number(upTime);
	var m = Math.floor(upTime/60);
	var s = Math.floor(upTime%60%60);
    console.log('czas to ', m, ' minut ', s, 'sekund');

}

module.exports = {
	print: getOSinfo,
	checkTimeHour: checkTimeHour,
	checkTimeMinuts: checkTimeMinuts
};


