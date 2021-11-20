sap.ui.define([
    "sap/ui/core/mvc/Controller", 
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"],
     function (
         Controller, 
         JSONModel, 
         MessageBox,
         Filter,
         FilterOperator,
         MessageToast,
         Fragment
         ) {
    "use strict"
    return Controller.extend("rain.com.step1.controller.App", {
        onInit: function () {
            console.log("step1 app init");
            this.getOwnerComponent().getRouter().attachRouteMatched(this._onRouteMatched, this); 
        },
         _onRouteMatched: function (oEvent) {
            
        },

    })
})
