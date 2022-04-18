sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("rain.controller.RainMainView", {
			onInit: function () {
				console.log("홈 화면");
				
			},

			onroutepage: function(oEvent){
				console.log("onroutepage");
				this.getOwnerComponent().getRouter().navTo(oEvent);
			},

		});
	});
