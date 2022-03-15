console.clear();

const users = () => {
  let u = [
    { username: "admin", password: "admin" },
    { username: "grady", password: "grady" },
    { username: "user", password: "user" },
  ];
  return u;
};

const auth = new Promise((resolve: Function, reject: Function) => {
  const authWith = (username: string = "null", password: string = "null") => {
    let bool = users().find((user: any) => {
      if (username == user.username && password == user.password) {
        return true;
      } else {
        return false;
      }
    });
    return bool;
  };
  // try changing the username and password on line 24
  let oAuth = authWith("admin", "admin");
  if (!oAuth) {
    reject("Incorrect username or password");
  } else {
    resolve(`Logged in as ${oAuth.username}`);
  }
});

auth
  .then((result: any) => {
    console.log(result);
  })
  .catch((err: string) => {
    if (err) console.error(err);
  });
