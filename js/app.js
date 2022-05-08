const map = L.map("map").setView([35.8, -96], 5);
const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Coded by coder\'s gyan with ❤️';
const tileLayer = L.tileLayer(tileUrl, { attribution });

tileLayer.addTo(map);

// const icon = L.icon({
//     iconUrl: "./img/marker.png",
//     iconSize: [80, 60],
// });
// // const marker = L.marker([33.740253, -82.745857]);
// L.marker([33.740253, -82.745857], {
//         icon,
//     })
//     .bindPopup("1st real state")
//     .addTo(map);

// marker.bindPopup("1st real state");
// marker.addTo(map);

// get data to list
function generateList() {
    const ul = document.querySelector(".list");

    storeList.forEach((shop) => {
        const li = document.createElement("li");
        const div = document.createElement("div");
        const a = document.createElement("a");
        const p = document.createElement("p");

        a.addEventListener("click", () => {
            flyToStore(shop);
        });

        div.classList.add("shop-item");
        a.innerText = shop.properties.name;
        a.href = "#";
        p.innerText = shop.properties.address;

        div.appendChild(a);
        div.appendChild(p);
        li.appendChild(div);
        ul.appendChild(li);
    });
}

generateList();

const myIcon = L.icon({
    iconUrl: "./img/marker.png",
    iconSize: [30, 40],
    className: "blinking",
});

// make pop up
function makePopupContent(shop) {
    return `
    <div>
        <h4>${shop.properties.name}</h4>
        <p>${shop.properties.address}</p>
        <div class="phone-number">
            <a href="tel:${shop.properties.phone}">${shop.properties.phone}</a>
        </div>
    </div>
  `;
}

// get all properties
function onEachFeature(feature, layer) {
    layer.bindPopup(makePopupContent(feature), {
        closeButton: false,
        offset: L.point(0, -8),
    });
}
// get data to map
const shopsLayer = L.geoJSON(storeList, {
    onEachFeature: onEachFeature,
    pointToLayer: function(feature, latlng) {
        return L.marker(latlng, { icon: myIcon });
    },
});
shopsLayer.addTo(map);

// fly to location
function flyToStore(store) {
    const lat = store.geometry.coordinates[1];
    const lng = store.geometry.coordinates[0];
    map.flyTo([lat, lng], 14, {
        duration: 1,
    });
    setTimeout(() => {
        L.popup({ closeButton: false, offset: L.point(0, -8) })
            .setLatLng([lat, lng])
            .setContent(makePopupContent(store))
            .openOn(map);
    }, 2000);
}