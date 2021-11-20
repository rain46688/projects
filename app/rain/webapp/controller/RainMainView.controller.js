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
				
			},

			onroutepage: function(oEvent){
				this.getOwnerComponent().getRouter().navTo(oEvent);
			},

		});
	});
