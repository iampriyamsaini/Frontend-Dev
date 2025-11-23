const API_URL = 'http://localhost:3002/employees';
const employeeList = document.getElementById('employee-list');
const errorMessageDiv = document.getElementById('error-message');

function showErrorMessage(message) {
    errorMessageDiv.textContent = message;
    errorMessageDiv.style.display = 'block';
    setTimeout(() => {
        errorMessageDiv.style.display = 'none';
    }, 3000);
}

function createEmployeeRow(employee) {
    const row = document.createElement('li');
    row.className = 'employee-row';
    row.dataset.id = employee.id;
    row.dataset.status = employee.status;

    const nameSpan = document.createElement('span');
    nameSpan.className = 'employee-name';
    nameSpan.textContent = employee.name;
    row.appendChild(nameSpan);

    const statusBadge = document.createElement('span');
    statusBadge.className = 'status-badge ' + employee.status;
    statusBadge.textContent = employee.status.charAt(0).toUpperCase() + employee.status.slice(1);
    row.appendChild(statusBadge);

    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'toggle-btn ' + (employee.status === 'active' ? 'inactive-switch' : 'active-switch');
    toggleBtn.textContent = employee.status === 'active' ? 'Deactivate' : 'Activate';
    toggleBtn.addEventListener('click', () => toggleStatus(employee.id, employee.status, row, statusBadge, toggleBtn));
    row.appendChild(toggleBtn);

    return row;
}

function renderEmployees(employees) {
    employeeList.innerHTML = '';
    employees.forEach(employee => {
        employeeList.appendChild(createEmployeeRow(employee));
    });
}

function fetchEmployees() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', API_URL);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const employees = JSON.parse(xhr.responseText);
            renderEmployees(employees);
        } else {
            employeeList.innerHTML = '<li style="color:red;">Failed to load employees. Check server status.</li>';
        }
    };
    xhr.onerror = function() {
        employeeList.innerHTML = '<li style="color:red;">Network error. Failed to connect to JSON Server.</li>';
    };
    xhr.send();
}

function toggleStatus(id, currentStatus, row, badge, button) {
    const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
    const originalStatus = currentStatus;
    const url = `${API_URL}/${id}`;

    const originalBadgeClass = badge.className;
    const originalButtonClass = button.className;
    const originalButtonText = button.textContent;

    row.dataset.status = newStatus;
    badge.className = `status-badge ${newStatus}`;
    badge.textContent = newStatus.charAt(0).toUpperCase() + newStatus.slice(1);
    button.className = `toggle-btn ${newStatus === 'active' ? 'inactive-switch' : 'active-switch'}`;
    button.textContent = newStatus === 'active' ? 'Deactivate' : 'Activate';

    const xhr = new XMLHttpRequest();
    xhr.open('PATCH', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log(`Status updated for ID ${id} to ${newStatus}`);
        } else {
            showErrorMessage(`Failed to update status for ID ${id}. Reverting changes.`);
            
            row.dataset.status = originalStatus;
            badge.className = originalBadgeClass;
            badge.textContent = originalStatus.charAt(0).toUpperCase() + originalStatus.slice(1);
            button.className = originalButtonClass;
            button.textContent = originalButtonText;
        }
    };

    xhr.onerror = function() {
        showErrorMessage(`Network error. Failed to update status for ID ${id}. Reverting changes.`);
        
        row.dataset.status = originalStatus;
        badge.className = originalBadgeClass;
        badge.textContent = originalStatus.charAt(0).toUpperCase() + originalStatus.slice(1);
        button.className = originalButtonClass;
        button.textContent = originalButtonText;
    };

    xhr.send(JSON.stringify({ status: newStatus }));
}

document.addEventListener('DOMContentLoaded', fetchEmployees);