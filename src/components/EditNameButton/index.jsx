import "./style.css";
import { useState } from "react";


function EditNameButton({ onClick }) {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };
    return (
        <button className="edit-name-btn" onClick={onClick}>
            Edit Name
        </button>
    )
}

export default EditNameButton