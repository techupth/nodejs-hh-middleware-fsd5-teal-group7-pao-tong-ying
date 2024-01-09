const validateAssignmentData = (req, res, next) => {
  const assignBody = req.body;
  
  if (assignBody.title.length > 35) {
    return res
      .status(400)
      .json({ message: "Title must not be over 35 characters" });
  }if (assignBody.description.length > 150) {
    return res
      .status(400)
      .json({ message: "Description must not be over 150 characters" });
  }if(!Array.isArray(assignBody.categories)|| assignBody.categories.length===0){
    return res
    .status(400)
      .json({ message: "Categories must be an array with at least 1 value" });
  }
  next()
};
export default validateAssignmentData;
