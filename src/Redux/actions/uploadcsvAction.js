import { toast } from "react-toastify";
import axiosInstance from "../../Utils";
import { UPLOAD_CSV_FILE,UPLOAD_CSV_FILE_ERROR,UPLOAD_CSV_FILE_LOADING,SET_UPLOAD_CSV_FILE } from "./types";

export const setLoading=()=>{
    return{
        type:UPLOAD_CSV_FILE_LOADING
    }
}

export const uploadCSV=(values)=>async (dispatch,getState)=>{
    const {token}=getState().auth
    const config={
        headers:{
            'Content-Type':'application/json',
            'x-auth-token':token
        }
    }
    dispatch(setLoading())
    try {
        const {data}=await axiosInstance.post('/dashboard/admin/uploadcsv',values,config)
        toast.success(data.msg, {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          dispatch({
              type:UPLOAD_CSV_FILE,
              payload:data
          })
          window.location.reload(true);
    } catch (err) {
        toast.error(err.response.data.error, {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          dispatch({
              type:UPLOAD_CSV_FILE_ERROR
          })
    }
}

export const setUploadCsv=(e)=>(dispatch)=>{
    dispatch({
        type:SET_UPLOAD_CSV_FILE,
        payload:e.target.files[0]
    })
}

