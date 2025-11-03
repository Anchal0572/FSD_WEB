document.getElementById('marksForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const subject1 = parseInt(document.getElementById('subject1').value);
  const subject2 = parseInt(document.getElementById('subject2').value);
  const subject3 = parseInt(document.getElementById('subject3').value);

  const total = subject1 + subject2 + subject3;
  const average = (total / 3).toFixed(2);

  const tableBody = document.getElementById('marksTableBody');
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${name}</td>
    <td>${subject1}</td>
    <td>${subject2}</td>
    <td>${subject3}</td>
    <td>${total}</td>
    <td>${average}</td>
  `;

  tableBody.appendChild(row);

  // Clear form
  document.getElementById('marksForm').reset();
});
