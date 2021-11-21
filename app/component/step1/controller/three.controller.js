sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel) {
		"use strict";
		let _this, _param, _param2;
		return Controller.extend("rain.com.step1.controller.three", {
			onInit: function () {
				console.log("three");

				// 페이지 갱신될때 실행되는 함수 호출
				const Detail = this.getOwnerComponent().getRouter().getRoute("three");
				const fulldDetail = this.getOwnerComponent().getRouter().getRoute("threeFull");
				Detail.attachPatternMatched(this.onMyRoutePatternMatched, this);
				fulldDetail.attachPatternMatched(this.onMyRoutePatternMatchedFull, this);

			},

			// 페이지 갱신될때 실행되는 함수
			onMyRoutePatternMatched: async function(oEvent) {
				this.byId("fullScreen").setVisible(true);
				this.byId("exitScreen").setVisible(false);
				_param = oEvent.getParameter("arguments").param;
				_param2 = oEvent.getParameter("arguments").param2;
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

			// 페이지 갱신될때 실행되는 함수
			onMyRoutePatternMatchedFull: async function(oEvent) {
				this.byId("fullScreen").setVisible(false);
				this.byId("exitScreen").setVisible(true);
				_param = oEvent.getParameter("arguments").param;
				_param2 = oEvent.getParameter("arguments").param2;
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
			_this.getOwnerComponent().getRouter().navTo("two",{param : _param});
			},
	
			// 전체화면 종료
			onExitFull: function(){
				_this.getOwnerComponent().getRouter().navTo("three", {param : _param, param2 : _param2});
			},
	
			// 전체 화면 진입
			onFull: function(){
				_this.getOwnerComponent().getRouter().navTo("threeFull", {param : _param, param2 : _param2});
			},

		});
	});
