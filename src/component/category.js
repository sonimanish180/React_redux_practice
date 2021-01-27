import React from 'react';
import { connect } from 'react-redux';

const Category = (props) => {
    return (
        <div>Current Active Tab: {props.currentNavTab}  This is category.</div>
    )
}

const mapStateToprops = (store) => {
    return {
        currentNavTab : store.selectedNav
    }
}

export default connect(mapStateToprops, null)(Category);