import React from 'react';
import { connect } from 'react-redux';
import UpdateNavStateActionCreator from '../redux/actions'

const NavHeader = (props) => {
    return (
        <div>
            <button onClick={() => props.setNavTab("CATEGORY")}>Category</button>
            <button onClick={() => props.setNavTab("TOPIC")}>Topic</button>
            <button onClick={() => props.setNavTab("BOOKS")}>Books</button>
        </div>
    )
}

export default connect(null, {setNavTab : UpdateNavStateActionCreator})(NavHeader);