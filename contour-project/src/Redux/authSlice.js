import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  userDetails: '',
  expertDetails: '',
  adminDetails: '',
  userAllDetails:'',
  userToken:'',
  contractorToken:'',
};


const loginSlice = createSlice({
    name: 'logindetails',
    initialState: INITIAL_STATE,
    reducers: {
      userLoginDetails: (state, action) => {
        let { userDetails } = state;
        userDetails = action.payload;
        return { ...state, userDetails };
      },
      categoryDetails:(state,action)=>{
        let {category} = state;
        category = action.payload;
        return{...state,category}
      },
      expertLoginDetails: (state, action) => {
        let { expertDetails } = state;
        expertDetails = action.payload;
        return { ...state, expertDetails };
      },
      adminLoginDetails: (state, action) => {
        let { adminDetails } = state;
        adminDetails = action.payload;
        return { ...state, adminDetails };
      },
      clearUserLoginDetails: (state, action) => {
        let { userDetails } = state;
        userDetails = false;
        return { ...state, userDetails };
      },
      clearExpertLoginDetails: (state, action) => {
        let { expertDetails } = state;
        expertDetails = false;
        return { ...state, expertDetails };
      },
      clearAdminLoginDetails: (state, action) => {
        let { adminDetails } = state;
        adminDetails = false;
        return { ...state, adminDetails };
      },
      contractorAllDetails:(state,action)=>{
        let { contractorAllDetails } = state;
        contractorAllDetails=action.payload;
        return {...state,contractorAllDetails}
      },

      clearcontractorAllDetails: (state, action) => {
        let { contractorAllDetails } = state;
        contractorAllDetails = false;
        return { ...state, contractorAllDetails };
      },
      userToken:(state,action)=>{
        let {userToken}=state;
        userToken=action.payload
        return {...state,userToken}
      },
      contractorToken:(state,action)=>{
        let {contractorToken}=state;
        contractorToken=action.payload
        console.log("funda",action.payload);
        return {...state,contractorToken}
      },
      clearUserToken:(state,action)=>{
        let{userToken}=state;
        userToken=false;
        return{...state,userToken}
      }, 
      clearContractorToken:(state,action)=>{
        let{contractorToken}=state;
        contractorToken=false;
        return{...state,contractorToken}
      }, 
    },
  });

  export const {
    userLoginDetails,
    expertLoginDetails,
    adminLoginDetails,
    clearUserLoginDetails,
    clearExpertLoginDetails,
    clearAdminLoginDetails,
    userAllDetails,
    clearUserAllDetails,
    userToken,
    clearUserToken,
    categoryDetails,
    contractorToken,
    clearContractorToken,
    contractorAllDetails,
    clearcontractorAllDetails
  } = loginSlice.actions;
  

  export default loginSlice.reducer;
