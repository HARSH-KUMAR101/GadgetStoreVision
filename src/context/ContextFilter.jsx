
import { createContext, useContext, useReducer,useEffect } from "react";
import axios from 'axios'
import  reducer from '../reducer/ReducerFilter'
 

const FilterContext = createContext();
const API = "https://api.pujakaitem.com/api/products";


const initialstate={
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    filterProducts:[],
    grid_view: false,
    deviceView: false,
    sorting_value:"a-z",
    filters : {
      category: "all",
      company: "all",
      
    }
}

const FilterContextProvider= ({children})=>{

  const [state, dispatch] = useReducer(reducer, initialstate )

  // methods to set grid and list views
    const setGridView=()=>{
          return dispatch({type:"SET_GRID_VIEW"} )
      }
    const setListView=()=>{
          return dispatch({type:"SET_LIST_VIEW"})
      }



  const getProducts = async(url)=>{
    dispatch({type: "SET_LOADING"})
       try {
        const res = await axios(url)
        const  products= await res.data;
         
              dispatch({ type: "SEt_API_DATA", payload: products });
              dispatch({type:"LOAD_FILTER_PRODUCTS", payload:products})
                
       } catch (error) {
            dispatch({type: "API_Error"})
       }
   }

   // method for sorting
   const sorting =(e)=>{
    let userValue = e.target.value
    
     return dispatch({type:"GET_SORT_VALUE", payload:userValue})
   }  

   const updateFilterValue=(e)=>{
      const name=e.target.name; 
      const value=e.target.value;
        //  console.log(name,value,"filtered value")
      return dispatch({type:"UPDATE_FILTER_VALUE",payload:{name,value}})
   }
    const clearFilter=()=>{
      return dispatch({type:"CLEAR_FILTER"})
    }

      const deviceViewToggle=()=>{
           dispatch({type:"DEVICE_VIEW_TOGGLE"})  
      }  
 

    useEffect(()=>{
      dispatch({type:"SORTING_PRODUCTS",payload:state.products })
      dispatch({type:"FILTER_PRODUCTS"})
    },[state.sorting_value,state.products,state.filters])


useEffect(()=>{    
    getProducts(API)
},[])

  return(
    <FilterContext.Provider value={{...state ,setGridView,setListView,sorting,updateFilterValue,clearFilter,deviceViewToggle}}>
         {children}
    </FilterContext.Provider>
  )
}


const useFilterContext=()=>{
    return useContext(FilterContext)
}


export {FilterContext,useFilterContext,FilterContextProvider}