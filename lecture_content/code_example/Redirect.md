```javascript
import express from "express";

const app = express();

const Middleware = (req, res, next) => {
  console.log("I'm a middleware");
  next();
};

const ProtectMiddleware = (req, res) => {
  res.redirect("/");
};

app.use(Middleware);
app.get("/", (req, res) => res.send("Home"));
app.get("/about-us", (req, res) => res.send("About us"));
app.get("/contact", (req, res) => res.send("Contact"));
app.get("/protected", ProtectMiddleware, (req, res) => res.send("Protected"));
// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
```
