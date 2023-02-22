import "./components/App.css";

import { useEffect , useState ,useRef } from "react";

function App() {

  const getlocalstorageData = () =>{
    const data=JSON.parse(localStorage.getItem("list"));
    if(data){
      return JSON.parse(localStorage.getItem("list"));
    }
    return [];
  }

  const txttask=useRef()
  const txttime=useRef()

  const [inputarray,setinputarray]=useState(getlocalstorageData());
 
  useEffect(() =>{
    localStorage.setItem("list",JSON.stringify(inputarray));
  },[inputarray])

const deleteall = () =>{
  setinputarray ([]);
}

const deleteitem = (id) =>{
  const newarr=inputarray.filter((val,ndx) => {
   return id!==ndx
  })
 setinputarray (newarr);
}

  const addData = () =>{

    
   if(!txttask.current.value)
   {
    alert("Please enter a Task")
   }else
   {
   
    setinputarray([...inputarray,txttime.current.value+':'+txttask.current.value]);
    
    // setinputvalue('');
    // settimevalue('');
   txttask.current.value=''
   txttime.current.value=''


   
   
   }
  }
}