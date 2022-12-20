import { openDatabase } from 'react-native-sqlite-storage';
import Constants from '../constants';
import { storeObj } from '../store/configureStore';
var db = openDatabase(
  { name: Constants.Strings.DB_NAME, location: 'default' },
  () => {
    console.log('DB connection Success');
  },
  error => {
    console.log('ERROR in openDatabase: ' + error);
  },
);

export const initDB = async store => {
  db.transaction(function (txn) {
    txn.executeSql(
      "SELECT name FROM sqlite_master WHERE type='table' AND name='Student_Table'",
      [],
      function (tx, res) {
        console.log('item:', res.rows.length);
        if (res.rows.length == 0) {
          txn.executeSql('DROP TABLE IF EXISTS table_user', []);

          /**** Create table_user Table ****/
          txn.executeSql(
            'CREATE TABLE IF NOT EXISTS table_user(id INTEGER PRIMARY KEY AUTOINCREMENT,user_name VARCHAR(30), user_contact INT(15), user_address VARCHAR(255))',
            [],
          );

          /**** Create table_emp Table ****/
          txn.executeSql(
            'CREATE TABLE IF NOT EXISTS table_emp(id INTEGER PRIMARY KEY AUTOINCREMENT,user_name VARCHAR(30), user_lastName VARCHAR(30))',
            [],
          );
        }
      },
    );
  });
};

/**Sql query to insert data into user table*/
export const insertDataToDB = (user_name, user_contact, user_address, cb) => {
  let { dispatch, getState } = storeObj.store;
  db.transaction(function (tx) {
    tx.executeSql(
      'INSERT INTO table_user (user_name, user_contact, user_address) VALUES (?,?,?)',
      [user_name, user_contact, user_address],
      (tx, results) => {
        console.log('Results', results);
        if (results.rowsAffected > 0) {
          if (cb) {
            cb(results);
          }
        } else alert('Registration Failed');
      },
    );
  });
};

export const insertDataToDB1 = (user_name, user_lastName, cb) => {
  let { dispatch, getState } = storeObj.store;
  db.transaction(function (tx) {
    tx.executeSql(
      'INSERT INTO table_emp (user_name, user_lastName) VALUES (?,?)',
      [user_name, user_lastName],
      (tx, results) => {
        console.log('Results', results);
        if (results.rowsAffected > 0) {
          if (cb) {
            cb(results);
          }
        }
      },
    );
  });
};

/**Sql query to get data into user table*/
export const getUserFromDB = cb => {
  let { dispatch, getState } = storeObj.store;
  db.transaction(function (txn) {
    txn.executeSql('SELECT * FROM table_user', [], (_tx, result) => {
      if (result.rows) {
        console.log(result.rows.raw(), 'inside');
        if (cb) {
          cb(result);
        }
      }
    });
  });
};

export const getUserFromDB1 = cb => {
  let { dispatch, getState } = storeObj.store;
  db.transaction(function (txn) {
    txn.executeSql('SELECT * FROM table_emp', [], (_tx, result) => {
      if (result.rows) {
        console.log(result.rows.raw(), 'inside');
        if (cb) {
          cb(result);
        }
      }
    });
  });
};

/**Sql query to get data by ID from user table*/
export const getUserFromDBByID = (patient_id, cb) => {
  let { dispatch, getState } = storeObj.store;
  db.transaction(function (txn) {
    // txn.executeSql("SELECT * FROM table_user WHERE id=?", [patient_id], (_tx, result) => {
    //   if (result.rows) {
    //     console.log(result.rows.raw(), "inside")
    //     if (cb) {
    //       cb(result.rows.raw())
    //     }
    //   }
    // }
    // );
  });
};

/**Sql query to insert & Update data into user table*/
export const insertOrUpdate = (
  id,
  user_name,
  user_contact,
  user_address,
  fn,
) => {
  let { dispatch, getState } = storeObj.store;
  db.transaction(txn => {
    txn.executeSql(
      `select * from table_user where id = ${id}`,
      [],
      (tx, result) => {
        if (result.rows.length) {
          txn.executeSql(
            'UPDATE table_user set user_name=?, user_contact=?, user_address=? where id=?',
            [user_name, user_contact, user_address, id],
            (t1, res) => {
              console.log('UPDATE', res);
              fn && fn(res);
            },
          );
        } else {
          txn.executeSql(
            'insert into table_user (id, user_name, user_contact, user_address) values (?,?)',
            [id, data],
            (t1, res) => {
              fn && fn(res);
            },
          );
        }
      },
    );
  });
};

/**Sql query to delete user tabel data based on ID */
export const deleteByPatientId = (id, fn) => {
  console.log('deleteByPatientId');

  db.transaction(txn => {
    txn.executeSql(`DELETE FROM table_user WHERE id=?`, [id], (t1, res) => {
      console.log('res', res);
      fn && fn(res);
    });
  });
};

/**Use sql query to delete the all user table data*/
export const deleteUserTable = fn => {
  db.transaction(txn => {
    txn.executeSql(
      `DELETE FROM table_user`,
      [],
      (tx, result) => {
        fn && fn(result);
      },
      err => {},
    );
  });
};

/**Use sql query to join the tables*/
export const joinTables = fn => {
  db.transaction(txn => {
    txn.executeSql(
      `SELECT * from table_user INNER JOIN table_emp ON table_user.id= table_emp.id`,
      [],
      (tx, result) => {
        console.log('JOI DATA', result);
        fn && fn(result);
      },
      err => {},
    );
  });
};

export const appDB = () => {
  return db;
};
