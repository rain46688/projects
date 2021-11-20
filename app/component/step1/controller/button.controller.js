sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/codeeditor/CodeEditor"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, CodeEditor) {
		"use strict";
		let _this;
		return Controller.extend("rain.com.step1.controller.button", {
			onInit: function () {
				console.log("button");

				const myRoute = this.getOwnerComponent().getRouter().getRoute("button");
				myRoute.attachPatternMatched(this.onMyRoutePatternMatched, this);

			},

			// 페이지 갱신될때 실행되는 함수
			onMyRoutePatternMatched: async function(oEvent) {
				_this = this;
				this.example1();
			
			},

			// ex1
			example1 : function(){

				const button = new sap.m.Button({
					type : "Default",
					text : "Button1"
				});

				this.byId("buttonPanel").insertContent(button, 0)

				// code
				const example1 = `		const button = new sap.m.Button({
					type : "Default",
					text : "Button1"
				});

				this.byId("buttonPanel").insertContent(button, 0)`;

				this.byId("example1").setValue(example1);
			},



			
		});
	});
