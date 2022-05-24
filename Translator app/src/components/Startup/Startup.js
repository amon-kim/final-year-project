import AppContainer from "../../hoc/AppContainer";
import { useState, useEffect } from "react";
import  { useNavigate } from 'react-router-dom';
import { getStorage, setStorage, clearStorage } from "../../utils/storage";
import { addUser, isUserInDatabase } from "../../utils/API";

const Startup = () => {
    const [name, setName] = useState("");
    const history = useNavigate();

    const user = getStorage("name");

    /* If the user is already logged in, redirect to translation page */
    //useEffect(() => {
        //if(user){
            //history('/text-translate');
        //}
    //})

    /* Tracks name suplied and updates the state if it changes */
    const handleNameChange = event => {
        setName(event.target.value);
    }

    /* function used to check if user exists in database */
    const checkUserInDatabase = async () => {
        return await isUserInDatabase(getStorage('name'));
    }

    const handleSubmitNameClick = async () => {
        setStorage("name", name);
        const userInDatabase = await checkUserInDatabase();
        if(userInDatabase){
            history("/text-translation");
        }else if(!userInDatabase && name.match(/^[a-zA-Z-]+$/)){
            await addUser(name);
            history("/text-translation");
        }else{
            clearStorage('name');
            alert('Invalid input! Please enter a valid name, consisting of only letters');
        }
    }

    return (
        <main>
            <AppContainer>
                <h1 className="animate__animated animate__bouceInDown text-center mt-5"> Welcome to the Translator App</h1>
                <form className="w-50 m-auto mt-5">
                    <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="What is your name?" onChange= {handleNameChange} />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button" onClick={handleSubmitNameClick}>Submit</button>
                    </div>
                    </div>
                </form>
            </AppContainer>
        </main>
    )
}

export default Startup;