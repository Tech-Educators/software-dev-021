//local storage

//TODO: I want to store Joe's data in local storage

const staff = {
  staffName: "Joe",
  staffLocation: "Norwich",
  staffRole: "TA",
  startYear: 2024,
};

//Add new data to local storage
//STEP 1: We need to turn this data into strings
//If we do not stringify, our local storage value will look like this: [object Object]

const stringifiedStaff = JSON.stringify(staff);

// {
//   "staffName": "Joe",
//   "staffLocation": "Norwich",
//   "staffRole": "TA",
//   "startYear": 2024,
// }

//STEP 2: Add the stringified data to local storage
localStorage.setItem("staff", stringifiedStaff);

//Read (GET) data from local storage
//STEP 1: Get the data from local storage
const retrievedData = localStorage.getItem("staff");

//STEP 2: Parse the stringified data to its original shape
JSON.parse(retrievedData);

//=============================================
//Delete local storage data

// localStorage.removeItem(item);
