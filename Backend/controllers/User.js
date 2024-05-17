import User from "../models/user.js";

//update
export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

//delete
export const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = new User.findByIdAndDelete(req.param.id);
    res.status(200).json("User has been deleted");
  } catch (error) {
    next(error);
  }
};
//get
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
//get all
export const getUsers = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const Users = await User.find({
      ...others,
      cheapestPrice: { $gt: min || 1, $lt: max || 9999 },
    }).limit(req.query.limit);
    res.status(200).json(Users);
  } catch (error) {
    next(error);
  }
};
