import React, {useState} from "react";
import Users from './users';
import api from "../api";
import SearchStatus from "./searchStatus";

function App () {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers(prevState => prevState.filter(position => position._id !== userId));
    };

    const handleToggleBookMark = (id) => {
        setUsers(prev => prev.map(user => user._id === id ? {...user, bookmark: !user.bookmark} :user))
    };
        

    return (
        <div>
            <SearchStatus usersNumber = {users.length} />
            <Users users = {users} onToggleBookmark = {handleToggleBookMark} onDelete={handleDelete} userLength = {users.length}/>
        </div>
    )
}

export default App;