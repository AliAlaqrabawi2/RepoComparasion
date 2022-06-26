import React , {useContext} from "react" ; 
import   "./Header.css" ; 
import SearchResult from "../searchResult/searchResult";
import {SearchContext} from "../../App"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from "@fortawesome/free-solid-svg-icons"

function Header (){
    const context = useContext(SearchContext) 
    const {setSearch,searchResult } =context; 
    
    return (
        <header> 
            <h2 className="logo"> <span className="repoLogo">Repo</span> Commparasion</h2>
                <div className="searchWrapper">
                <div className="searchBar">
            <FontAwesomeIcon className="searchIcon" icon={faSearch} />
                <input type="text" className="searchInput" placeholder="Search Repo" onChange={(e)=>setSearch(e.target.value)}   />
            </div> 
                { 
                searchResult.length>0 ? <SearchResult/>: false
                    
                }

                </div>

        </header>

            )
}
export default Header;
