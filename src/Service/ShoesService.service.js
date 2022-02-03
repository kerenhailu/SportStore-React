
const BasicUrl="https://localhost:44397/api/";
export const GetData=async()=>{
    try{
  return  fetch(`${BasicUrl}Shoes`)
    .then((res)=>res.json())
    .catch((error)=>console.log({error:"is not work"}))
    }
    catch(error){
        console.log("not workinggg")
    }
};

