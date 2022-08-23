//actualiza también pero de manera manual
const someFunction = async () => {
  const user = await User.findOne({ username: "joe" });
  console.log(user);
  user.password = "minuevacontraseña";
  user.save();
};

const otherFunction = async () => {
  const user = await User.findOneAndUpdate(
    { username: "Clark" },
    { name: "Gordon Clark" },
    { new: true }
  );
  console.log(user);
};

//update busca y reemplaza
async function updateUsers() {
  const user = await User.update(
    { username: "fazt" },
    {
      password: "contraseñaSegura",
    }
  );
  console.log(user);
}

otherFunction();
