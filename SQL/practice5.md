The UNION operator is used to combine the result-set of two or more SELECT statements.
The UNION operator automatically removes duplicate rows from the result set.

Requirements for UNION:
Every SELECT statement within UNION must have the same number of columns
The columns must also have similar data types
The columns in every SELECT statement must also be in the same order

UNION ALL does not remove duplicates




Q1 — UNION vs UNION ALL

You have two tables:
customers_2024(customer_id, name, city)
customers_2025(customer_id, name, city)

👉 Write a query to get a combined list of all customers (no duplicates).


SELECT * FROM customers_2024
UNION 
SELECT * FROM customers_2025




Q2 — UNION + Aggregation

We have:
orders_2024(order_id, customer_id, amount)
orders_2025(order_id, customer_id, amount)

Write a query to find each customer’s total order amount across both years.
(Hint: combine → then group → sum.)

Explain what will happen if I use JOIN here with an example

(
SELECT customer_id, amount
FROM orders_2024
UNION
SELECT customer_id, amount
FROM orders_2025)
SELECT SUM(amount
)
FROM 
GROUP BY customer_id

------I didnt understand here exactly----------------

Correct query:  When you use a UNION, you must wrap it as a subquery (give it an alias).

SELECT customer_id, SUM(amount) AS total_amount
FROM (
    SELECT customer_id, amount FROM orders_2024
    UNION ALL
    SELECT customer_id, amount FROM orders_2025
) AS all_orders
GROUP BY customer_id;










Q3 — SELF JOIN Logic

You have a table:
employees(emp_id, name, manager_id, department)

👉 Write a query to show each employee’s name, their manager’s name, and department.
👉 Include even employees who don’t have a manager.



SELECT e.name, m.manager_id, e.department
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.manager_id






Q4 — View Creation

You frequently need to run this query:

SELECT c.city, SUM(o.amount) AS total_amount
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.city;

👉 Create a view called city_sales_summary to store this result for future use.


CREATE VIEW city_sales_summary AS
SELECT c.city, SUM(o.amount) AS total_amount
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.city;




Q5 — Conceptual (Very Common in Interviews)

Explain in your own words:

The difference between a VIEW and a TABLE.
When would you prefer a VIEW instead of a subquery or CTE?


IDK explain 


