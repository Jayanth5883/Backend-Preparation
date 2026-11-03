// Postgre sql basics -CREATE, INSERT, SELECT, UPDATE, DELETE

// What is a postgre sql ? It is a open source Relational Data Base Management system(RDBMS) is used to store ,Manage and retrive structured data.
// Data base -A collection of organized data 
// CREATE DATABASE database_name; (CREATE DATABASE -Command to create a databse ,database_name -Name of the data base)
// Table -A table is a collection of related data organized into rows and coloumns
// Row -A row represents one complete record in the table.
// Coloumn -A coloumn represents a particular type of information in a table.

// 1. create -Creating a table 
// CREATE TABLE table_name(
//     coloumn1 datatype,
//     coloumn2 datatype
// )

// Create table with constraints
// create table table_name(
//     Id serial primarykey,
//     name varchar(100),
//     email VARCHAR(150),
//     age integer
//     salary numeric(10,2)   //numeric(presecion scale)  -precesion(bothside of the decimal),scale(right side of the decimal)
// )

// important data types
// integer -Stores whole numbers
// varchar(n) -stores variable-length text
// text -Stores text
// boolean -True /false
// date - dates
// timestamp -date and time
// numeric(p,s) -presicion scale
// serial -Auto incrementing integer

// IMportant constraints
// constrains
// Primary key -uniquely identifies each record
// foreign key -connects two tables 
// unique -Prevents duplicate values
// not null -Does not all null values
// check -Validates a condition
// default -Provides a default value

// 2. INSERT is an (SQL) command used to insert new commands (rows) into an existing table .
// Insert values into all coloumns
// insert into table_name
// values(value1,value2,value3)

// insert values into specific coloumns
// insert into table_name(coloumn1,coloumn2,coloumn3)
// values(value1,value2,value3)

// Insert multiple records
// insert into table_name(coloumn1,coloumn2)
// values(value1,value2),
        //  (value3,value4),
        //  (value5,value6)

// insert and return the inserted record
// insert into table_name(coloumn1,coloumn2)
// values(value1,value2)
// returning *;

// 3. SELECT is a sql command used to retrive one or more database tables
// Retrive all coloumns - 
// SELECT * FROM table_name;

// Retrive specific coloumns -
// select coloumn1,coloumn2 from table_name;

// retrive records by where 
// select * from table_name 
// WHERE consition ;

// Retrive records using order by
// select * from table_name 
// order by column_name ASC;

// Retrive limited records 
// select * from table_name
// LIMIT number;

// REtrive unique values 
// SELECT DISTINCT column_name
// FROM table_name;

// REtrive records using multiple condiitons 
// SELECT * FROM table_name
// WHERE condition1 AND condition2;

// Clause	
// WHERE	    Filters records
// ORDER BY	Sorts records
// LIMIT	    Limits the number of records
// DISTINCT	Removes duplicate results
// GROUP BY	Groups records
// HAVING	    Filters grouped results
// OFFSET	    Skips a number of records

// 4. UPDATE -
// update table_name
// set name="ravi"
// where id=1

// 5. Delete -Remove selected or all rows  
// Truncate -Removes all rows quickly
// Drop -Remove the entire table structure and its data 

// delete from employees where id=1

// truncate table employees 

// drop table employees 