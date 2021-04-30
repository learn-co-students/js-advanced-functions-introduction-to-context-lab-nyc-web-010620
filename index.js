// Your code here
function createEmployeeRecord(array){
    let employee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3], 
        timeInEvents: [], 
        timeOutEvents: []
    }
    return employee
}

function createTimeInEvent(employee, date){
    let dateArray = date.split(" ")
    employee.timeInEvents.push({type: "TimeIn", hour: parseInt(dateArray[1]), date: dateArray[0]})
    return employee
}

function createTimeOutEvent(employee, date){
    let dateArray = date.split(" ")
    employee.timeOutEvents.push({type: "TimeOut", hour: parseInt(dateArray[1]), date: dateArray[0]})
    return employee
}

function createEmployeeRecords(aoa){
    return aoa.map(createEmployeeRecord)
}

function hoursWorkedOnDate(employee,date){
    let theDayExit = employee.timeOutEvents.find(item => item.date == date) 
    let theDayEnter = employee.timeInEvents.find(item => item.date == date) 
    return (theDayExit.hour - theDayEnter.hour)/100 
}

function wagesEarnedOnDate(employee,date){
    return employee.payPerHour * hoursWorkedOnDate(employee,date)
}

function allWagesFor (employee){
    return employee.timeInEvents.reduce(function(a,b){
        return a + wagesEarnedOnDate(employee, b.date)
    },0)
}

function calculatePayroll (array){
    return array.reduce (function(a,b){
        return a + allWagesFor(b)
        }, 0)
}

function findEmployeeByFirstName(srcArray,firstName){
    return srcArray.find(e => e.firstName == firstName)
} 
