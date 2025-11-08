Q1.
Explain the difference between INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN.
When would you choose one over the other?

JOIN Type	What It Returns	Best Used When
INNER JOIN	Only matching rows in both tables	You only care about data that exists in both tables
LEFT JOIN	All rows from the left table + matched rows from right	Left table is primary, right is optional
RIGHT JOIN	All rows from right table + matched rows from left	Right table is primary
FULL OUTER JOIN	All rows from both tables, matching where possible	You want a complete view of both




Q2.
You have two tables:
employees(emp_id, name, dept_id)
departments(dept_id, dept_name)

Write a query to get all employee names along with their department name, even if some employees don’t belong to any department.



Select employees.emp_id, departments.dept_id, departments.dept_name 
FROM employees
LEFT JOIN departments ON employees.dept_id = departments.dept_id






Q3.
What’s the difference between a JOIN and a SUBQUERY?
When might you prefer a subquery over a join (and vice versa)?



JOIN:

Combines data from multiple tables horizontally (adds columns).
Useful when you want related data side-by-side.
Usually faster because SQL optimizers handle them efficiently.

SUBQUERY:

A query inside another query (nested).
Can appear in WHERE, FROM, or SELECT clauses.
Useful when the result of one query depends on another query’s result (e.g., “compare to average salary”).

More readable for “step-by-step” logic, but sometimes slower.

🧠 Intuition:
👉 Think of JOINs as merging tables.
👉 Think of SUBQUERIES as filtering based on results of another question.



Q4.
Write a query to find all employees who earn more than the average salary in the employees table.
(Table: employees(emp_id, name, salary))

Select name
FROM employees
WHERE salaray > (SELECT AVG(salary) FROM employees)
ORDER BY salary DESC




Q5.
What is a correlated subquery?
Explain with a simple example.


A correlated subquery runs once per row of the outer query.
The inner query uses a value from the outer query.

Example:

SELECT e.name, e.salary
FROM employees e
WHERE e.salary > (
    SELECT AVG(salary)
    FROM employees
    WHERE dept_id = e.dept_id
);


🧠 Intuition:
For every employee e, the subquery calculates the average within their department.
This means the inner query is “correlated” to each outer row via dept_id = e.dept_id.

✅ Use Case:
When you need to compare each row to some group-specific or row-specific calculation.



