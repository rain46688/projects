sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/Device", "./model/model", "sap/ui/core/routing/HashChanger", "sap/ui/model/json/JSONModel"
],  function (UIComponent, Device, model, HashChanger, JSONModel) {
    "use strict";

    return UIComponent.extend(
      "rain.com.step1.Component",
      {
        metadata: {
          manifest: "json"
        },
        init: function () {
          console.log("step1 Component on!");
           var oViewModel = new JSONModel({
                    editmode : 0,
                    newmode :0
                });

         UIComponent.prototype.init.apply(this, arguments);

          // set the device model
          this.setModel(model.createDeviceModel(), "device");

          // create the views based on the url/hash
          this.getRouter().initialize();

        }
      }
    );
  }
);
