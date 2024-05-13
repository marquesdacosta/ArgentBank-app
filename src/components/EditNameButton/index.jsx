import "./style.css";


function EditNameButton({ onClick }) {

    return (
        <button className="edit-name-btn" onClick={onClick}>
            Edit Name
        </button>
    )
}

export default EditNameButton