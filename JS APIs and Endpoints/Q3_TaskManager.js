$(document).ready(function() {
    const API_URL = 'http://localhost:3003/tasks';
    const $taskList = $('#task-list');
    const $sortDropdown = $('#sort-dropdown');
    const $loading = $('#loading-indicator');

    function renderTasks(tasks) {
        let html = '';
        if (tasks.length === 0) {
            html = '<div class="no-tasks">No tasks found matching the filter.</div>';
        } else {
            tasks.forEach(task => {
                const checked = task.completed ? 'checked' : '';
                const completedClass = task.completed ? 'completed' : '';
                html += `
                    <li class="task-item ${completedClass}" data-id="${task.id}">
                        <div class="task-title">${task.title}</div>
                        <span class="priority-badge ${task.priority}">${task.priority}</span>
                        <label class="checkbox-label" style="margin-left: 20px;">
                            <input type="checkbox" class="task-checkbox" data-id="${task.id}" ${checked}>
                        </label>
                    </li>
                `;
            });
        }
        $taskList.html(html);
        attachCheckboxHandlers();
    }

    function fetchTasks(params = {}) {
        $loading.show();
        $taskList.empty();
        
        $.get(API_URL, params)
            .done(function(tasks) {
                $loading.hide();
                renderTasks(tasks);
            })
            .fail(function() {
                $loading.hide();
                $taskList.html('<div class="no-tasks" style="color: red;">Error fetching tasks. Check server.</div>');
            });
    }

    function toggleTaskCompleted(id, isCompleted, $taskItem) {
        const updateUrl = `${API_URL}/${id}`;
        
        $taskItem.toggleClass('completed', isCompleted);
        
        $.ajax({
            url: updateUrl,
            method: 'PATCH',
            contentType: 'application/json',
            data: JSON.stringify({ completed: isCompleted })
        })
        .done(function() {
            console.log(`Task ${id} status updated to ${isCompleted}`);
        })
        .fail(function() {
            alert('Failed to update task status on server. Reverting UI change.');
            // Revert UI change if API fails
            $taskItem.toggleClass('completed', !isCompleted);
            $taskItem.find('.task-checkbox').prop('checked', !isCompleted);
        });
    }

    function attachCheckboxHandlers() {
        $taskList.off('change', '.task-checkbox');
        $taskList.on('change', '.task-checkbox', function() {
            const taskId = $(this).data('id');
            const isCompleted = $(this).is(':checked');
            const $taskItem = $(this).closest('.task-item');
            toggleTaskCompleted(taskId, isCompleted, $taskItem);
        });
    }

    $sortDropdown.on('change', function() {
        const value = $(this).val();
        let params = {};

        if (value === 'all') {
            params = {};
        } else if (value.includes('=')) {
            const [key, val] = value.split('=');
            if (key === 'completed') {
                params[key] = val === 'true';
            } else {
                params[key] = val;
            }
        }
        
        fetchTasks(params);
    });

    fetchTasks();
});