const userApi = () => {
  const users = [];

  const addUser = (name) => {
    users.push(name);
    return users[users.length - 1];
  };

  const getAllUsers = () => {
    return users;
  };

  const deleteUser = (name) => {
    const userIndex = users.indexOf(name);
    if (userIndex < 0) {
      throw new Error("User Not Found");
    }
    users.splice(userIndex, 1);
  };

  const updateUser = (name, newName) => {
    const userIndex = users.indexOf(name);
    if (userIndex < 0) {
      throw new Error("user not found");
    }
    users[userIndex] = newName;
    return users[userIndex];
  };

  return {
    add: addUser,
    get: getAllUsers,
    del: deleteUser,
    put: updateUser,
  };
};

const api = userApi();

api.add("tim");
api.add("john");
api.add("alex");
console.log("Get All Users", api.get());

api.del("tim");
console.log("Users afte delete", api.get());

api.put("alex", "new Alex");
console.log("users after update name", api.get());
