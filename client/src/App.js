import AllPizza from "./components/all-pizza/AllPizza";
import Header from "./components/header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchAllPizza} from "./services";

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        fetchAllPizza()
            .then(value => {
                dispatch({type: 'ADD_ALL_PIZZA', payload: value});
            });
    });

    return (
        <div>
            <Header/>
            <AllPizza/>
        </div>
    );
}

export default App;
