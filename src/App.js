import React from 'react'

function App() {
  let array=[1,2,3,4,5,6,7]
  let globalArr=[]
 
  return (
    <div>
       {(function(){
    for(let i=0;i<array.length;i++){
      globalArr.push(<h1>{array[i]}</h1>)
    }
  }())}
      {globalArr}
    </div>
  )
}

export default App 