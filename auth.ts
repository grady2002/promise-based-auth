console.clear();

const ps = require("prompt-sync");

const users = () => {
  let u: Array<Object> = [
    { username: "admin", password: "admin" },
    { username: "grady", password: "grady" },
    { username: "user", password: "user" },
  ];
  return u;
};

const authWith = (username: string = "null", password: string = "null") => {
  let bool: any = users().find((user: any) => {
    if (username == user.username && password == user.password) {
      return true;
    } else {
      return false;
    }
  });
  return bool;
};

const auth = new Promise((resolve: Function, reject: Function) => {
  let prompt: Function = ps();
  let username: string = prompt("username ? ");
  let password: string = prompt("password ? ", {
    echo: "*",
    value: "*pwb default*",
  });
  // try changing the username and password on line 24
  let oAuth = authWith(username, password);
  if (!oAuth) {
    reject("\nIncorrect username or password\n");
  } else {
    resolve(`\nLogged in as ${oAuth.username}\n`);
  }
});

auth
  .then((result: any) => {
    console.log(result);
  })
  .catch((err: string) => {
    if (err) console.error(err);
  });
