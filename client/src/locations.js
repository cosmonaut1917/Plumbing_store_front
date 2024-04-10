// Importing images
import richfieldImage from "../src/assets/images/richfield.jpg";
import loganImage from "../src/assets/images/logan.jpg";
import ogdenImage from "../src/assets/images/ogden.png";
import saltLakeCityImage from "../src/assets/images/salt-lake-city.jpg";
import oremImage from "../src/assets/images/orem.jpg";
import cederCityImage from "../src/assets/images/ceder-city.jpg";

// Locations data with image imports
const locations = [
    {
        name: "Richfield",
        address: "90 North 600 East",
        image: richfieldImage,
        phone: "435-896-8231",
        hours: "Monday-Friday 7:00am-5:30pm",
        map: { lat: 38.7723, lng: -112.0841 }
    },
    {
        name: "Logan",
        address: "1060 West Center Street",
        image: loganImage,
        phone: "435-752-9580",
        hours: "Monday-Friday 7:00am-5:30pm",
        map: { lat: 41.73184, lng: -111.86136 }
    },
    {
        name: "Ogden",
        address: "615 west 12th street",
        image: ogdenImage,
        phone: " 385-333-0400",
        hours: "Monday-Friday 7:00am-5:00pm",
        map: { lat: 41.24443, lng: -111.99214 }
    },
    {
        name: "Salt Lake City",
        address: "2069 South 700 West",
        image: saltLakeCityImage,
        phone: "801-973-8700",
        hours: "Monday-Friday 7:00am-5:00pm",
        map: { lat: 40.72754, lng: -111.91116 }
    },
    {
        name: "Orem",
        address: "1036 North 1430 West",
        image: oremImage,
        phone: " 801-434-9700",
        hours: "Monday-Friday 7:00am-5:00pm",
        map: { lat: 40.31626, lng: -111.72976 }
    },
    {
        name: "Ceder City",
        address: "410 South Main Street",
        image: cederCityImage,
        phone: "435-586-4440",
        hours: "Monday-Friday 7:00am-5:30pm",
        map: { lat: 37.67005, lng: -113.06165 }
    },    
];

export default locations;