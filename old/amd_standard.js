'use strict';
/*define([
    'require',
    'dependency'
], function(require, factory) {
    'use strict';

});
*/

//const chalk = require ( 'chalk' );
import chalk from 'chalk';
const Logger = {
	success: function(msg){

		console.log(chalk.green.bold('OK:'),msg);
	},
	error: function(msg){
        
		console.log(chalk.red.bold('Error:'),msg);
	},
	warn: function(msg){
        
		console.log(chalk.yellow.bold('Warn:'),msg);
	},
	info: function(msg){
        
		console.log(chalk.blue.bold('info:'),msg);
	}



};
export default Logger;
//module.exports = Logger;