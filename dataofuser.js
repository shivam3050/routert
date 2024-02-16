import sqlite3 from 'sqlite3';
const sqlite3_verbose = sqlite3.verbose();
// Create a new SQLite database or open an existing one
const db = new sqlite3.Database('datausingjs.db');

// Create a usersdatas table
db.run(`CREATE TABLE IF NOT EXISTS usersdatas (
    ids INTEGER PRIMARY KEY,
    usernames TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
)`);

// Insert a record into the usersdatas table
db.run(`INSERT INTO usersdatas (username, email) VALUES (?, ?)`, ['john_doe', 'john@example.com'], function(err) {
    if (err) {
        return console.error(err.message);
    }
    console.log(`A row has been inserted with rowid ${this.lastID}`);
});

// Query data from the usersdatas table
db.all(`SELECT * FROM usersdatas`, [], function(err, rows) {
    if (err) {
        throw err;
    }
    rows.forEach(row => {
        console.log(row);
    });
});

// Update data in the usersdatas table
db.run(`UPDATE usersdatas SET email = ? WHERE username = ?`, ['new_email@example.com', 'john_doe'], function(err) {
    if (err) {
        return console.error(err.message);
    }
    console.log(`Row(s) updated: ${this.changes}`);
});

// Delete a record from the usersdatas table
db.run(`DELETE FROM usersdatas WHERE username = ?`, ['john_doe'], function(err) {
    if (err) {
        return console.error(err.message);
    }
    console.log(`Row(s) deleted: ${this.changes}`);
});

// Close the database connection
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Database connection closed.');
});
