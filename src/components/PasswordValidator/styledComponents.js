import styled from 'styled-components'

export const MainContainer = styled.div`
   background-color: #24263c;
   min-height:100vh;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
`
export const PasswordBoxContainer = styled.div`
  background-color: #383a4e;
  box-shadow:#434451;
  height:37vh;
  width:90%;
  border-radius:10px;
  padding:30px;
  display:flex;
  flex-direction:column;
  @media screen and (min-width:768px) {
     height:70vh;
     width:40%;
     border-radius:20px;
     padding:50px 35px;
  }
`
export const Heading = styled.h1`
   color:#f8fafc;
   font-family:"Roboto";  
   font-size:25px;
   text-align:center;
   @media screen and (min-width:768px) {
      font-size:50px;
      font-weight:500;
      margin-bottom:7px;
  }
`
export const Paragraph = styled.p`
   color:${props => props.color};
   font-family:"Roboto";  
   text-align:center;
   font-size:${props => props.size};
`
export const InputText = styled.input`
   background-color:  #edeeff;
   border:none;
   margin-top:20px;
   width:100%;
   padding:10px;
   outline:none;
   @media screen and (min-width:768px) {
       margin-top:40px;
       width:90%;
       align-self:center;
       padding:15px;
  }
`
