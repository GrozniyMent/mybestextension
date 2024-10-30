// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('Extension "mybestextension" is active!');
	const disposable = vscode.commands.registerCommand('mybestextension.whatTime', function () {
		let time = new Date();
		let timestr = "Current time: " + time.getHours() + ":";
		if (time.getMinutes() < 10) timestr += "0" + time.getMinutes();
		else timestr += time.getMinutes()
		vscode.window.showInformationMessage(timestr);
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
