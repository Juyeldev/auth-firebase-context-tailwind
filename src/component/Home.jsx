import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuhtProvider';
const Home = () => {
    const user= useContext(AuthContext)
    return (
        <div>
            <h2>Home is Here {user && <span>{user.displayName}</span> }</h2>
        </div>
    );
};

export default Home;