// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Extension "mybestextension" is active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('mybestextension.whatTime', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
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
