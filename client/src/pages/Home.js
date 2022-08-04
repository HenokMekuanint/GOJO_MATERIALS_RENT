import React, { useEffect } from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import DefaultLayout from '../components/DefaultLayout';
import { getAllMaterials } from '../redux/actions/materialsAction';

function Home(){
    const {cars}=useSelector(state=>state.carsReducer)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getAllMaterials())
    },[])
    return(
        <div>
            <DefaultLayout>
            <h1>Home page</h1>
            <h1> the lenght of cars array is{cars.length}</h1>
            </DefaultLayout>
        </div>
    )
}
export default Home
