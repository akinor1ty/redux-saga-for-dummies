import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import App from './App';
import * as actions from './actions'

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
