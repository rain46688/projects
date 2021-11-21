sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel) {
		"use strict";
		let _this;
		return Controller.extend("rain.com.step1.controller.first", {
			onInit: function () {
				console.log("first");

				const myRoute = this.getOwnerComponent().getRouter().getRoute("first");
				myRoute.attachPatternMatched(this.onMyRoutePatternMatched, this);

			},

			// 페이지 갱신될때 실행되는 함수
			onMyRoutePatternMatched: async function(oEvent) {
				_this = this;
				_this.getView().setModel(new JSONModel(
					[{
					'1' : '1',
					'2' : '2',
					'3' : '3',
					'4' : '4'
					}]
				), "list");
			
			},

			// 뒤로가기 버튼 클릭
			onback: function () {
				_this.getOwnerComponent().getRouter().navTo("main");
				},
		

			// two 페이지로 라우팅
			onroutepage: function(oEvent){
				_this.getOwnerComponent().getRouter().navTo("two", {param : oEvent.getSource().getCells()[0].getText()});
			},
			
		});
	});
