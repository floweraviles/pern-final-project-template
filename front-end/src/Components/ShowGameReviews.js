import React from 'react'


function ShowGameReviews(props) {
    const {review} = props;
    return (
        <tbody>
            <tr>{review.title}</tr>
            <tr>{review.content}</tr>
            <tr>{review.reviewer}</tr>
        </tbody>
    )
}

export default ShowGameReviews
