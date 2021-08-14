import SearchResult from '../components/searchResults'
import {connect} from 'react-redux'

const mapStateToProps = data => ({
    data: data
})

export default connect(mapStateToProps,null)(SearchResult)