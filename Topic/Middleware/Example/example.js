const express = require("express");
const fs = require("fs");
const users = require("../MOCK_DATA.json");

const app = express();
const PORT = 2700;

// middleware - pluggin
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `${Date.now()}:${req.method}:${req.path}\n`,
    (err, data) => {
      next();
    }
  );
});

app.use((req, res, next) => {
  console.log("hello From Middleware 2", req.myusername);
  next();
});

app.get("/api/users", (req, res) => {
  console.log("i am in get route", req.myusername);
  return res.send(users);
});

// app.get("/users", (req, res) => {
//   const html = `
//   <ul>
//   ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
//   `;
//   res.send(html);
// });

// app.post("/api/users", (req, res) => {
//   const body = req.body;
//   users.push({ ...body, id: users.length + 1 });
//   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
//     return res.json({ status: "success", id: users.length });
//   });
// });

// app.get("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id);
//   return res.json(user);
// });

// app.post("/api/users/:id", (req, res) => {
//   // Todo Create new user
//   return res.json({ status: "Pending" });
// });

// app.patch("/api/users/:id", (req, res) => {
//   // Todo: Edit the user with id
//   return res.json({ status: "Pending" });
// });

// app.delete("/api/users/:id", (req, res) => {
//   // Todo: delete the user with id
//   return res.json({ status: "Pending" });
// });

// Other Way
app
  .route("/api/users/:id")

  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .post((req, res) => {
    // Edit User With id
    res.json({ Status: "pending" });
  })
  .patch((req, res) => {
    // Edit User With id
    res.json({ Status: "pending" });
  })
  .delete((req, res) => {
    // Delete User With id
    res.json({ Status: "pending" });
  });

app.listen(PORT, () => console.log("Server is Started"));
