const assert = require("assert")

const groupAdultsByAgeRange = (people) => {
    
    const result = {}
    
    const under21 = people.filter(under21 => (under21.age >18 && under21.age < 21))  
    if (under21!=0)
        result["20 and younger"]=under21   

    const group21to30 = people.filter(group21to30 => (group21to30.age > 20 && group21to30.age <31))
    if (group21to30!=0)
        result["21-30"]=group21to30
    

    const group31to40 = people.filter(group31to40 => (group31to40.age > 30 && group31to40.age <41))
    if (group31to40!=0)
        result["31-40"]=group31to40

    const group41to50 = people.filter(group41to50 => (group41to50.age > 40 && group41to50.age <51))
    if (group41to50!=0)
        result["41-50"]=group41to50

    const above50 = people.filter(above50 => above50.age >=51)
    if (above50!=0)
        result["51 and older"]=above50

    return result
    
}

module.exports={
    groupAdultsByAgeRange
}