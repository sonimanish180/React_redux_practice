import React from 'react';
import { connect } from 'react-redux';

const Topic = (props) => {
    return (
        <div>Current Active Tab: {props.currentNavTab}  This is topic.</div>
    )
}

const mapStateToprops = (store) => {
    return {
        currentNavTab : store.selectedNav
    }
}

export default connect(mapStateToprops, null)(Topic);