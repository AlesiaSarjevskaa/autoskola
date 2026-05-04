export const  getPoliceOfficer = async(id) => {
    const req = await fetch(`http://localhost:3000/policeOfficers/${id}`, {
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
export const  getAllPoliceOfficers = async() => {
    const req = await fetch("http://localhost:3000/policeOfficers", {
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
export const  createPoliceOfficer = async(formData) => {
    const req = await fetch("http://localhost:3000/policeOfficers", {
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
export const  updatePoliceOfficer = async(id, formData) => {
    const req = await fetch(`http://localhost:3000/policeOfficers/${id}`, {
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
export const  deletePoliceOfficer = async(id) => {
    const req = await fetch(`http://localhost:3000/policeOfficers/${id}`, {
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
