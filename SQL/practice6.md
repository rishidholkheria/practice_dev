Q1 — INTERSECT (Common Records)

You have two tables:
customers_online(customer_id, name, city)
customers_offline(customer_id, name, city)

👉 Write a query to find customers who purchased both online and offline.

(Hint: Think set intersection — similar to AND logic.)



SELECT on.name
FROM customers_online on
JOIN customers_offline of ON on.customers_id = of.customers_id

Tell me if above query is correct, Also i am attempting using Intersection

SELECT name

(
SELECT name
FROM customers_online
INTERSECT
SELECT name
FROM customers_offline
) AS both_ways

FROM both_ways




Q2 — EXCEPT / MINUS (Depending on SQL flavor)

Same tables:
customers_online(customer_id, name, city)
customers_offline(customer_id, name, city)

👉 Write a query to find customers who purchased online but never offline.

(In MySQL you’d use a LEFT JOIN alternative — try both ways if you can.)

Method 1
SELECT name
(
SELECT on.name
FROM customers_online on
LEFT JOIN customers_offline of ON on.customer_id = of.customer_id
)
EXCEPT
SELECT name
FROM customers_offline

Method 2
SELECT name
(
SELECT on.name
FROM customers_online on
LEFT JOIN customers_offline of ON on.customer_id = of.customer_id
)
WHERE name NOT IN
(
SELECT name
FROM customers_offlin
)






Q3 — SELF JOIN Practice

Table:
projects(project_id, project_name, parent_project_id)

👉 Write a query to show each project’s name along with its parent project’s name (if any).


SELECT project_name, parent_project_id
FROM projects

Will the above query work? If Not, why?





Q4 — JOIN + SET Filter

You have two tables:
orders(order_id, customer_id, amount)
high_value_customers(customer_id)

👉 Write a query to get only those orders that belong to high-value customers.


Idk 




Q5 — Conceptual

Explain the difference between:

INTERSECT vs INNER JOIN

EXCEPT vs LEFT JOIN with WHERE IS NULL



IDK explain































