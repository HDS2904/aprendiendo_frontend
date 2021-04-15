// Exportación separada de la declaración

let listJobs = ['Jonathan', 'Javier', 'Ariana']

const NAME_BUSINESS = 'Wintatech'

const getProfile = () => {
    console.log("Esta es una empresa");
}

class Business {
    constructor(name){
        this.name = name;
    }
}

export {
    listJobs,
    NAME_BUSINESS,
    getProfile,
    Business,
}