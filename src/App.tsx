import './App.css'
import {Component} from "./Component.tsx";

function App() {

  return (
    <>
        <>
            {
                Array.from({ length: 500 }, (_, index) => (
                    <Component key={index} />
                ))
            }
            <Component />
        </>
    </>
  )
}

export default App
