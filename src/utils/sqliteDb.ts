import {openDatabase} from 'react-native-sqlite-storage';

/***Creating a SQLite database */
const db = openDatabase(
    {name: 'DemoDb', location: 'default'},
    () => {
        console.log('DB connection Success');
    },
    error => {
        console.log('ERROR in openDatabase: ' + error);
    },
);

export const createTable = async () => {
    const query_create = `CREATE TABLE IF NOT EXISTS users(
      id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT NOT NULL,
      mobileNo TEXT NOT NULL UNIQUE, password TEXT NOT NULL
  );`;
    try {
        await db.executeSql(query_create);
    } catch (err) {
        console.log({err});
    }
};

export const insertData = async () => {
    const query_insert = 'INSERT INTO users (name, mobileNo ,password) VALUES (?, ?, ?)';
    const params = ['Xyz1', '123', '1234'];
    try {
        db.executeSql(query_insert, params, result => {
            console.log(result, 'result');
        });
        console.log('Inserted');
    } catch (err) {
        console.log('err', err);
    }
};

export const getData = () => {
    const query_insert = 'SELECT * FROM users';
    try {
        db.executeSql(query_insert, [], result => {
            console.log(result, 'result', result.rows);
            if (result.rows) {
                console.log(result.rows.raw(), 'Raw result');
            }
        });
    } catch (err) {
        console.log('err', err);
    }
};

export const updateData = () => {
    const query_update = 'UPDATE users SET mobileNo = ? WHERE id = ?';
    const params = ['987987987', '112'];

    try {
        db.executeSql(query_update, params, result => {
            console.log(result, 'result');
        });
    } catch (err) {
        console.log('err', err);
    }
};

export const deleteData = () => {
    const query_delete = 'DELETE FROM users WHERE id = ?';
    //  const query_delete = 'DELETE FROM users WHERE id IN (3,4)';
    const params = ['1'];

    try {
        db.executeSql(query_delete, params, result => {
            console.log(result, 'result');
        });
    } catch (err) {
        console.log('err', err);
    }
};
export const appDB = () => {
    return db;
};

export const closeDB = () => {
    return db.close();
};
