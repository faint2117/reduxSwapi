import React, { Component } from 'react'
import { connect } from 'react-redux'

import DetailScreen from './detailScreen'
import DetailElement from './detailElement'
import { updateState} from '../Actions/index'

class HomeScreen extends Component {
  // onCategoryClick = async (category) => {
  //   const response = await fetch(`https://swapi.co/api/${category}`);
  //   const result = await response.json()

  //   this.props.updateState(result.results)
  // }

  render() {
    return <div>
      <button onClick={() => this.props.updateState('planets')}>Planets</button>
      <button onClick={() => this.props.updateState('starships')}>Starships</button>
      <button onClick={() => this.props.updateState('vehicles')}>Vehicles</button>
      <button onClick={() => this.props.updateState('people')}>People</button>
      <button onClick={() => this.props.updateState('films')}>Films</button>
      <button onClick={() => this.props.updateState('species')}>Species</button>

      <DetailScreen />

      <DetailElement />
      
    </div>
  }
}

function mapStateToProps(state) {
  return { categoryResults: state };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     updateState: (data) => dispatch({
//       type: 'UPDATE_STATE',
//       payload: data
//     })
//   }
// }

export default connect(mapStateToProps, { updateState })(HomeScreen)