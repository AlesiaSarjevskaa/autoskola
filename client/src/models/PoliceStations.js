export const  getPoliceStation = async(id) => {
    const req = await fetch(`http://localhost:3000/policeStations/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "GET"
    });
    const data = await req.json()
    return {
        status: req.status,
        msg: data.msg,
        payload: data.payload
    }
};
export const  getAllPoliceStations = async() => {
    const req = await fetch("http://localhost:3000/policeStations", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "GET"
    });
    const data = await req.json()
    return {
        status: req.status,
        msg: data.msg,
        payload: data.payload
    }
};
export const  createPoliceStation = async(formData) => {
    const req = await fetch("http://localhost:3000/policeStations", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(formData)
    });  
    const data = await req.json()
    return {
        status: req.status,
        msg: data.msg,
        payload: data.payload
    }
};
export const  updatePoliceStation = async(id, formData) => {
    const req = await fetch(`http://localhost:3000/policeStations/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify(formData)
    });  
    const data = await req.json()
    return {
        status: req.status,
        msg: data.msg,
        payload: data.payload
    }
};
export const  deletePoliceStation = async(id) => {
    const req = await fetch(`http://localhost:3000/policeStations/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "DELETE",
    });  
    const data = await req.json()
    return {
        status: req.status,
        msg: data.msg,
        payload: data.payload
    }
};
