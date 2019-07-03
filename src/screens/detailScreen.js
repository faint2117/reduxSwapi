import React from 'react'
import { connect } from 'react-redux'
import { updateStateSelect} from '../Actions/index'

const DetailScreen = (props) => (
    <ul>
        {
            props.categoryResults.map ? props.categoryResults.map(res => {
                var result = res.name ? res.name : res.title;
                return <li onClick={() => props.updateStateSelect(res.url)} key={result}>{result}</li>
            }) : ''
        } 
    </ul>
)

function mapStateToProps({ categoryResults }) {
    return { categoryResults };
}

export default connect(mapStateToProps, {updateStateSelect })(DetailScreen)