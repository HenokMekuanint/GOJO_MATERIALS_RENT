import { STATES } from "mongoose";

const initialData={
    cars:[]

};
export const materialsReducer=(state=initialData,action)=>{
    switch(action.type)
    {
        case 'GET_ALL_MATERIALS':{
            return{
                ...state,
                cars:action.payload
            }
        }
        default:return state
    }
}
