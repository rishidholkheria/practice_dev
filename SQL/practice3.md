Q1.
We have two tables:
orders(order_id, customer_id, amount)
customers(customer_id, customer_name)

Write a query to show each customer’s name and total number of orders,
and sort the result so the customer with the most orders appears first.



xxxxxxxxxxxx WRONG xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
SELECT c.customer_name, COUNT(o.order_id) AS order_count
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.customer_name
ORDER BY order_count DESC;
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  
----CORRECT----
SELECT c.customer_name, o.order_count
FROM customers c
JOIN (
   SELECT customer_id, COUNT(order_id) AS order_count
   FROM orders
   GROUP BY customer_id
) o ON c.customer_id = o.customer_id
ORDER BY o.order_count DESC;


----------------------
🧠 Shortcut to Remember
Question pattern	Approach
“Find all X who have more than N Ys”	→ GROUP BY + HAVING
“Find the X with the highest/lowest Y in each group”	→ Subquery + JOIN
“Find top 2 salaries per department”	→ Window functions (ROW_NUMBER / DENSE_RANK)
“Find total count/sum per group”	→ GROUP BY only
-----------------------



Q2.
Using the same tables, write a query to get a list of customers who have never placed any order.
(Hint: Think carefully about LEFT JOIN + NULL, or a subquery using NOT IN.)

orders(order_id, customer_id, amount)
customers(customer_id, customer_name)



SELECT c.customer_name 
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.customer_id
WHERE o.order_id IS NULL


SELECT customer_name
FROM customers
WHERE customer_id NOT IN (SELECT customer_id FROM orders);








Q3.
You have a table:
sales(id, region, amount, sale_date)

Write a query to find the total sales amount per region for the current year,
but only include regions whose total sales exceed 1,00,000.


single table me join not req (not always, but there are chances)

SELECT region, SUM(amount)
FROM sales
WHERE YEAR(sale_date) = YEAR(CURDATE())
GROUP BY region
HAVING SUM(amount) > 100000



Q4.
You have a table employees(emp_id, name, department, salary)
Write a query to list the 2nd highest salary in each department.
(You can use a subquery — this is an important interview favorite.)

SELECT e.department, e.name, e.salary
FROM employees e
WHERE salary = (
  SELECT MAX(salary)
  FROM employees
  WHERE department = e.department
  AND salary < (
      SELECT MAX(salary)
      FROM employees
      WHERE department = e.department
  )
);




Q5.
You have a table projects(project_id, project_name, manager_id)
and a table employees(emp_id, name, manager_id)

Write a query to find the names of all employees who manage at least one project.
(Hint: Try both a JOIN approach and an EXISTS subquery approach.)


SELECT DISTINCT e.name
FROM employees e
JOIN projects p ON p.manager_id = e.emp_id;


SELECT e.name
FROM employees e
WHERE EXISTS (
  SELECT 1 
  FROM projects p 
  WHERE p.manager_id = e.emp_id
);







