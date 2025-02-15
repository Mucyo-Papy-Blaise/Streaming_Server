const createUser = async (req, res) => {
    try {
      const data = req.body;
      console.log("body data", data); // Should log form data
      res.status(200).json({ message: "User created successfully", data });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
const getAllUsers = async () => {}
const getSingleUser = async () =>{}
const updateUser = async () => {}
const deleteUser = async () => {}

export {
    createUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser,
}