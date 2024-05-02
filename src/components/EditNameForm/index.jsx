import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { changeUserName } from '../../app/actions/actions';
import './style.css';


function EditNameForm({onClose}) {
    const dispatch = useDispatch();
    const [newUserName, setNewUserName] = useState('');
    const { userInfo } = useSelector((state) => state.auth);
    const token = userInfo ? userInfo.token : null;

    function submit(event) {
        event.preventDefault();
        dispatch(changeUserName(token, newUserName));
        onClose();
    }

    return (
        <form action="" className="editnameform" id='editnameform' onSubmit={submit}>
            <h2>Edit UserName</h2>
            <label htmlFor="username">New UserName :</label>
            <input type="text" id='username' value={newUserName} onChange={(e) => setNewUserName(e.target.value)} />
            <button>Change Username</button>
        </form>
    );
}

export default EditNameForm;