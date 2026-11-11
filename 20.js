// DB CONCEPTS -Indexes, unique constraints, transactions, ACID, GROUP BY, ORDER BY
// 1.) Indexes -Index is a data base structure that helps retrive records faster without scanning every row in a table.
// syntax to create index- 
// CREATE INDEX idx_users_email
// ON users(email);

// CREATE INDEX -Creates an index
// idx_users_email -index name 
// ON users(email) -Creates the index on the email coloumn

// 2.) Unique constraints -A UNIQUE constraint ensures that duplicate values are not allowed in a column or combination of columns.
// create table users (
    // id int serial primary key 
    // name varchar(420)
    // email varchar(420) unique
// )

// Add unique to an existing table 
// ALTER TABLE users 
// ADD CONSTRAINT unq_user_email UNIQUE(email)

// 3.) Transactions -A transaction in a Database Management System (DBMS) is a single logical unit of work that contains
//                   one or more database operations (such as read, write, insert, update, or delete).

// create table accounts(
    // id int serial primary key 
    // name varchar(400)
    // balance NUMERIC(10,2)
// )
// insert into accounts (name,balance)
// values
// ("JOHN",88955.55)
// ("Varma",758973.5)


// start the transaction 
// begin;
// update accounts
// set balance=balance-1000
// where id=1

// update accounts
// set balance=balance+1000
// where id=2

// COMMIT (Save the both operations)

// BEGIN;
// UPDATE accounts
// SET balance = balance - 1000
// WHERE id = 1;
// ROLLBACK; (Balance returns its original value)

// BEGIN -Starts the transaction 
// COMMIT -Saves transaction changes 
// ROLL BACK -Cancels uncommitted changes 

// 4.) ACID PROPERTIES -Acid represents four important properties that makes data base transactions reliable .
// A  -atomicity ,C-consistency ,I-isolation and ,D-durability 
// Atomicity -All operations must succed or,none should succeed 
//    --If the Second operations failed then the first operation should also rolled back. This prevents partial transaction.

// C  -A transaction must move the data base from the one valid state to another valid state 
// balance NUMERIC(10,2) CHECK (balance >= 0) 
// This prevents an account from having a negative balance.
// A transaction must respect data base constraints and rules 

// I  -Concurrent transactions should not interfere with each other in a way that produces invalid results .
// Two people try to withdraw money from the same account simultaneously.
// Without proper concurrency control, both might incorrectly proceed based on the original balance.
// Isolation and appropriate locking or isolation levels help prevent such problems.

// D  -Once a transaction is succesfully commited,Its changes are permanently saved ,even if the database crashes afterward 
// Subject to the database's durability configuration and storage guarantees.

// Atomicity -All are nothing -both transfer operations succed.
// Consistency -Valid data base state -Blanace cannot become negative. 
// Isolation -Concurrent transactions are controlled -Two withdrawals don't incorrectly interfere. 
// Durability -Comitted data persists -Transfer remain saved after restart.

// -- A transaction is a group of database operations executed as one unit.
// Acid defines the four properties that makes those transactions reliable.

// 5. ) GROUP BY -Is an sql cluase that groups rows having the same value in specified columns 
// Groups similar records 
// It is commonly used with aggregate functions such as:
// COUNT() -counts records 
// SUM() -calculates total 
// AVG() -calculates average 
// MIN() -finds minimum 
// MAX() -finds maximum

// SELECT department, COUNT(*)
// FROM employees
// GROUP BY department
// HAVING COUNT(*) > 1;

// 6. ) ORDER BY -Order by is an SQL cluase used to sort query results in ascending or descending order 
// Sorts records 
// SELECT * FROM employees
// ORDER BY salary ASC department DESC;
// LIMIT 3;

// SQL query excution order -
// FROM -Select the table 
// WHERE -Filter individual rows 
// GROUP BY -Create groups 
// HAVING -Filter groups
// SELECT -Select output columns
// ORDER BY -Sort results 
// LIMIT -Restrict the result count 



