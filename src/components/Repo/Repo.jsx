import React, { useState, useContext } from "react";
import { SearchContext } from "../../App";
import "./Repo.css"; 
import { format } from "timeago.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCodeFork,
  faCircleExclamation,
  faCalendar,
  faLanguage,
  faPlus,
  faIdCard
} from "@fortawesome/free-solid-svg-icons";

function Repo() {
  const context = useContext(SearchContext);
  const { repoList , removeRepo} = context;

  return (
    <div className="repo">
      {repoList.map((repo,index) => (
        <div className="repoContainer" key={repo.id}>
          <a  href= {repo.html_url} className="header d-flex" target="_blank">
            <h4 className="fullName">{repo.full_name}</h4>
            <img src={repo.owner.avatar_url} className="smallAvatar" />
          </a>
          <hr />
          <div className="information">
            <ul>
              <li className="d-flex infoItem">
                <div className=" d-flex">
                  <FontAwesomeIcon icon={faStar} />
                  <p className="infoName">Stars</p>
                </div>
                <p>{repo.stargazers_count}</p>
              </li>
              <li className="d-flex infoItem">
                <div className=" d-flex">
                  <FontAwesomeIcon icon={faCodeFork} />
                  <p className="infoName">Forks</p>
                </div>
                <p>{repo.forks_count}</p>
              </li>
              <li className="d-flex infoItem">
                <div className=" d-flex">
                  <FontAwesomeIcon icon={faCircleExclamation} />
                  <p className="infoName">Open-Issues</p>
                </div>
                <p>{repo.open_issues_count}</p>
              </li>
              <li className="d-flex infoItem">
                <div className=" d-flex">
                  <FontAwesomeIcon icon={faCalendar} />
                  <p className="infoName">Age</p>
                </div>
                <p>{format(repo.created_at)}</p>
              </li>
              <li className="d-flex infoItem">
                <div className=" d-flex">
                  <FontAwesomeIcon icon={faPlus} />
                  <p className="infoName">Last Commit</p>
                </div>
                <p>{format(repo.updated_at)}</p>
              </li>
              <li className="d-flex infoItem">
                <div className=" d-flex"> 
                <FontAwesomeIcon icon={faIdCard} />
                  <p className="infoName">License</p>
                </div>
                <p>{repo.license?.key || "Null" }</p>
              </li>
              <li className="d-flex infoItem">
                <div className=" d-flex">
                  <FontAwesomeIcon icon={faLanguage} />
                  <p className="infoName">Language</p>
                </div>
                <p>{repo.language}</p>
              </li>
            </ul>
          </div>
          <div className="control d-flex">
            <button className="btn" onClick={()=>removeRepo(index)}>Remove Repo</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Repo;

//   axios.get("https://api.github.com/search/repositories?q=Expensive-time").then(res=>{
