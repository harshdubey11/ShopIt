export function createUser(userData) {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch("http://localhost:8080/users", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    const email = loginInfo.email;
    const password = loginInfo.password;
    const response = await fetch("http://localhost:8080/users?email=" + email);

    const data = await response.json();
    console.log(data);
    if (data.length) {
      if (password === data[0].password) {
        resolve({ data: data[0] });
      }
      else{
        reject({ message: "User not Found" });
      }
    } else {
      reject({ message: "User not Found" });
    }
    resolve({ data });
  });
}
