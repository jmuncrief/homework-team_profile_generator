const Employee = require("../lib/Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        // officeNumber
        this.officeNumber = officeNumber

    }
    // getOfficeNumber()
    getOfficeNumber() {
        return this.officeNumber
    }
    // getRole() // Overridden to return 'Manager'
    getRole() {
        return "Manager"
    }
}

module.exports = Manager