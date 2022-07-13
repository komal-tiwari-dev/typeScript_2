var objectDetails1 = {
    title: "Apple",
    status: true,
    id: 1
};
console.log(objectDetails1);
var getName = function (_a) {
    var firstName = _a.firstName, lastName = _a.lastName;
    console.log("".concat(firstName, "_").concat(lastName));
};
var detailsFirst = {
    firstName: "Jhon",
    lastName: "Copper"
};
getName(detailsFirst);
var personAddress = {
    houseNumber: 11,
    street: "random Street",
    city: "Mumbai",
    state: "Maharashtra",
    postalCode: 2436,
    country: "India"
};
console.log(personAddress);
var person1st = {
    phone: [99999999999, 88888888888],
    address: ["qwerrtty", "jahdvgadufg"],
    emails: "",
    firstName: "Atul",
    lastName: "Tiwari",
    middleName: ""
};
console.log(person1st);
