import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Repo from "./components/Repo/Repo";
import axios from "axios";
export const SearchContext = React.createContext();

function App() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [repoList, setRepoList ] = useState([]);

  function addRepo(repo) {
    setRepoList([...repoList, repo]);
    setSearchResult([]);
  }

  function removeRepo(index) {
    const repo=  [...repoList] ; 
    repo.splice(index,1);
    setRepoList(repo);
  }

  useEffect(() => {
    if (search !== "") {
      axios
        .get(`https://api.github.com/search/repositories?q=${search}`)
        .then((res) => {
          setSearchResult(res.data.items);
        });
    } else {
      setSearchResult([]);
    }
  }, [search]);

  return (
    <>
      <SearchContext.Provider
        value={{
          repoList: repoList,
          addRepo: addRepo,
          removeRepo:removeRepo,
          searchResult: searchResult,
          setSearch: setSearch,
        }}
      >
        <Header />
        {repoList.length > 0 ? (
          <Repo />
        ) : (
          <h1
            style={{ justifyContent: "center", height: "100vh"  ,textAlign:"center"}}
            className="d-flex"
          >
            There Is No Repo To Compare
          </h1>
        )}
      </SearchContext.Provider>
    </>
  );
}

export default App;

//   axios.get("https://api.github.com/search/repositories?q=Expensive-time").then(res=>{
