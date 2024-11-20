document.getElementById('convert-button').addEventListener('click', function () {
    const listItems = document.querySelectorAll('#countries-list li');
    const countries = Array.from(listItems).map(li => li.textContent);
    document.getElementById('result').textContent = countries.join(', ');
});

document.getElementById('numbers-table').addEventListener('click', function (e) {
    if (e.target.tagName === 'TD') {
        const cell = e.target;
        const value = parseFloat(cell.textContent);
        if (value < 0) {
            const input = document.createElement('input');
            const saveButton = document.createElement('button');
            input.type = 'number';
            input.value = value;
            saveButton.textContent = 'Зберегти';

            // Очистка комірки і додавання елементів
            cell.innerHTML = '';
            cell.appendChild(input);
            cell.appendChild(saveButton);

            saveButton.addEventListener('click', function () {
                const newValue = parseFloat(input.value);
                if (newValue >= 0) {
                    cell.textContent = newValue;
                } else {
                    alert('Значення має бути додатним!');
                }
            });
        }
    }
});
