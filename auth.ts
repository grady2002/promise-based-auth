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
  let user: any = users().find((user: any) => {
    if (username == user.username && password == user.password) {
      return true;
    } else {
      return false;
    }
  });
  return user;
};

const auth = new Promise((resolve: Function, reject: Function) => {
  let prompt: Function = ps();
  let username: string = prompt("username ? ");
  let password: string = prompt("password ? ", {
    echo: "*",
    value: "*pwb default*",
  });
  let a = authWith(username, password);
  if (!a) {
    reject("\nIncorrect username or password\n");
  } else {
    resolve(`\nLogged in as ${a.username}\n`);
  }
});

auth
  .then((result: any) => {
    console.log(result);
  })
  .catch((err: string) => {
    if (err) console.error(err);
  });
