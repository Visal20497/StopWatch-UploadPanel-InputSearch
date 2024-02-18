import React, { useEffect, useState } from 'react'

function InputSearch() {
    let [text,setText]=useState('')
    let [filterarray,setFilterArray]=useState([])
    let arr= [ { name: "vishal" },
    { name: "utsav" },
    { name: "vicky" },
    { name: "mohan" },
    { name: "tanmay" },
    { name: "ankit" },
    { name: "maheshwari" },
    { name: "kishore" }]
    function incHandler(e){
        setText(e.target.value)
    }

    useEffect(()=>{
     let filter=arr.filter((item)=>{
       return  item.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())
     })
     setFilterArray(filter)
    },[text])

  return (
    <div >
    <input type="text" value={text} onChange={incHandler} placeholder='Search your text ....'/>
    <div>
        {(filterarray.length>0 ?filterarray:arr).map((item)=>{
            return <div> <h1>{item.name}</h1></div>
        })}
    </div>
    </div>
  )
}

export default InputSearch