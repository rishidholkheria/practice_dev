Q1.
You have a table employees(emp_id, name, manager_id, department).
Write a query to show each employee’s name along with their manager’s name.

(Hint: this is a classic SELF JOIN problem.)



SELECT e.name, m.name, department
FROM employees e
JOIN employees m ON e.emp_id <> m.manager_id
    





Q2.
You have two tables:
products(prod_id, prod_name, category_id)
categories(category_id, category_name)
Write a query to display each product’s name and its category name,
including products that don’t belong to any category.



SELECT p.prod_name, c.category_name
FROM products p
LEFT JOIN categories c ON p.category_id = c.category_id






Q3.
You have orders(order_id, customer_id, amount)
and customers(customer_id, name, city)
Write a query to get the total order amount per city,
and only include cities whose total exceeds 50 000.




SELECT c.city, SUM(amount)
FROM customers c
JOIN order o ON orders.customr_id = customers.customer_id
GROUP BY c.city
HAVING SUM(amount) > 50000




Q4.
You have a table students(student_id, name, class_id)
and another classes(class_id, class_name, teacher_id).
Write a query to list each teacher with the number of students they teach,
showing even teachers who currently have no students.



SELECT c.teacher_id, COUNT(s.student_id) as number_of_students
FROM classes
LEFT JOIN students on c.class_id = s.class_id



Q5. (Concept)
Explain the difference between INNER JOIN, SELF JOIN, and CROSS JOIN,
and give a short use case for each.


Explain