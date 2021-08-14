import SearchBox from '../components/SearchBox'
import {connect} from 'react-redux'
import {searchMoviesAction} from '../services/actions/search'

// const mapStateToProps = state => ({
//     data: state
// })

const mapDispatchToProps = (dispatch) =>{
    
    return {
        searchMoviesHandler: (data) => dispatch(searchMoviesAction(data))
    }
}

export default connect(null,mapDispatchToProps)(SearchBox)