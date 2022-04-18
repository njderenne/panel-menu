let panelOne = ['Yamaha YXZ Accessories >', 'Yamaha Viking Accessories >', 'Yamaha Wolverine Accessories >']
let allCats = ['A-Arms and A-Arm Guards','Air Intake', 'Audio and Audio Accessories', 'Axles', 'Ball Joints', 'Batteries and Chargers', 'Bed and Tailgate', 'Body Panels and Accessories', 'Brakes', 'Bumpers and Brush Guards', 'Cab Enclosures', 'Cargo Racks', 'Cleaning Supplies', 'Clutches and Clutch Kits', 'Communications', 'Coolers', 'Doors', 'Drive Belts', 'ECU Tuners', 'Engine Performance', 'Exhaust', 'Farming Implements', 'Fender Flares and Protection', 'Fire/Medical Rescue', 'Fuel Packs and Mounts', 'Gun Rakcs/Hunting Accessories', 'Harnesses and Safety', 'Heat Shields', 'Heaters', 'Hitches and Frame Support', 'Lift Kits', 'Lighting and Electrical', 'Mirrors', 'Miscellaneous Accessories', 'Mounts, Grills, Visors and Billets', 'Oil Change/Fluids/Filters']

let openNav = () => {
    document.getElementById("mySidenav").style.width = "18rem";
    shopCat()
}
  
let closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    removeCat()
}

let openSecondNav = () => {
    document.getElementById("mySidenav").style.width = "0rem";
    document.getElementById("secondSidenav").style.width = "18rem";
    shopModelCat()
}

let closeSecondNav = () => {
    removeModelCat()
    document.getElementById("secondSidenav").style.width = "0rem";
    document.getElementById("mySidenav").style.width = "18rem";
    removeCat()
    openNav()
}

let shopCat = () => {
    for (let i = 0; i<panelOne.length; i++) {
        let el = document.createElement("a")
        el.onclick = function() {openSecondNav()}
        let elText = document.createTextNode(panelOne[i])
        el.appendChild(elText)
        el.classList.add('temp-cat')
        let element = document.getElementById('testing-ground')
        element.appendChild(el)
    }
}

let removeCat = () => {
    let elements = document.getElementsByClassName('temp-cat')
    let loopLength = elements.length
    for (let i = 0; i<loopLength; i++) {
        elements[0].remove()
    }
}

let shopModelCat = () => {
    for (let i = 0; i<allCats.length; i++) {
        let el = document.createElement("a")
        let elText = document.createTextNode(allCats[i])
        el.appendChild(elText)
        el.classList.add('temp-model-cat')
        el.href = 'testing.com'
        let element = document.getElementById('secondSidenav')
        element.appendChild(el)
    }
}

let removeModelCat = () => {
    let elements = document.getElementsByClassName('temp-model-cat')
    let loopLength = elements.length
    for (let i = 0; i<loopLength; i++) {
        elements[0].remove()
    }
}