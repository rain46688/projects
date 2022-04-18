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

			onroutepage: function(oEvent){
				console.log("onroutepage");
				this.getOwnerComponent().getRouter().navTo(oEvent);
			},

			// 페이지 갱신될때 실행되는 함수
			onMyRoutePatternMatched: async function(oEvent) {
				_this = this;
				this.example1();
				this.example2();
			
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


			// ex2
			example2 : function(){

				this.createElementsEx2();

				const example2=`			// ex2
				example2 : function(){
	
					const codeEditor = new CodeEditor(this.createId("example2"),{
						height : "20rem",
						type : "javascript"
					});
	
					const button1 = new sap.m.Button({
						type : "Success",
						text : "생성",
						press : function () {_this.ex2createBtnPress()}
					});
	
					const button2 = new sap.m.Button({
						type : "Negative",
						text : "삭제",
						press : function () {_this.ex2delBtnPress()}
					});
	
					const select1 = new sap.m.Select(this.createId("ex2sel"));
					select1.addItem(new sap.ui.core.Item({key : "Accept", text : "Accept"}));
					select1.addItem(new sap.ui.core.Item({key : "Attention", text : "Attention"}));
					select1.addItem(new sap.ui.core.Item({key : "Back", text : "Back"}));
					select1.addItem(new sap.ui.core.Item({key : "Critical", text : "Critical"}));
					select1.addItem(new sap.ui.core.Item({key : "Default", text : "Default"}));
					select1.addItem(new sap.ui.core.Item({key : "Emphasized", text : "Emphasized"}));
					select1.addItem(new sap.ui.core.Item({key : "Ghost", text : "Ghost"}));
					select1.addItem(new sap.ui.core.Item({key : "Negative", text : "Negative"}));
					select1.addItem(new sap.ui.core.Item({key : "Neutral", text : "Neutral"}));
					select1.addItem(new sap.ui.core.Item({key : "Reject", text : "Reject"}));
					select1.addItem(new sap.ui.core.Item({key : "Success", text : "Success"}));
					select1.addItem(new sap.ui.core.Item({key : "Transparent", text : "Transparent"}));
					select1.addItem(new sap.ui.core.Item({key : "Unstyled", text : "Unstyled"}));
					select1.addItem(new sap.ui.core.Item({key : "Up", text : "Up"}));
	
					const message = new sap.m.MessageStrip({
						showIcon : true,
						text : "동적으로 생성한 셀렉트 박스와 버튼을 이용해서 여러 타입의 Button을 생성하는 코드이다."
					});
	
					this.byId("example2Panel").insertContent(codeEditor, 0);
					this.byId("example2Panel").insertContent(message, 1);
					this.byId("example2Panel").insertContent(button2, 1);
					this.byId("example2Panel").insertContent(button1, 1);
					this.byId("example2Panel").insertContent(select1, 1);
	
				},
	
				// 버튼 클릭시 셀렉트 박스 값을 가져와서 함수에 파라미터로 전달하여 호출
				ex2createBtnPress : function(){
					this.buttonCreate(this.byId("ex2sel").getSelectedItem().getText());
				},
	
				// 전달받은 값으로 type에 대입해서 Button을 생성 후 Panel에 붙임
				buttonCreate : function(type){
					const button = new sap.m.Button({
						type : type,
						text : "Button2"
					});
	
					this.byId("buttonPanel2").insertContent(button, 0);
				},
	
				// Panel안에 있는 요소 삭제
				ex2delBtnPress : function(){
					this.byId("buttonPanel2").destroyContent();
				}`

				this.byId("example2").setValue(example2);
			},

			// 버튼 클릭시 셀렉트 박스 값을 가져와서 함수에 파라미터로 전달하여 호출
			ex2createBtnPress : function(){
				this.buttonCreate(this.byId("ex2sel").getSelectedItem().getText());
			},

			// 전달받은 값으로 type에 대입해서 Button을 생성 후 Panel에 붙임
			buttonCreate : function(type){
				const button = new sap.m.Button({
					type : type,
					text : "Button2"
				});

				this.byId("buttonPanel2").insertContent(button, 0);
			},

			// Panel안에 있는 요소 삭제
			ex2delBtnPress : function(){
				this.byId("buttonPanel2").destroyContent();
			},

			// example2 createElements
			createElementsEx2 : function(){
				const codeEditor = new CodeEditor(this.createId("example2"),{
					height : "40rem",
					type : "javascript"
				});

				const button1 = new sap.m.Button({
					type : "Success",
					text : "생성",
					press : function () {_this.ex2createBtnPress()}
				});

				const button2 = new sap.m.Button({
					type : "Negative",
					text : "삭제",
					press : function () {_this.ex2delBtnPress()}
				});

				const select1 = new sap.m.Select(this.createId("ex2sel"));
				select1.addItem(new sap.ui.core.Item({key : "Accept", text : "Accept"}));
				select1.addItem(new sap.ui.core.Item({key : "Attention", text : "Attention"}));
				select1.addItem(new sap.ui.core.Item({key : "Back", text : "Back"}));
				select1.addItem(new sap.ui.core.Item({key : "Critical", text : "Critical"}));
				select1.addItem(new sap.ui.core.Item({key : "Default", text : "Default"}));
				select1.addItem(new sap.ui.core.Item({key : "Emphasized", text : "Emphasized"}));
				select1.addItem(new sap.ui.core.Item({key : "Ghost", text : "Ghost"}));
				select1.addItem(new sap.ui.core.Item({key : "Negative", text : "Negative"}));
				select1.addItem(new sap.ui.core.Item({key : "Neutral", text : "Neutral"}));
				select1.addItem(new sap.ui.core.Item({key : "Reject", text : "Reject"}));
				select1.addItem(new sap.ui.core.Item({key : "Success", text : "Success"}));
				select1.addItem(new sap.ui.core.Item({key : "Transparent", text : "Transparent"}));
				select1.addItem(new sap.ui.core.Item({key : "Unstyled", text : "Unstyled"}));
				select1.addItem(new sap.ui.core.Item({key : "Up", text : "Up"}));

				const message = new sap.m.MessageStrip({
					showIcon : true,
					text : "동적으로 생성한 셀렉트 박스와 버튼을 이용해서 여러 타입의 Button을 생성하는 코드이다."
				});

				this.byId("example2Panel").insertContent(codeEditor, 0);
				this.byId("example2Panel").insertContent(message, 1);
				this.byId("example2Panel").insertContent(button2, 1);
				this.byId("example2Panel").insertContent(button1, 1);
				this.byId("example2Panel").insertContent(select1, 1);
			}
			
		});
	});
