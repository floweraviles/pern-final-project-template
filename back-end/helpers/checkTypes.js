const checkGamesTypes = (req) => {
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

const checkReviewTypes = (req) => {
    if (typeof req.title === "string" &&
        typeof req.content === "string" &&
        typeof req.reviewer === "string" &&
        typeof req.rating === "number"
    ) {
        return true
    }
}

module.exports = {
    checkGamesTypes,
    checkReviewTypes
}