const API_URL = 'http://localhost:3005/timetable';
const daySelector = document.getElementById('day-selector');
const timetableBody = document.getElementById('timetable-body');
const loadingIndicator = document.getElementById('loading');

function renderTimetable(classes) {
    let html = '';
    if (classes.length === 0) {
        html = '<tr><td colspan="3" class="no-classes">No classes today.</td></tr>';
    } else {
        classes.forEach(cls => {
            html += `
                <tr>
                    <td>${cls.time}</td>
                    <td>${cls.subject}</td>
                    <td>${cls.faculty}</td>
                </tr>
            `;
        });
    }
    timetableBody.innerHTML = html;
}

function fetchTimetable(day) {
    timetableBody.innerHTML = '';
    loadingIndicator.style.display = 'block';

    fetch(`${API_URL}?day=${day}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            loadingIndicator.style.display = 'none';
            renderTimetable(data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
            loadingIndicator.style.display = 'none';
            timetableBody.innerHTML = `<tr><td colspan="3" class="no-classes" style="color: red;">Error fetching timetable. Check server connection.</td></tr>`;
        });
}

daySelector.addEventListener('change', (event) => {
    const selectedDay = event.target.value;
    fetchTimetable(selectedDay);
});

document.addEventListener('DOMContentLoaded', () => {
    // Load default day (Monday) on page load
    fetchTimetable(daySelector.value);
});