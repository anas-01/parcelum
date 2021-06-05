import ParcelsModelGenerated from "./generated/ParcelsModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = ParcelsModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await ParcelsModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ParcelsModelGenerated,
  ...customModel
};
