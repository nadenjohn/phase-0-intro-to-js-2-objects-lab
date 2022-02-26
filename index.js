// Write your solution in this file!
const employee = {name: "Sam",
    address: "2027 43rd Ave E"
}

function updateEmployeeWithKeyAndValue(obj, key, val){
    return {...employee, [key]:val}
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, val){
    obj[key] = val;   
    return obj
}

function deleteFromEmployeeByKey(obj, key){
    const newObj = {...obj};
    delete newObj[key]
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj
}
