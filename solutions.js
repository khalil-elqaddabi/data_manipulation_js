import { employees } from "./dataset.js"
//easy



// 1

const getFirstEmployeeFirstName = (employees) => employees[0].firstName
console.log(getFirstEmployeeFirstName(employees))



// 2

const getLastEmployeeLastName = (employees) => employees[employees.length -1].lastName;
console.log(getLastEmployeeLastName(employees))

// 3




const getEmployeeDepartmentById = (employees, id) => {
    const employee = employees.find(emp => emp.id === id)
    return employee ? employee.department : undefined
}
console.log(getEmployeeDepartmentById(employees, 5)); 



// On suppose ici que tu importes correctement le tableau employees
// import { employees } from "./dataset.js"

function afficherEmployes() {
    const tbody = document.getElementById("employees-tbody");
    tbody.innerHTML = ""; // Vider le contenu actuel

    employees.forEach(emp => {
        const tr = document.createElement("tr");
        
        // Remplir les cellules
        tr.innerHTML = `
            <td>${emp.lastName}</td>
            <td>${emp.firstName}</td>
            <td>${emp.department}</td>
            <td>${emp.position}</td>
            <td>${emp.salary}</td>
            <td>...</td>
        `;
        tbody.appendChild(tr);
    });
}
