import React from "react"; 

export interface FormValues {
    fullName: string;
    email: string;
    message: string;
  }
  
export interface FormErrors {
    fullName?: string;
    email?: string;
    message?: string;
  }
  


function Validation(value:FormValues): FormErrors {
    let error:FormErrors = {};

    if(!value.fullName){
        error.fullName = "Name is required"
    } 
    if(!value.email) {
        error.email = "Email is required"
    } else if (!!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(value.email)){
        error.email = "Email is invalid"
    } 

    if(value.message === ""){
        error.message = "Message is required"
    } else if(value.message.length < 5) {
        error.message = "Message invalid"
    }
    
    return error
} 

export default Validation