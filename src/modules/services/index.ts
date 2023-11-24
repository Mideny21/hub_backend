import Property from "../schema/index";



export const getAllProperties = async () => {
    const properties = await Property.findAll();
    if (!properties) {
      throw new Error("Properties not found");
    }
    return properties;
  }; 


  export const createProperties = async (payload: any) => {
    var property = await Property.create(payload);
return property
    }; 