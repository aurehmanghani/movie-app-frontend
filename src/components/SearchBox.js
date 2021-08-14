import React,{useState,useEffect} from 'react'
const SearchBox = (props)=>{

    const [search,setSearch] = useState('')

    const onChange = (e)=>{
        
        setSearch(e.target.value)

        // if(e.target.value.length >= 3){ 
        //     props.searchMoviesHandler({search_Keyword:e.target.value})
        // }
        
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {props.searchMoviesHandler({search_Keyword:search})}, 300);
        return () => clearTimeout(timeoutId);
      }, [search]);

    return(
        <div className="row pt-4">
            <div className="col-md-4">
                <div className="input-group">
                <input value={search} onChange={onChange} type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                    aria-describedby="search-addon" />
                </div>
            </div>
        </div>
    )
}

export default SearchBox