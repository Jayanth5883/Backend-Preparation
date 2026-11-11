// "Relationships and Joins -Primary key, foreign key, one-to-many, INNER/LEFT JOIN"

// 1.Primary key -Is a coloumn or combinations of coloumns that uniquely identifies each row in a table 
// Every table can have one primary key constraint ,A primary key connot contain null

// create table users(
//     user_id serial primary Key,    //serial automatically generated an integer Id ,Primary key make the coloumns unique and non null
//     name varchar(250),
//     emial varchar(250)
// )

// 2.Foriegn key - A foreign key is a coloumn that references a primary key or another unique key in a (diferent table or same table)
// IT connects tables and help maintain referential integrity.
// create table users(
        // user_id serial primary key,
        // name varchar(100)
// )

// create table orders(
    // order_id serial primary key,
    // user_id int ,
    // product varchar(100),

    // foriegn key (user_id),  identifies the id in the order table 
    // references users(user_id)  specifies the referenced table and coloumn
// )

// A foriegn key value must match a refernced key value 

// Relationships between tables -A relationship describes how records in one table associated
// with records in another table.
// There are three main relationship types 
// 1.)one-to-one (1:1)-One record in table A is only assosiated with only one record in table B.

// create table users(
// user_id serial primary key ,
// name varchar(100)
// )

// create table profiles(
    // profile_id serial primary key,
    // user_id int unique references users(user_id),
    // bio text
// )

// 2.)One -to -many(1:N) -One record in table A can assosiated with multiple records in table B.
// But each record in table B belongs to one record in table A.
// The foriegn key is placed on the many side which is the orders table.
// ONe user can place multiple orders 
// Each order belongs to one user

// create table orders (
//     order_id serial primary key,
//     user_id int references users(user_id),
//     product varchar(100)
// );

// 3.)Many-to-many -Multiple records in table A assosiated with multiple records in table B.
// EG -One student can enroll in many courses 
// One courses can have many students.
// A direct foreign key in either table cannot represent this relationship properly.
// We use a intermediate table also called a junction table or bridge table.
// create table student cources(
//     student_id int references students(student_id),
//     course_id int references courses(course_id),

//     primary key (student_id,course_id)
// )

// Relationship	Example	Implementation
// One-to-One	    User → Profile	    FK + UNIQUE
// One-to-Many 	User → Orders	    FK on many side
// Many-to-Many	Students ↔ Courses	Junction table

// 5.)SQL joins -what is joins -A JOIN combines rows from two are more tables based on the coloumns.
// Basic join syntax -
// select columns 
// from table1
// join table2
// on table1.column=table2.column

// A.) inner join -Returns only the rows that have only matched records from both tables.
// select 
//     users.name,
//     orders.product
// from users 
// inner join orders
// on users.user_id=orders.user_id;

// B.) LEFT JOIN (left outer join) -Return all records from the left table and matching records from the right table.
// If there is no match .then the right-side columns contain null
// select 
// users.name,
// orders.product
// from users
// left join orders
// on users.user_id=orders.user_id

// c.)Right outer join -Return all records from the right table and matching records from the left table.
// If there is no match,left side columns contain null.
// select
// users.name
// orders.product 
// from users
// right join orders
// on users.user_id=orders.user_id

// d.)Full outer join -Return all records from both tables.
// Matching records are combined 
// Unmatched left records are included 
// Unmatched right records are included
// Missing values are represented by nulll
// select 
// users.name
// orders.products
// from users 
// full outer join orders
// on users.user_id=orders.user_id

// e.)Cross join -Returns every possible combination of rows from both tables.
// select 
// colors.color
// sizes.sizes
// from colors
// cross join sizes;