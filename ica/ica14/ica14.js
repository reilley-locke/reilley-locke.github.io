let company1 = {
    "employees": [
        {
            "firstName": "Sam",
            "department": "Tech",
            "designation": "Manager",
            "salary": 40000,
            "raiseEligible": true
        },
        {
            "firstName": "Mary",
            "department": "Finance",
            "designation": "Trainee",
            "salary": 18500,
            "raiseEligible": true
        },
        {
            "firstName": "Bill",
            "department": "HR",
            "designation": "Executive",
            "salary": 21200,
            "raiseEligible": false
        }
    ]
}

console.log('Question 1:')
console.log(company1)


let company2 = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": [
        {
            "firstName": "Sam",
            "department": "Tech",
            "designation": "Manager",
            "salary": 40000,
            "raiseEligible": true
        },
        {
            "firstName": "Mary",
            "department": "Finance",
            "designation": "Trainee",
            "salary": 18500,
            "raiseEligible": true
        },
        {
            "firstName": "Bill",
            "department": "HR",
            "designation": "Executive",
            "salary": 21200,
            "raiseEligible": false
        }
    ]
}

console.log('Question 2:')
console.log(company2)


let company3 = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": [
        {
            "firstName": "Sam",
            "department": "Tech",
            "designation": "Manager",
            "salary": 40000,
            "raiseEligible": true,
        },
        {
            "firstName": "Mary",
            "department": "Finance",
            "designation": "Trainee",
            "salary": 18500,
            "raiseEligible": true,
        },
        {
            "firstName": "Bill",
            "department": "HR",
            "designation": "Executive",
            "salary": 21200,
            "raiseEligible": false,
        },
        {
            "firstName": "Anna",
            "department": "Tech",
            "designation": "Executive",
            "salary": 25600,
            "raiseEligible": false,
        }
    ]
}

console.log('Question 3:')
console.log(company3)


let employeeArray = company3.employees;

let totalSalary = 0;
for (var i = 0; i < employeeArray.length; i++) {
    totalSalary += employeeArray[i].salary;
}
console.log('Question 4:')
console.log(totalSalary);


for (var i = 0; i < employeeArray.length; i++) {
    if (employeeArray[i].raiseEligible) {
        let currentSalary = employeeArray[i].salary;
        let raise = (employeeArray[i].salary) * .1;
        employeeArray[i].salary = currentSalary + raise;
        employeeArray[i].raiseEligible = false;
    }
}
console.log('Question 5:');
console.log(company3);

let wfhNames = ["Anna", "Sam"]
for (var i = 0; i < employeeArray.length; i++) {
    for (var n = 0; n < wfhNames.length; n++)
    {
        if (employeeArray[i].firstName == wfhNames[n])
        {
            employeeArray[i].wfh = true;
        }
        else
        {
            employeeArray[i].wfh = false;
        }
    }
}
console.log('Question 6:');
console.log(company3);