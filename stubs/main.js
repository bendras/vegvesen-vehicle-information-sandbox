/**
 * My API Sandbox
 * 
 */
 
 var initialListOfVehicleRegistrations = [
{
    registrationNumber: "KZ49817",
    "GENERALLY":{		
        "registration": "KZ 49817",
        "Brand and model": "MERCEDES-BENZ VITO 112 CDI",
        "vehicle Group": "Passenger car",
        "Registration": "2002",
        "Number of seats": "8",
        "Colour": "Undisclosed",
        "Vehicle Identification number": "VSA63809413432139",
        "First registered in Norway": "04/08/2002",
        "Registered first time on owner": "04/08/2002",
        "Registered in district": "Oslo",
        "Last EU approved": "11/10/2010",
        "Next deadline for EU approved control": "Deregistered since 08/12/2011",
        "sold date": "13/10/2011",
        "constructed": "no",
        "used Imported": "no"
    },				
    "WEIGHTS AND MEASURES":{
        "Length": "466 cm",
        "Width": "188 cm",
        "Curb weight": "2070 kg",
        "Dead weight with driver": "2145 kg",
        "Allowed total weight": "2700 kg",
        "Maximum payload": "555 kg",
        "Maximum weight trailer w / brakes": "2000 kg",
        "Maximum weight trailer w / brakes": "750 kg",
        "Maximum weight of trailer coupling": "75 kg",
        "Max gross combination weight": "4600 kg",
        "Maximum roof load": "100 kg",
        "Max axle load front": "1420 kg",
        "Max axle load behind": "1330 kg"
    },
    "ENGINE / TRANSMISSION":{
        "displacement": "2148 cm 3",
        "fuel": "diesel",
        "Engine Power / Power": "90 KW (122 HP)",
        "number of axles": "2",
        "Number of axles with operation": "1",
    },
    "TYRE RIMS":{
        "Tyres front (standard)": "195 / 70R15C",
        "Tyres rear (standard)": "195 / 70R15C",
        "speed index": "Q (160 km / h)",
        "Load index ahead": "96",
        "Load Index behind": "96",
        "pressed ahead": "55 mm",
        "pressed behind": "55 mm",
    },
    "MILEAGE":{
        "08/10/2010": "219950",
        "06/10/2010": "219889",
        "08/09/2008": "192870",
        "10/01/2007": "144070",
        "19.12.2006": "142237",
    }
},
{
    registrationNumber: "1",
    "GENERALLY":{		
        "registration": "1",
        "Brand and model": "VW PASSAT TDI",
        "vehicle Group": "Passenger car",
        "Registration": "2005",
        "Number of seats": "5",
        "Colour": "RED",
        "Vehicle Identification number": "VSA63809413432139",
        "First registered in Norway": "01/01/2005",
        "Registered first time on owner": "01/01/2007",
        "Registered in district": "Bremen",
        "Last EU approved": "11/10/2010",
        "Next deadline for EU approved control": "Deregistered since 08/12/2011",
        "sold date": "13/10/2011",
        "constructed": "no",
        "used Imported": "no"
    },				
    "WEIGHTS AND MEASURES":{
        "Length": "466 cm",
        "Width": "188 cm",
        "Curb weight": "2070 kg",
        "Dead weight with driver": "2145 kg",
        "Allowed total weight": "2700 kg",
        "Maximum payload": "555 kg",
        "Maximum weight trailer w / brakes": "2000 kg",
        "Maximum weight trailer w / brakes": "750 kg",
        "Maximum weight of trailer coupling": "75 kg",
        "Max gross combination weight": "4600 kg",
        "Maximum roof load": "100 kg",
        "Max axle load front": "1420 kg",
        "Max axle load behind": "1330 kg"
    },
    "ENGINE / TRANSMISSION":{
        "displacement": "2148 cm 3",
        "fuel": "diesel",
        "Engine Power / Power": "90 KW (122 HP)",
        "number of axles": "2",
        "Number of axles with operation": "1",
    },
    "TYRE RIMS":{
        "Tyres front (standard)": "195 / 70R15C",
        "Tyres rear (standard)": "195 / 70R15C",
        "speed index": "Q (160 km / h)",
        "Load index ahead": "96",
        "Load Index behind": "96",
        "pressed ahead": "55 mm",
        "pressed behind": "55 mm",
    },
    "MILEAGE":{
        "08/10/2010": "219950",
        "06/10/2010": "219889",
        "08/09/2008": "192870",
        "10/01/2007": "144070",
        "19.12.2006": "142237",
    }
}
     ];

// A basic route returning a canned response
Sandbox.define('/hello', 'get', function(req, res){
    // send 'Hello world' response
    res.send('Hello world');
    ;;
});


// Using stateful behaviour to simulate creating users
Sandbox.define('/vehicle', 'POST', function(req, res){
    state.registrations = state.registrations || initialListOfVehicleRegistrations;
    
    state.registrations.push(req.body);
    
    return res.json({
        status: "ok"
    });
});

// Using stateful behaviour to simulate getting all users
Sandbox.define('/vehicle', 'GET', function(req, res){
    state.registrations = state.registrations || initialListOfVehicleRegistrations;
    
    return res.json(state.registrations);
});

// Using named route parameters to simulate getting a specific user
Sandbox.define('/vehicle/{registrationNumber}', 'GET', function(req, res){
    state.registrations = state.registrations || initialListOfVehicleRegistrations;
    state.requestId = state.requestId || 1;
    
    var registrationNumber = req.params.registrationNumber;
    
    if (state.requestId === 5) {
        res.send(500, 'Service ins not available, try again later.');
        return;
    }
    
    state.requestId = state.requestId + 1;
    
    console.log("Getting user " + registrationNumber + " details");
    
    var registration = _.find(state.registrations, {
        "registrationNumber": registrationNumber
    });
    
    return res.json(registration);
});