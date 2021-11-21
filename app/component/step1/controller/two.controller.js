sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel) {
		"use strict";
		let _this, _param;
		return Controller.extend("rain.com.step1.controller.two", {
			onInit: function () {
				console.log("two");

				// 페이지 갱신될때 실행되는 함수 호출
				const Detail = this.getOwnerComponent().getRouter().getRoute("two");
				const fulldDetail = this.getOwnerComponent().getRouter().getRoute("twoFull");
				Detail.attachPatternMatched(this.onMyRoutePatternMatched, this);
				fulldDetail.attachPatternMatched(this.onMyRoutePatternMatchedFull, this);

			},

			// 페이지 갱신될때 실행되는 함수
			onMyRoutePatternMatched: async function(oEvent) {
				this.byId("fullScreen").setVisible(true);
				this.byId("exitScreen").setVisible(false);
				_param = oEvent.getParameter("arguments").param;
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

			// 상세 페이지 라우팅
			onroutepage: function(oEvent){
				_this.getOwnerComponent().getRouter().navTo("three", {param : _param, param2 : oEvent.getSource().getCells()[0].getText()});
			},

			// 뒤로가기 버튼 클릭
			onback: function () {
			_this.getOwnerComponent().getRouter().navTo("first");
			},
	
			// 전체화면 종료
			onExitFull: function(){
				_this.getOwnerComponent().getRouter().navTo("two", {param : _param});
			},
	
			// 전체 화면 진입
			onFull: function(){
				_this.getOwnerComponent().getRouter().navTo("twoFull", {param : _param});
			},

		});
	});
