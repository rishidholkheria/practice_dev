HOT RELOADING 
Load balancer



Question 1:

Your FastAPI backend has an endpoint /api/orders that returns all user orders.
As traffic grows, users complain that the dashboard is slow.

How would you identify and fix performance issues in this API?



If the dashboard is slow then maybe our server is getting overburdened. But the first way we should look into is if we can optimize the backend with current resources, maybe some optimizations in backend or even in frontend. Like in frontend if we have not applied lazy loading we can apply that so that we are not fetching too much items at once, or maybe some optimizations in backend to get Data early. 
At last if nothing works so we can go for sharding, we can scale horizontally so we have 2 servers, then we partition the data and both of the servers can handle half half data. This will make the process faster.

If there are more ways, explain them



Question 2:

Suppose your React frontend calls multiple APIs in parallel to build a dashboard — /user, /orders, /notifications.
How would you design the backend to optimize performance and reduce network latency?


We must make sure that if one API fails that does not affect the other API's response

IDK exactly explain




Question 3:

You are building a system where the user uploads a large file (say 500 MB).
What’s your approach for handling large file uploads efficiently — both frontend and backend perspective?


Again, IDK exactly explain






Question 4:

Your team plans to migrate from FastAPI to Node.js for scalability.
What differences in architecture and performance handling should you be aware of between the two frameworks?



JS is a synchronous single threaded language while in Python FastAPI we have multiple thread, it is asynch as well. But particularyly FastAPI is quite same as that of NodeJS, we can handle async tasks, node js is faster.

Explain more for interview