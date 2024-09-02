// Fetch the page content
fetch('https://en.wikipedia.org/wiki/List_of_mango_cultivars')
  .then(response => response.text())
  .then(html => {
    // Parse the HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Find the table element
    const table = doc.querySelector('.wikitable');

    // Function to convert the table to an array of objects
    function tableToArray(table) {
      const headers = Array.from(table.querySelectorAll('thead th')).map(th => th.textContent.trim());
      const rows = Array.from(table.querySelectorAll('tbody tr'));

      return rows.map(row => {
        const cells = Array.from(row.querySelectorAll('td'));
        const rowData = {};
        cells.forEach((cell, i) => {
          if (i === 1) { // Image column special handling
            const img = cell.querySelector('img');
            rowData[headers[i]] = img ? img.src : null;
          } else {
            rowData[headers[i]] = cell.textContent.trim();
          }
        });
        return rowData;
      });
    }

    // Convert the table to an array of objects
    const tableData = tableToArray(table);
    console.log(tableData);
  })
  .catch(err => console.error(err));
