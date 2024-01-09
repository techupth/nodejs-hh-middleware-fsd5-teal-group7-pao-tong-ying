const Validate = async (req, res, next) => {
  if (req.method === "PUT" || req.method === "POST") {
    let getTille = req.body.title;
    let getDescription = req.body.description;
    let getCategories = req.body.categories;
    if (!getTille || !getDescription || !getCategories) {
      return res.json({
        message: "please check your request body and headers ",
      });
    }
    if (getTille.length > 35) {
      return res.json({ message: "Title must not be over 35 characters" });
    }
    if (getDescription.length > 150) {
      return res.json({
        message: "Description must not exceed 150 characters",
      });
    }
    if (
      !Array.isArray(getCategories) ||
      getCategories.length === 0 ||
      getCategories[0] === ""
    ) {
      return res.json({
        message: "Categories must be an array with at least 1 value",
      });
    }
  }
  next();
};
export default Validate;
