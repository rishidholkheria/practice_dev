Q1.
You have the following tables:
orders(order_id, customer_id, total_amount)
customers(customer_id, customer_name, city)

👉 Write a query to find each customer’s total order amount.
Show: customer_name, SUM(total_amount).


Using JOINS 

SELECT c.customer_name, SUM(o.total_amount) as total_sum
FROM orders o
JOIN customers c ON c.customer_id = o.customer_id
GROUP BY c.customer_id;


Using Subqueries

SELECT c.customer_name, 
(
    SELECT SUM(o.total_amount) 
    FROM orders o
    WHERE c.customer_id = o.customer_id
) as total_sum
FROM customers c;







Q2.
From the same tables, write a query to show only those customers who have placed more than 3 orders.
orders(order_id, customer_id, total_amount)
customers(customer_id, customer_name, city)

(Hint: Think GROUP BY + HAVING)


SELECT c.customer_id, COUNT(o.order_id), c.customer_name
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id
HAVING COUNT(o.order_id) > 3

For Aggregate functions we use HAVING clause





Q3.
You have a table employees(emp_id, name, department, salary)
Write a query to get the highest salary in each department, along with the employee’s name.

----- WRONG approach -----
SELECT name, MAX(salary)
FROM employees
GROUP BY department
HAVING salary = MAx
---------

SELECT e.name, e.department, d.max_sal
FROM employees
JOIN 
(
SELECT department, MAX(salary) AS max_sal
FROM employees
GROUP BY department
) d
ON e.department = d.department and e.salary = d.max_sal

“Pick the employees whose department matches m.department and whose salary equals the max salary for that department.”



Q4.
///// SAME question subquery approach
SELECT e.name, e.department, e.salary
FROM employees e
WHERE e.salary = (
    SELECT MAX(salary)
    FROM employees
    WHERE department = e.department
);





Q5.
What’s the difference between the WHERE and HAVING clauses?
When would you use one over the other?

Clause	Works On	Used For	Example
WHERE	Individual rows	Filtering before grouping	WHERE salary > 50000
HAVING	Groups (aggregated results)	Filtering after grouping	HAVING COUNT(*) > 3

🧠 Intuition:
Think of WHERE as a row-level filter and HAVING as a group-level filter.



