import {useEffect, useRef, useState} from "react";
import {authService, userService} from "./services";

const App = () => {
    const [token, setToken] = useState(null);
    const input = useRef();
    useEffect(() => {
        authService.login().then(({data: {access}}) => {
            localStorage.setItem('token', access)
            setToken(access)
        })
    }, [])

    const save = async () => {
        const file = input.current.files[0];
        const formData = new FormData();
        formData.append('avatar', file, file.name)
        await userService.addAvatar(formData)
    }
    return (
        <div>
            {token && <div>{token}</div>}
            <input type="file" ref={input}/>
            <button onClick={() => save()}>save</button>
        </div>
    );
};

export default App;
