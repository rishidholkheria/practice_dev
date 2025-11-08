⚙️ Q3 — Total Order Amount per City (JOIN + GROUP BY + HAVING)

Your query:

SELECT c.city, SUM(amount)
FROM customers c
JOIN order o ON orders.customr_id = customers.customer_id
GROUP BY c.city
HAVING SUM(amount) > 50000




