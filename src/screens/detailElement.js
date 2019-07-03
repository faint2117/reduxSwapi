import React from 'react';
import { connect } from 'react-redux';


const DetailElement = (props) => (
    <ul>
        {props.categorySelectResults ? printProperties(props.categorySelectResults, props): '' }
    </ul>
)

function printProperties (objectToPrint, props) {
    var result = [];
    for (const key in objectToPrint) {
        if (objectToPrint.hasOwnProperty(key)) {
            result.push(<li key={objectToPrint[key]}>{key + ': ' +objectToPrint[key]}</li>);
        }
    }

    return result;
}

function mapStateToProps({categorySelectResults}) {
    return { categorySelectResults };
}

export default connect(mapStateToProps)(DetailElement)