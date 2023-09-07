/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

//Function createEmployeeRecord - parameter is an array with 4 values  
function createEmployeeRecord(employeeArray){
  return {
    firstName:  employeeArray[0],
    familyName: employeeArray[1],
    title:      employeeArray[2],
    payPerHour: employeeArray[3],
    timeInEvents:  [],
    timeOutEvents: []
  }
}

//Function to create multiple employee records
function createEmployeeRecords(employees){
  return employees.map(record => createEmployeeRecord(record))
}

//Function to create a timeIn event
function createTimeInEvent(dateStamp){
  this.timeInEvents.push({
    type: 'TimeIn',
    hour: parseInt(dateStamp.slice(-4)),
    date: dateStamp.slice(0,10)
  })
  return this
}

//Function to create a timeOut event
function createTimeOutEvent(dateStamp){
  this.timeOutEvents.push({
    type: 'TimeOut',
    hour: parseInt(dateStamp.slice(-4)),
    date: dateStamp.slice(0,10)
  })
  return this
}

//Function that calculates the hours worked when given an employee record and a date
function hoursWorkedOnDate(date){
  const timeIn  = this.timeInEvents.find(event => event.date === date).hour
  const timeOut = this.timeOutEvents.find(event => event.date === date).hour

  return (timeOut - timeIn) / 100
}

//Function that multiplies the hours worked by the employee's rate per hour
function wagesEarnedOnDate(date){
  const hoursWorked = hoursWorkedOnDate.call(this,date)
  const hourRate    = this.payPerHour

  return hoursWorked * hourRate
}

//Function to find an employee by first name
function findEmployeeByFirstName(srcArray, firstName){
  return srcArray.find((record) => record.firstName === firstName)
}

//Function to calculate payroll
function calculatePayroll(empRecords){
  return empRecords.reduce((totalPayroll, empRecord) => {
    return totalPayroll + allWagesFor.call(empRecord)
  },0)
}