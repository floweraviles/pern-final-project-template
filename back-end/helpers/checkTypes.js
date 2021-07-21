const checkTypes = (req) => {
    if (typeof req.name === "string" &&
    typeof req.console === "string" &&
    typeof req.price === "number" &&
    typeof req.release_date === "number" &&
    typeof req.favorites === "boolean" &&
    typeof req.box_image === "string" 
    ) {
        return true
    }
}

module.exports = checkTypes