 


  function ReducerFilter(state,action) {
  

     switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading:true
            }
        case "SEt_API_DATA":
            const featureData = action.payload.filter((curElm,index)=>{
                return curElm.featured === true;
            })
            return {
                ...state,
                products:action.payload ,
                featureProducts: featureData ,
            }

         case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filterProducts:action.payload,
                isLoading:false,
            }
         case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view:true
            }
         case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view:false
            }

         case "GET_SORT_VALUE":
            return {
                ...state,
                sorting_value : action.payload
            }
          case "SORTING_PRODUCTS":
            let newSortData;
            let tempSortProduct = action.payload   

            const sortingProducts=(a,b)=>{
                if(state.sorting_value === "a-z") {
                    return  a.name.localeCompare(b.name)
                }
                if(state.sorting_value === "z-a"){
                    return b.name.localeCompare(a.name)
                }
                if(state.sorting_value === "lowest"){
                    return a.price-b.price
                }
                if(state.sorting_value === "highest"){
                    return b.price-a.price
                }
            }
            newSortData = tempSortProduct.sort(sortingProducts)
            return {
                ...state,
                filterProducts:newSortData
             }
            
          case "UPDATE_FILTER_VALUE":
            const {name,value}=action.payload
      
               return{
                ...state,
                filters:{
                    ...state.filters,
                    [name]:value
                }
               }

           case "FILTER_PRODUCTS":
            let {products}=state;
            let tempFilterProduct = products
           
            const {category,company}=state.filters
            
             if(category != "all"){
                tempFilterProduct=tempFilterProduct.filter((currElm)=>{
                    return currElm.category === category
                })
             }
             if(company != "all"){
                tempFilterProduct=tempFilterProduct.filter((currElm)=>{
                    return currElm.company === company
                })
             }
           
            return{
                ...state,
                filterProducts:tempFilterProduct
            }  
            
            
          case "CLEAR_FILTER":
           console.log("clear filter is running")
              return {
                 ...state,
                 filters:{
                   ...state.filters,
                    category: "all",
                    company: "all",
                 }
              }  

         case "DEVICE_VIEW_TOGGLE":
             return {
                ...state,
                deviceView :!state.deviceView
             }
 
         case "API_Error":
            return {
                ...state,
                isLoading:false,
                isError:true
            }
            
     
        default: 
          return state
     }

}

export default ReducerFilter
