sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("rain.com.step1.controller.main", {
			onInit: function () {

			},

			onroutepage: function(oEvent){
				console.log("onroutepage");
				this.getOwnerComponent().getRouter().navTo(oEvent);
			},
			
			onBack : function(){
				console.log("onBack");
				window.history.go(-1);
			}

		});
	});
