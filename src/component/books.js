import React from 'react';
import { connect } from 'react-redux';

const Books = (props) => {
    return (
        <div>Current Active Tab: {props.currentNavTab}  This is books.</div>
    )
}

const mapStateToprops = (store) => {
    return {
        currentNavTab : store.selectedNav
    }
}

export default connect(mapStateToprops, null)(Books);
