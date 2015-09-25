# audrey-copyright

> Seed for [audrey-two](https://www.npmjs.com/package/audrey-two) VCCLI (View-Control-Command-Line-Interface) ^v2.0.0


## What this seed does?

Include a copyright on your audrey-view.

## Specifications

Audrey-two version 2.0.0 change the way of control your CLI-views. The tags, now replaced by custom audrey-seeds that you can include or not in your projects.

This node-module redefine the older audrey-two taggy "&". Now you can use it again with audrey.

## Install

Example
```
$ npm install --save audrey-two
  npm install --save audrey-copyright
```
## Usage

Example

```js
var myTerminalDisplay={
	footer:["&&myCopy"],//tell audrey where you want to display it
	myCopy:"MIT Lucas_C/llucbrell",//tell audrey what to display
	colors:{myCopy:'red'}//tell audrey wich color to use
};

var audrey2= require('audrey-two');
var audrey= audrey2('nameOfView', myTerminalDisplay);

//run your command and pass error objects to audrey

audrey.seed(["audrey-copyright-&&"]);//pass audrey the name of a new seed
 audrey.encore();//run audrey to display view
```
