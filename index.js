
/*eslint no-console:0 */

'use strict';


//const chalk = require ( 'chalk' );
import chalk from 'chalk';
const Logger = {
	success(msg){

		console.log(chalk.green.bold('%c OK:'),msg);
	},
	error(msg){
        
		console.log(chalk.red.bold('%c Error:'),msg);
	},
	warn(msg){
        
		console.log(chalk.yellow.bold('%c Warn:'),msg);
	},
	info(msg){
        
		console.log(chalk.blue.bold('%c info:'),msg);
	}



};
export default Logger;