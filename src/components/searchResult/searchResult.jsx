import React , {useContext} from "react" ; 
import {SearchContext} from "../../App" 
import "./searchResult.css"

function SearchResult (){
    const context = useContext(SearchContext) 
    const {searchResult, addRepo } =context; 

    return (
      <div className="searchResult">
  { 

  searchResult.map((repo,index)=>

  <div className="repoResult d-flex" key={repo.id} onClick={()=>addRepo(repo)}>
          <div className="repoInfo d-flex">
            <img src={repo.owner.avatar_url} className="smallAvatar" / >
          <p className="repoName">{repo.full_name}</p>
          </div>            
        <div className="someInfo">
          <p>{repo.stargazers_count} Stars</p>
        </div>

          </div>
  )
 

    }
         
      </div>  

            )
}
export default SearchResult;



/**
 *
 *  <div className="repoResult d-flex">
          <div className="repoInfo d-flex">
            <p className="Avatar">Avatar</p>
          <p className="repoName">RepoName</p>
          </div>            
        <div class="someInfo">
          <p>Stars</p>
        </div>

          </div>
 */