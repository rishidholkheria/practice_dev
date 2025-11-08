-- First teaching complete theory portion - Data types, PK, FK


--Usually usefull in organisations

EXEC sp_databases;
SELECT name FROM sys.databases;

sp_databases   ---- brings default dbs if none made


-- Creating a Database 
CREATE DATABASE retail_db


-- USE THAT DB
USE retail_db



We’ll create two tables:

Customers – stores customer details
Orders – stores customer order details


-- Key Points here : 
Primary key, IDENTITY = Autoincrement (means: start from 1, increase by 1 for each new record.)
UNIQUE
NOT NULL 
Characterstics of Primary key - 
1. A primary key uniquely identifies each field
2. A table can only take one primary key
3. A primary key column cannot accept null values


CREATE TABLE Customers (
  customer_id INT PRIMARY KEY IDENTITY(1,1),
  name VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE,
  city VARCHAR(50)
);


INSERT INTO Customers (name, email, city)
VALUES 
('Ravi Kumar', 'ravi@example.com', 'Delhi'),
('Anita Sharma', 'anita@example.com', 'Mumbai'),
('Rohit Das', 'rohit@example.com', 'Chennai');




--- One more table 

CREATE TABLE Orders (
  order_id INT PRIMARY KEY IDENTITY(1,1),
  order_date DATE NOT NULL,
  delivery_date DATE,
  amount DECIMAL(10,2),
  customer_id INT,
  FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);

INSERT INTO Orders (order_date, delivery_date, amount, customer_id)
VALUES
('2025-11-01', '2025-11-05', 1500.00, 1),
('2025-11-03', '2025-11-07', 800.00, 2),
('2025-11-04', '2025-11-06', 1200.50, 1),
('2025-11-05', NULL, 950.75, 3);







-- ALTER TABLE : Adding a column, Drop a column, Rename, modify data type


-- modifying datatype
ALTER TABLE Customers ALTER COLUMN city VARCHAR(100);




-- adding a new column
ALTER TABLE Customers
ADD age INT;
{
  Basic syntax : ALTER TABLE table_name
                 ADD column_name data_type [NULL | NOT NULL] [DEFAULT default_value];
}




-- dropping a column
ALTER TABLE table_name
DROP COLUMN column_name;





-- Adding a property but later using ALTER
-- Note: This command will fail if the column already has NULL values.

ALTER TABLE Customers
ALTER COLUMN email VARCHAR(100) NOT NULL;





-- RENAMING
EXEC sp_rename 'Customers.city', 'customer_city', 'COLUMN';






----------------------------------------------------------------------------------------------------------------------------


student_mgt_db


-- Creating DB
CREATE DATABASE student_mgt_db
CREATE DATABASE demo



-- Using a DB
USE student_mgt_db




-- Checking the DB - can be checked manually also though
SELECT DB_NAME()




-- CREATE TABLE
CREATE TABLE Students (
  student_id INT PRIMARY KEY,
  name VARCHAR(50),
  age INT,
  class VARCHAR(10),
  city VARCHAR(30)
);




-- SHOW Tables
EXEC sp_tables;





INSERT INTO Students VALUES
(1, 'Aarav', 15, '10A', 'Delhi'),
(2, 'Riya', 14, '9B', 'Mumbai'),
(3, 'Kabir', 15, '10A', 'Chennai'),
(4, 'Neha', 13, '8A', 'Delhi'),
(5, 'Aditya', 16, '11A', 'Pune'),
(6, 'Sneha', 14, '9A', 'Bangalore'),
(7, 'Ishaan', 15, '10B', 'Delhi'),
(8, 'Meera', 13, '8B', 'Kolkata'),
(9, 'Dev', 16, '11A', 'Mumbai'),
(10, 'Tanya', 14, '9B', 'Jaipur');


INSERT INTO Courses VALUES
(101, 'Maths', 'Mr. Sharma'),
(102, 'Science', 'Ms. Gupta'),
(103, 'English', 'Mr. Verma'),
(104, 'History', 'Mrs. Rao'),
(105, 'Computer', 'Mr. Singh');


INSERT INTO Enrollments VALUES
(1, 1, 101, 85),
(2, 1, 102, 90),
(3, 1, 105, 95),

(4, 2, 101, 70),
(5, 2, 103, 82),
(6, 2, 104, 76),

(7, 3, 103, 88),
(8, 3, 102, 91),
(9, 3, 101, 79),

(10, 4, 102, 75),
(11, 4, 104, 80),

(12, 5, 101, 89),
(13, 5, 102, 93),
(14, 5, 105, 98),

(15, 6, 103, 85),
(16, 6, 105, 90),

(17, 7, 101, 83),
(18, 7, 103, 87),

(19, 8, 104, 77),
(20, 8, 105, 81),

(21, 9, 101, 92),
(22, 9, 102, 88),
(23, 9, 103, 79),

(24, 10, 104, 84),
(25, 10, 105, 91);





-- GET/RETREIVE DATA 
SELECT * FROM Courses;

SELECT * FROM Enrollments;

SELECT * FROM Students;
SELECT student_id, name FROM Students WHERE class = '10A'





-- CONDITIONS
SELECT student_id, name FROM Students WHERE age >= 15





-- ALIAS 
SELECT name AS StudentName, city AS Location
FROM Students;

-- Think of alias like giving a “nickname” to a table or column just for one query.




-- DISTINCT
SELECT DISTINCT city 
FROM Students




-- CONCATENATION 
-- Combine multiple text columns into one result.
-- We can use them if we need to create some sentences
SELECT name + ' is from ' + city AS StudentInfo
FROM Students;





-- LOGICAL OPERATORS (AND, OR, NOT)
-- Used to combine multiple conditions inside WHERE.

-- AND
SELECT * FROM Students
WHERE age >= 13 AND city = 'Delhi';

-- OR
SELECT * FROM Students
WHERE city = 'Delhi' OR city = 'Mumbai';

-- NOT
SELECT * FROM Students
WHERE NOT city = 'Delhi';

-- AND means “both conditions must be true.”
-- OR means “at least one must be true.”
-- NOT means “exclude this condition.”






-- LIKE Operator (Pattern Matching)
-- Used with WHERE to search for patterns in text.
-- Use % for any number of characters and _ for a single character.

-- FOR EX : 
-- LIKE can be used when you don’t know the full spelling of a name

-- Starts with A
SELECT * FROM Students
WHERE name LIKE 'A%';

-- Ends with 'a'
SELECT * FROM Students
WHERE name LIKE '%a';

-- Contains 'ee'
SELECT * FROM Students
WHERE name LIKE '%ee%';

-- Second letter is 'a'
SELECT * FROM Students
WHERE name LIKE '_a%';







-- SPECIAL OPERATORS (IN, BETWEEN, IS NULL)

-- IN matches from a list
SELECT * FROM Students
WHERE city IN ('Delhi', 'Mumbai');

SELECT name FROM Students 
WHERE age IN (13,14)


-- BETWEEN checks range
SELECT * FROM Enrollments
WHERE marks BETWEEN 80 AND 90;


-- IS NULL checks for NULL values
SELECT * FROM Students
WHERE city IS NOT NULL;





-- CLAUSES (Building the Query Step-by-Step)
-- Usually used to 
-- Filter and retrieve specific records from a database.
-- Group data based on certain attributes.
-- Sort query results in ascending or descending order.
-- Limit the number of records displayed in a query result.



-- WHERE, FROM are clauses 
SELECT * FROM Enrollments
WHERE marks BETWEEN 70 AND 90;


-- GROUP BY
SELECT course_id, AVG(marks) AS avg_marks
FROM Enrollments
GROUP BY course_id;


-- ORDER BY
SELECT * FROM Enrollments ORDER BY marks DESC;


-- Combining these 2
SELECT course_id, AVG(marks) AS avg_marks
FROM Enrollments
GROUP BY course_id
ORDER BY avg_marks DESC;





-- HAVING 

-- In SQL, you cannot use SELECT * with GROUP BY unless all the columns in SELECT are either:
-- Included in the GROUP BY clause, or
-- Used with an aggregate function like COUNT(), MAX(), AVG(), etc.

-- Not working Code
SELECT * FROM Students
GROUP BY class
HAVING Count(name) > 2


-- Working 
SELECT city, COUNT(name) AS total_students
FROM Students
GROUP BY city
HAVING COUNT(name) > 2;



-- Difference between WHERE and HAVING

-- Both use for Filters
-- WHERE filters rows before grouping.
-- HAVING filters groups after aggregation. 

SELECT class, COUNT(*) AS total_students
FROM Students
WHERE city = 'Delhi'
GROUP BY class
HAVING COUNT(*) > 2;





SELECT * FROM Enrollments


-- UPDATE
UPDATE Students 
SET city = 'Pune' 
WHERE student_id = 2;



-- DELETE 

-- THIS WILL NOT WORK DIRECTLY - Refrencial Integrity Error 
DELETE FROM Students WHERE student_id = 4;

DELETE FROM Enrollments WHERE student_id = 4;
DELETE FROM Students WHERE student_id = 4;



-- TRUNCATE - We don't use it usually 
-- TRUNCATE TABLE table_name

-- DROP DATABASE 
-- DROP DATABASE db_name

-- DROP TABLE 
-- DROP TABLE table_name






-- CREATE & INSERT

-- First we need to understand : Data types, Primary and Foreign key