import React from 'react';

export default (props) => {
    return (
        <div>
            <button onClick={() => props.setNavTab("CATEGORY")}>Category</button>
            <button onClick={() => props.setNavTab("TOPIC")}>Topic</button>
            <button onClick={() => props.setNavTab("BOOKS")}>Books</button>
        </div>
    )
}
