# RestApi-NodeJS-MYSQL

Rest Api using nodejs for the backend, mysql for the databse engine and sequelize for the ORM, good scaffold with MVC pattern.

[CRUD for users with this attributes: ] (https://ibb.co/Ksxz6gg)
checked with express-validator

Json web token used for authentication and roles for delete validations, password encryption with bcrypt.

Initial endpoint: (/api/[endpoint_name])

**GET** (/users y /users/:id),
**POST**(/users),
**PUT**(/users/:id),
**DELETE**(/users/:id), i did soft delete

Additional params for GET (/users): limit (10 by default) and offset (0 by default)

**POST**(/auth)

Deployed in AWS (EC2) and RDS for the database

---

**Load** testing done with JMeter (Important results):
Loop count: 0,
Ramp-up period: 0

1. Number of threads(users): 100 --> GET USERS (/api/users)
   Load time average: 75ms

   Number of threads(users): 1000 --> GET USERS (/api/users)
   Load time average: 745ms

2. Number of threads(users): 100 --> GET USER (/api/users/1)
   Load time average: 77ms

   Number of threads(users): 1000 --> GET USER (/api/users/1)
   Load time average: 1221ms

3. Number of threads(users): 100 --> POST USER (/api/users)
   Load time average: 81ms

   Number of threads(users): 1000 --> POST USER (/api/users)
   Load time average: 2382ms
