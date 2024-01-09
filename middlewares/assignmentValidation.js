function validateAssignmentData(req, res, next) {
    if(req.body.title.length>35){
        return res.json({ message: "Title must not be over 35 characters" });
    }
    if(req.body.description.length>150){
        return res.json({ message: "Description must not exceed 150 characters" });
    }
    if(!(Array.isArray(req.body.categories)) || req.body.categories.length === 0){
        return res.json({ message: "Categories must be an array with at least 1 value" });
    }

    // if(req.body.title.length<35 && req.body.description.length<150 && Array.isArray(req.body.categories) && req.body.categories.length > 0){
    //     next();
    // }
    next();
}

export default validateAssignmentData;