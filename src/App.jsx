import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import MyComponents from './components/MyComponents'
import AnotherComponent from './components/anotherComponent'

function App() {
  const [count, setCount] = useState(0)


  // 1 - Loop infinito no useeffect
  // useEffect(() =>{
  //   setCount (count + 1)
  // })
  //solution
  useEffect(() => {
    setCount(count + 1)
  }, [])
  //array vazio e ao tambem colocar alguma dependencia dentro e ao alterar ela tbm teria a execucao uma so vez
  
  //3 - no use the previous state
  const [list, setList] = useState([1, 2, 3, 4, 5])

  const changeList = (list) => {
    const filteredNumbers = list.filter((n) => n > 2)
    setList(filteredNumbers)
  }

  // simplify - solution
  const newChangeList = () => {
    setList((prev) => prev.filter((n) => n > 2))
  }

  console.log(list)

  return (
    <div className="App">
      <div>{count}</div>
      {/* 2- === and not pass the data correct */}
      {/* <MyComponents age="30" isAvailable="false" /> */}
      {/* solution */}
      <MyComponents age={30} isAvailable={false} />
      {/* 3 */}
      <div>
        <button onClick={() => changeList(list)}>
          Change list
        </button>
        {/* more clean */}
        <button onClick={newChangeList}>
          Change list 2
        </button>
        {/* 4- no use key and the solution its put the key inside of the p*/}
        <div>
            {list.map((n) => (
              <p key={n}>Number: {n}</p>
            ))}
          </div>
        {/* 5 - create component with wrong case */}
        <AnotherComponent />
      </div>
    </div>    
  )
}

export default App
