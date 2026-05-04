const Model = require("../models/cats")

module.exports = class Cats {

    async showCats() {
        try {
            const result = await Model.find();
            if (result && result.length !== 0) return result;
            return null;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    async showCat(id) {
        try {
        const result = await Model.findById(id);
        if (result) return result;
        return null;
    } catch (error) {
        console.log(error);
        return null;
    }
}
    async createCat(data) {
        try {
            const object = new Model({
                name: data.name,
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
    async updateCat(id, data) {
        try {
            const object = {
                name: data.name,
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
    async deleteCat(id) {
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