import React, { useEffect, useState } from 'react';
import './gihub.css';
import Loading from './Loading';
import GiDatahub from './GiDatahub';
const GitHubHook = () => {
   const [Loading,setloading]=useState(false);
  const [gitUsers, setGitUsers] = useState([]);

  const getUser = async () => {
    try {
      setloading(false);
      const response = await fetch('https://api.github.com/users');
      const data = await response.json();
      setGitUsers(data);
    } catch (err) {
      console.log('error occurred ' + err);
    }
  };

  useEffect(() => {
    getUser();
    
  }, []);
 if(Loading){
   return <Loading />
 }
  return (
 
     <>
      <GiDatahub  gitUsers={gitUsers} />
    
    </>
  );
};

export default GitHubHook;
