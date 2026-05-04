const Model = require("../models/policeOfficers")

module.exports = class PoliceOfficers {

    async showPoliceOfficers() {
        try {
            const result = await Model.find();
            if (result && result.length !== 0) return result;
            return null;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    async showPoliceOfficer(id) {
        try {
        const result = await Model.findById(id);
        if (result) return result;
        return null;
    } catch (error) {
        console.log(error);
        return null;
    }
}
    async createPoliceOfficer(data) {
        try {
            const object = new Model({
                name: data.name,
                badge: data.badge,
                rank: data.rank,
                department: data.department,
                unit: data.unit,
                gender: data.gender,
                nationality: data.nationality,
                address: data.address,
                phone: data.phone,
                email: data.email,
                education: data.education,
                city: data.city

            }); 
            const result = await object.save()
            if (result) return result;
            return null;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    async updatePoliceOfficer(id, data) {
        try {
            const object = {
                name: data.name,
                badge: data.badge,
                rank: data.rank,
                department: data.department,
                unit: data.unit,
                gender: data.gender,
                nationality: data.nationality,
                address: data.address,
                phone: data.phone,
                email: data.email,
                education: data.education,
                city: data.city

            }; 
            const result = await Model.findByIdAndUpdate(id, object);
            if (result) return result;
            return null;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    async deletePoliceOfficer(id) {
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