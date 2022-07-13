// 1) 
interface object1 {
    title : string,
    status : boolean,
    id : number
}
const objectDetails1 :object1={
    title:"Apple",
    status:true,
    id:1
}
console.log(objectDetails1)

// 2)

interface detail{
    firstName:string,
    lastName:string
}
const getName=({firstName,lastName}:detail):void=>{
    console.log(`${firstName}_${lastName}`)
}
const detailsFirst : detail={
    firstName:"Jhon",
    lastName:"Copper"
}
getName(detailsFirst);

// 3)

interface address{
    houseNumber:Number,
    street:string,
    city:string,
    state:string,
    postalCode:number,
    country:string
}
const personAddress : address={
    houseNumber:11,
    street:"random Street",
    city:"Mumbai",
    state:"Maharashtra",
    postalCode:2436,
    country:"India"
}
console.log(personAddress)

// 4)

interface personalDetails{
    phone:number[],
    address:string[],
    emails:string|null,
    firstName:string,
    lastName:string,
    middleName:string | null
}

const person1st:personalDetails={
    phone:[99999999999,88888888888],
    address:["qwerrtty","jahdvgadufg"],
    emails: "",
    firstName:"Atul",
    lastName:"Tiwari",
    middleName:""
}
console.log(person1st)
