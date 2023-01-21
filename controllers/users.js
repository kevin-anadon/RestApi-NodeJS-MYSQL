// const crearPibe = async () => {
//   try {
//     const newUser = await User.create({
//       firstName: "Pepito",
//       secondName: null,
//       lastName: "Lopez",
//       birthday: new Date().toLocaleDateString("en-EN"),
//       phone: "092028448",
//       gender: "M",
//       role: "admin",
//     });

//     console.log("Se guardo el pibe");
//   } catch (error) {
//     console.error("ERROR: ", error);
//   }
// };

const getUsers = (req, res) => {};

const getUser = (req, res) => {};

const createUser = (req, res) => {};

const updateUser = (req, res) => {};

const deleteUser = (req, res) => {};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
