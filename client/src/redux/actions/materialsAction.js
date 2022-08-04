import axios from 'axios';
export const getAllMaterials=()=>async dispatch=>{
    dispatch({type:"LOADING",payload:true})
    try{
        const response=await axios.get('/api/materials/getallmaterials')
        dispatch({type:"GET_ALL_MATERIALS",payload:response.data})
        dispatch({type:"LOADING",payload:false})
    }
    catch(error){
        console.log(error)
        dispatch({type:"LOADING",payload:false})
    }

}