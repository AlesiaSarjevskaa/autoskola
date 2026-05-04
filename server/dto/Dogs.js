const Model = require("../models/dogs")
//import Model from "../models/dogs.js";

module.exports = class Dogs {

    async showDogs() {
        try {
            const result = await Model.find();
            if (result && result.length !== 0) return result;
            return null;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    async showDog(id) {
        try {
        const result = await Model.findById(id);
        if (result) return result;
        return null;
    } catch (error) {
        console.log(error);
        return null;
    }
}
    async createDog(data) {
        try {
            const object = new Model({
                name: data.name,
                race: data.race,
                color: data.color,
                age: data.age

            }); 
            const result = await object.save()
            if (result) return result;
            return null;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    async updateDog(id, data) {
        try {
            const object = {
                name: data.name,
                race: data.race,
                color: data.color,
                age: data.age

            }; 
            const result = await Model.findByIdAndUpdate(id, object);
            if (result) return result;
            return null;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    async deleteDog(id) {
        try {
            const result = await Model.findByIdAndDelete(id);
            if (result) return result;
            return null;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    
}