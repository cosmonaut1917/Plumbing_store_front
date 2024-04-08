
// This file contains the data for the locations page. Each location has a name, address, image, size, and phone number. The data is exported to the locations page to be displayed.
import Richfield from "../src/assets/images/richfield.jpg";
import Logan from "../src/assets/images/logan.jpg";
import Ogden from "../src/assets/images/ogden.png";
import SaltLakeCity from "../src/assets/images/salt-lake-city.jpg";
import Orem from "../src/assets/images/orem.jpg";
import CederCity from "../src/assets/images/ceder-city.jpg";

const locations = [
    {
        name: "Richfield",
        address: "90 North 600 East",
        image: Richfield,
        phone: "435-896-8231",
        hours: "Monday-Friday 7:00am-5:30pm"
    },
    {
        name: "Logan",
        address: "1060 West Center Street",
        image: Logan,
        phone: "435-752-9580",
        hours: "Monday-Friday 7:00am-5:30pm"
    },
    {
        name: "Ogden",
        address: "615 west 12th street",
        image: Ogden,
        phone: " 385-333-0400",
        hours: "Monday-Friday 7:00am-5:00pm"
    },
    {
        name: "Salt Lake City",
        address: "2069 South 700 West",
        image: SaltLakeCity,
        phone: "801-973-8700",
        hours: "Monday-Friday 7:00am-5:00pm"
    },
    {
        name:"Orem",
        address: "1036 North 1430 West",
        image:Orem,
        phone: " 801-434-9700",
        hours: "Monday-Friday 7:00am-5:00pm"
    },
    {
        name: "Ceder City",
        address: "410 South Main Street",
        image: CederCity,
        phone: "435-586-4440",
        hours: "Monday-Friday 7:00am-5:30pm"
    },
    
]

export default locations;