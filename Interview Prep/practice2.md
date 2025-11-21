Question 1:

You have this query that runs very slowly:

SELECT * FROM orders WHERE status = 'shipped';


Explain how you would identify why it’s slow, and what steps you’d take to optimize it.



We can identify it is slow either from the execution time or if we have latency in our application
We can avoide * and print only required columns
Maybe we can use indexing on status






Question 2:

You have this query:

SELECT COUNT(*) FROM orders WHERE customer_id = 101;


It runs fast initially, but as the table grows into millions of rows, it becomes slower.
What can you do to maintain consistent performance as data grows?




If as when table grows and become very big it becomes slower, we can apply indexing customer_id as this is a very used operation




Question 3:

Consider this query:

SELECT * FROM employees WHERE LOWER(email) = LOWER('john.doe@gmail.com');


Even though there’s an index on email, the query is still slow.
Why does that happen, and how can you fix it?



IDK
Also explain the implementation of Indexing, how is it implemented in SQL and can we index multiple columns?






Question 4:

You need to fetch orders from the last 30 days:

SELECT * FROM orders WHERE order_date >= NOW() - INTERVAL '30 days';


What optimizations can you apply if this query is slow due to a large dataset?



IDK this







Question 5:

Two developers are debating:

Dev A says: “We should use IN for filtering.”

Dev B says: “We should use EXISTS; it’s faster.”

Who’s right — and when should you prefer one over the other?



EXISTS will run 2 queries and then match them to derive ans so it would be slower so we can say A is correct










