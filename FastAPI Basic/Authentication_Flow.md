          +------------------+
          |     React App    |
          | (Frontend UI)    |
          +--------+---------+
                   |
         1️⃣ User enters username/password
                   |
                   v
          +------------------+
          |    FastAPI API   |
          |  /login endpoint |
          +--------+---------+
                   |
         2️⃣ Verifies user credentials
                   |
         3️⃣ Issues two tokens:
             - Access Token (short life, e.g. 5 mins)
             - Refresh Token (longer life, e.g. 7 days)
                   |
                   v
          +------------------+
          |   React stores   |
          |  both tokens in  |
          | localStorage     |
          +--------+---------+
                   |
         4️⃣ For every protected request:
             - React attaches the Access Token
             - in Authorization header:
               → Authorization: Bearer <access_token>
                   |
                   v
          +------------------+
          | FastAPI verifies |
          | access token     |
          +--------+---------+
                   |
         5️⃣ If token valid → return data
         6️⃣ If expired → React uses Refresh Token
             → Calls /refresh endpoint
             → Gets new Access Token
                   |
                   v
          +------------------+
          | FastAPI issues   |
          | new Access Token |
          +------------------+
                   |
         7️⃣ React replaces old access token
             and retries the request
