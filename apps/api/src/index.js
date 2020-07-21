const express = require("express");

const app = express();

app.post("/login", (req, res) => {
  res.status(200);
  res.json({
    user: {
      id: "1",
      email: "user@example.com",
      name: "John Smith",
    },
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWQiOiIxIiwiZW1haWwiOiJ1c2VyQGV4YW1wbGUuY29tIiwicm9sZXMiOlsiKjoqIl0sIm5hbWUiOiJKb2huIFNtaXRoIiwiaWF0IjoxNTE2MjM5MDIyfQ.IuZ8ts2m85uV_y5pwTSzy9vQ87XALrIfZgF_OrUoVoo",
  });
});

app.get("/resource", (req, res) => {
  const { authorization } = req.headers;
  if (authorization) {
    if (authorization.startsWith("Bearer ")) {
      const token = authorization.slice(7).trimLeft();
      res.status(200).json({
        token,
      });
      return;
    }

    res.sendStatus(401);
    return;
  }

  res.sendStatus(401);
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
