CREATE DATABASE test_db



-- 1. Departments Table (The 'one' side for Employees)
CREATE TABLE Departments (
    DeptID INT PRIMARY KEY,
    DeptName VARCHAR(50) NOT NULL,
    Location VARCHAR(50)
);

-- 2. Employees Table (The 'many' side for Departments)
CREATE TABLE Employees (
    EmpID INT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    DeptID INT,
    Salary DECIMAL(10, 2),
    ManagerID INT, 
    HireDate DATE,
    FOREIGN KEY (DeptID) REFERENCES Departments(DeptID)
);

-- 3. Projects Table
CREATE TABLE Projects (
    ProjID INT PRIMARY KEY,
    ProjName VARCHAR(100) NOT NULL,
    Budget DECIMAL(12, 2)
);

-- 4. EmployeeProjects Table (Many-to-Many Join Table)
CREATE TABLE EmployeeProjects (
    EmpID INT,
    ProjID INT,
    HoursWorked INT,
    PRIMARY KEY (EmpID, ProjID),
    FOREIGN KEY (EmpID) REFERENCES Employees(EmpID),
    FOREIGN KEY (ProjID) REFERENCES Projects(ProjID)
);

INSERT INTO Departments (DeptID, DeptName, Location) VALUES
(10, 'Executive', 'New York'),
(20, 'Sales', 'Chicago'),
(30, 'IT', 'San Francisco'),
(40, 'Finance', 'New York'),
(50, 'HR', 'Chicago'),
(60, 'Marketing', 'Dallas'); 


INSERT INTO Employees (EmpID, FirstName, LastName, DeptID, Salary, ManagerID, HireDate) VALUES
(1001, 'John', 'Doe', 10, 150000.00, NULL, '2018-01-15'), 
(1002, 'Jane', 'Smith', 20, 80000.00, 1001, '2020-05-20'),
(1003, 'Peter', 'Jones', 20, 75000.00, 1002, '2021-11-01'),
(1004, 'Mary', 'Lee', 30, 95000.00, 1001, '2019-03-10'),
(1005, 'David', 'Chen', 30, 92000.00, 1004, '2022-07-25'),
(1006, 'Emily', 'Wong', 40, 110000.00, 1001, '2017-09-01'),
(1007, 'Chris', 'Evans', 40, 105000.00, 1006, '2020-04-12'),
(1008, 'Sarah', 'Brown', 50, 70000.00, 1001, '2023-01-01'),
(1009, 'Alex', 'Green', 50, 72000.00, 1008, '2023-06-15'),
(1010, 'Mike', 'Johnson', NULL, 60000.00, 1001, '2024-02-29'); 



INSERT INTO Projects (ProjID, ProjName, Budget) VALUES
(501, 'Alpha Upgrade', 50000.00),
(502, 'Customer Portal', 120000.00),
(503, 'Finance Audit', 75000.00),
(504, 'Recruitment Drive', 30000.00),
(505, 'Annual Retreat', 10000.00),
(506, 'New Server Setup', 80000.00); 



INSERT INTO EmployeeProjects (EmpID, ProjID, HoursWorked) VALUES
(1002, 501, 150), 
(1002, 502, 20),  
(1004, 501, 200), 
(1004, 506, 10), 
(1005, 502, 300),
(1005, 506, 40),
(1006, 503, 180),
(1008, 504, 250), 
(1009, 504, 200); 



SELECT * FROM EmployeeProjects
SELECT * FROM Projects
SELECT * FROM Employees
SELECT * FROM Departments




----------------------------------------------------------------------



-- INNER JOIN gets common rows from both tables
-- I need to print employee full name and department name of the employee
-- But name of department in different table and employee details in other table

SELECT * FROM Employees
SELECT * FROM Departments

SELECT
    E.FirstName,
    E.LastName,
    D.DeptName
FROM
    Employees AS E 
INNER JOIN
    Departments AS D 
ON
    E.DeptID = D.DeptID;


-- It did not print Employee 1010 - Mike because no Deparment mentioned (maybe new joinee, not alloted yet)

-- So if we need that ok I need all the employees, irrespective that department is allotted or not
-- I again need to print employee full name, department name if allocated otherwise NULL also works  


SELECT
    E.FirstName,
    E.LastName,
    D.DeptName
FROM
    Employees AS E 
LEFT JOIN
    Departments AS D 
ON
    E.DeptID = D.DeptID;



-- Lets say - Find Employees Without a Department (Filter the NULLs)

SELECT
    E.FirstName,
    E.LastName
FROM
    Employees AS E
LEFT JOIN
    Departments AS D
ON
    E.DeptID = D.DeptID
WHERE
    D.DeptID IS NULL;

-- SO the same way as in a simple table we can apply all the filters and queries here


-- The RIGHT JOIN returns all rows from the RIGHT table and the matched rows from the LEFT table.
-- Find Departments and their Employees (Even if the Department has none)

SELECT
    D.DeptName,
    E.FirstName,
    E.LastName
FROM
    Employees AS E 
RIGHT JOIN
    Departments AS D 
ON
    E.DeptID = D.DeptID;



-- SELF JOIN
-- A SELF JOIN is an INNER JOIN where you join a table to itself.
-- This is used when you need to compare records within the same table

-- Find the Employee's Manager (where both are entries in the Employees table).

SELECT
    E.FirstName AS EmployeeFirstName,
    E.LastName AS EmployeeLastName,
    M.FirstName AS ManagerFirstName,
    M.LastName AS ManagerLastName
FROM
    Employees AS E 
INNER JOIN
    Employees AS M 
ON
    E.ManagerID = M.EmpID; 

-- John Doe (the CEO) is missing because his ManagerID is NULL
-- Use LEFT SELF JOIN to include him! home work





-- SUBQUERIES
-- Subqueries and joins both let you combine data from multiple tables, 
-- but they exist because they solve different problems and offer different advantages.

-- Some logic becomes very messy with joins but is simple and readable with a subquery.

-- A Subquery is a full SELECT statement nested inside another SQL statement. It runs first and its result is then used by the outer query.
-- Think of it like a two-step calculation in math. 
-- To find out who makes more than the average salary, you must first calculate the average salary (the subquery) and 
-- then compare every employee's salary to that result (the outer query).



SELECT * FROM EmployeeProjects
SELECT * FROM Projects

SELECT * FROM Employees
SELECT * FROM Departments

-- Find the names of all employees who earn a salary greater than the average salary of all employees.
-- 1st query - Calculate the overall average salary. (INNER QUERY)
-- 2nd query - Find employees whose salary is greater than the result of Step 1. (OUTER QUERY)

SELECT
    FirstName,
    LastName,
    Salary
FROM
    Employees
WHERE
    Salary > (SELECT AVG(Salary) FROM Employees);

-- first computing the average salary and then uses that single value to filter the Employees table in the outer query.




-- Types of Subqueries

-- Single-Row Subqueries: Return zero or one row and one column. They use single-value comparison operators (=, >, <, etc.).

-- These are used when you expect the inner query to return a single, unique value.
-- Find the highest earner in the Sales department.

SELECT * FROM Employees
SELECT * FROM Departments

SELECT
    FirstName,
    LastName,
    Salary
FROM
    Employees
WHERE
    Salary = (
        SELECT
            MAX(Salary)
        FROM
            Employees
        WHERE
            DeptID = 20 -- Sales Department
    );







-- Multiple-Row Subqueries: Return one or more rows and one column. They use multiple-row comparison operators (IN, ANY, ALL).
-- These are necessary when the inner query returns a list of values.

-- Find all employees ids working on a project with a Budget over $100,000.

SELECT * FROM EmployeeProjects

SELECT
    EmpID
FROM
    EmployeeProjects
WHERE
    ProjID IN (
        SELECT
            ProjID
        FROM
            Projects
        WHERE
            Budget > 100000.00
    )

--  Making it little trickier, adding one more nesting 
-- Home work question - Find all employees working on a project with a Budget over $100,000. [ fullnames ]
SELECT
    FirstName,
    LastName
FROM
    Employees
WHERE
    EmpID IN (
        SELECT
            EmpID
        FROM
            EmployeeProjects
        WHERE
            ProjID IN (
                SELECT
                    ProjID
                FROM
                    Projects
                WHERE
                    Budget > 100000.00 -- This returns a list of ProjIDs (e.g., 502)
            )
    );




-- Multiple-Column Subqueries: Return one row but multiple columns. (Less common initially, but good to know).




-- Using ALL Operator in Subqueries
-- The ALL operator is powerful because it allows you to compare a value to every single value returned by the subquery.

-- > ALL: Greater than every value (i.e., greater than the maximum value).

-- < ALL: Less than every value (i.e., less than the minimum value).


-- Find employees who earn more than every employee in the Finance department (DeptID 40).
-- The subquery returns a list of salaries from Finance. The outer query only selects an employee if their salary is greater than 110,000.00
SELECT
    FirstName,
    LastName,
    Salary
FROM
    Employees
WHERE
    Salary > ALL (
        SELECT
            Salary
        FROM
            Employees
        WHERE
            DeptID = 40 -- Salaries: 110000.00, 105000.00
    );


-- How is it different from query qithout ALL?
-- It becomes invalid if the subquery returns multiple rows.




-- Null Values in Subquery 
-- NULL values can cause unexpected behavior, particularly with the IN operator.

-- Find employees who are NOT in Department 20 (Sales). (Demonstrating a pitfall)



-- This query shows the correct list of DeptIDs (10, 30, 40, 50, and NULL)
SELECT
    DISTINCT DeptID
FROM
    Employees
WHERE
    DeptID != 20;



-- Now, using NOT IN
SELECT
    FirstName,
    LastName
FROM
    Employees
WHERE
    DeptID NOT IN (
        SELECT
            DeptID
        FROM
            Departments
        WHERE
            DeptID = 20
    );

-- Expected Outcome: All employees except those in Dept 20 (basically NULL value will also be included)
-- Outcome we got: Mike Johnson (who has DeptID NULL) is skipped because : 
-- SQL attempts to compare NULL to 20.
-- Any comparison involving a standard operator and a NULL value (e.g., NULL = 20 or NULL != 20) results in UNKNOWN.
