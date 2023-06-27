import { checkIfUserAlreadyExists } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
function Completion(props) {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(checkIfUserAlreadyExists());
  },[]);
    return(
      <div>
        <h1>Thank you! 🎉</h1>
        <div style = {{height:"140px"}}>

        </div>
      </div>
    ) 
  }
  
  export default Completion;
  