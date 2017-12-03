const childProcess = require('child_process');
const needsPath = ['node', 'webdriver-manager'];

function spawn(cmd, parameters, options) {
  switch (process.platform) {
    case 'win32':
      const spawn = require('cross-spawn');
      return spawn(cmd, parameters, options);
    
    case 'darwin':
      if(needsPath.indexOf(cmd) !== -1){
		const shelljs = require('shelljs');
        cmd = shelljs.which(cmd).toString();
      }
      
      return childProcess.spawn(cmd, parameters, options);
    
    default:
      return childProcess.spawn(cmd, parameters, options);
  }
}

module.exports = spawn;
