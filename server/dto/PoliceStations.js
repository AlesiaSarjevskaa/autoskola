const Model = require("../models/policeStations")

module.exports = class PoliceStations {

    async showPoliceStations() {
        try {
            const result = await Model.find();
            if (result && result.length !== 0) return result;
            return null;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    async showPoliceStation(id) {
        try {
        const result = await Model.findById(id);
        if (result) return result;
        return null;
    } catch (error) {
        console.log(error);
        return null;
    }
}
    async createPoliceStation(data) {
        try {
            const object = new Model({
                name: data.name,
                stationCode: data.stationCode,
                address: data.address,
                city: data.city,
                phone: data.phone,
                operationHouse: data.operationHouse,
                vehicleCapacity: data.vehicleCapacity,
                holdingCells: data.holdingCells,
                hasDispatchCentre: data.hasDispatchCentre,
                officerCount: data.officerCount,
                email: data.email
            

            }); 
            const result = await object.save()
            if (result) return result;
            return null;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    async updatePoliceStation(id, data) {
        try {
            const object = {
                name: data.name,
                stationCode: data.stationCode,
                address: data.address,
                city: data.city,
                phone: data.phone,
                operationHouse: data.operationHouse,
                vehicleCapacity: data.vehicleCapacity,
                holdingCells: data.holdingCells,
                hasDispatchCentre: data.hasDispatchCentre,
                officerCount: data.officerCount,
                email: data.email
            }; 
            const result = await Model.findByIdAndUpdate(id, object);
            if (result) return result;
            return null;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    async deletePoliceStation(id) {
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