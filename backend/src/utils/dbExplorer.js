const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./data.db', (err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database successfully');

  // Function to display table structure and sample data
  const displayTableInfo = (tableName) => {
    console.log(`\nTable: ${tableName}`);

    // Get table schema
    db.all(`PRAGMA table_info(${tableName})`, [], (err, columns) => {
      if (err) {
        console.error(`Error getting schema for ${tableName}:`, err);
        return;
      }
      console.log('Columns:', columns);

      // Get all rows in the table
      db.all(`SELECT * FROM ${tableName} LIMIT 5`, [], (err, rows) => {
        if (err) {
          console.error(`Error getting data for ${tableName}:`, err);
          return;
        }
        console.log('Sample data:', rows);
      });
    });
  };

  // Get all tables in the database
  db.all(`SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'`, [], (err, tables) => {
    if (err) {
      console.error('Error getting tables:', err);
      return;
    }

    if (tables.length === 0) {
      console.log('No tables found in the database.');
      return;
    }

    console.log('\nTables in the database:');
    tables.forEach((table) => console.log(`- ${table.name}`));

    // Display info for each table
    tables.forEach((table) => displayTableInfo(table.name));
  });
});

// Close the connection after 10 seconds (to ensure all queries are completed)
setTimeout(() => {
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err);
    } else {
      console.log('Database connection closed.');
    }
  });
}, 10000);
