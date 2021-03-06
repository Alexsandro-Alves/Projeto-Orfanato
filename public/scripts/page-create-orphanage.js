//create map
const map = L.map("mapid").setView([-26.9101991, -49.080443], 15);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});


let marker;

/* create and add marker */
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    marker && map.removeLayer(marker)

    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})


// photos upload

function addPhotoField() {
    const container = document.querySelector('#images')
    const fieldsContainer = document.querySelectorAll('.new-upload')
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    const input = newFieldContainer.children[0]

    if (input.value == "") {
        return 
    }

    input.value = ""
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget 

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
        return
    }

    span.parentNode.remove();
}


function toggleSelect(event) {
    document.querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'))

    const button = event.currentTarget
    button.classList.add('active')

    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value  
    
}

function validate(event) {
  
    const lat= document.querySelector('[name=lat').value
    const lng= document.querySelector('[name=lng').value
  
    if (lat=="" || lng==""){
      event.preventDefault();  
      alert('Selecione um ponto no mapa!')
    }  
  
  }
  