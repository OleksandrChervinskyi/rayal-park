import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch, useSelector} from "react-redux";
import {dec, inc} from "./features/counter/counterSlice";
import {Headers} from "./features/headers";
import {BrowserRouter} from "react-router-dom";
import {Main} from "./features/main";
import {Footer} from "./features/footer";


function App() {

    // const {value} = useSelector(state => state.counter)
    // const dispatch = useDispatch()

    return (

        <BrowserRouter>
            <div className="App">
                {/*// HEllo = {value}*/}
                {/*//*/}
                {/*// <button onClick={() => {*/}
                {/*//         dispatch(inc())*/}
                {/*//     }}>*/}
                {/*//         Inc*/}
                {/*//     </button>*/}
                {/*//*/}
                {/*//     <button onClick={() => {*/}
                {/*//         dispatch(dec())*/}
                {/*//     }}>*/}
                {/*//         Dec*/}
                {/*//     </button>*/}
                <Headers/>
                <Main/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App;
