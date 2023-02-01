const supertest = require("supertest");
const {app, server} = require("../app");
const { closeDbConnection, userIdFromPhone } = require("../utils/index");

const api = supertest(app);

test("users are returned as json", async () => {
  await api
    .get("/api/users")
    .expect(200)
    .expect("Content-Type", /application\/json/)
});

test("there is at least one user", async () => {
  const response = await api.get("/api/users")
  expect(response.body.length).toBeGreaterThan(1)
});

test.skip("create one user", async () => {
  await api
    .post("/api/users")
    .send({firstName: 'Josh',
      secondName: null,
      lastName: 'Test',
      birthday: '1994/07/15',
      phone: '095623448',
      gender: 'M',
      role: 'user',})
    .expect(201)
});

test("obtain user with phone", async () => {
  const userId = await userIdFromPhone('095623448')
  await api
    .get(`/api/users/${userId}`)
    .expect(200)
});

test.skip("update user created (id = 4)", async () => {
  await api
    .put("/api/users/4")
    .send({
      secondName: 'Pedro',
      role: 'admin',
    })
    .expect(200)
});

test.skip("delete (soft delete) user created (id = 4)", async () => {
  await api
    .delete("/api/users/4")
    .expect(200)
});

afterAll(() => { 
  server.close()
  closeDbConnection()
})
