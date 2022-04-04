import {useRef} from 'react';
// Use useRef when only you want to extract or get the data. If you want to set the data, use useState only and not useRef(as it's for react DOM not virtual DOM).
function UserData(){
    const nameField = useRef();
    const lastnameField = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(nameField.current.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" ref={nameField} />
            </div>
            <button type="submit">Click</button>
        </form>
    )
}
export default UserData;