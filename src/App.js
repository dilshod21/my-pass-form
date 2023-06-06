import './App.css';
import { useState, useRef } from 'react';

function App() {

    const [oneVal, setOneVal] = useState("");
    const [twoVal, setTwoVal] = useState("");
    const [threeVal, setThreeVal] = useState("");
    const [fourVal, setFourVal] = useState("");

    const oneTurn = useRef(null);
    const twoTurn = useRef(null);
    const threeTurn = useRef(null);
    const fourTurn = useRef(null);

    const oneTurner = (e) => {
        const val = e.target.value;
        setOneVal(val);
         if (oneVal.length === 0){
             oneTurn.current.focus();
         }
    }
    const twoTurner = (e) => {
        const val = e.target.value;
        setTwoVal(val);
        if (twoVal.length === 0){
            twoTurn.current.focus();
        }
    }
    const threeTurner = (e) => {
        const val = e.target.value;
        setThreeVal(val);
        if (threeVal.length === 0){
            threeTurn.current.focus();
        }
    }

    const fourTurner = (e) => {
        const val = e.target.value;
        setFourVal(val);
        if (fourVal.length === 0){
            fourTurn.current.focus();
        }
    }



    return (
        <div className="container mt-5">
            <div className="row justify-content-center mt-5">
                <div className="col-xl-5 col-lg-6 col-md-8">
                    <div className="card">
                        <form className="d-flex justify-content-center align-items-center my-5">
                            <input value={oneVal} type="text" className="form-control my-input mx-2" onChange={oneTurner}/>
                            <input ref={oneTurn} value={twoVal} type="text" className="form-control my-input mx-2" onChange={twoTurner}/>
                            <input ref={twoTurn} value={threeVal} type="text" className="form-control my-input mx-2" onChange={threeTurner}/>
                            <input ref={threeTurn} value={fourVal} type="text" className="form-control my-input mx-2" onChange={fourTurner}/>
                            <button ref={fourTurn} type="submit" className="btn btn-primary mx-2 my-3">submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default App;
