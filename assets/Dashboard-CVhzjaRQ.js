import{r as n,u as o,j as r,L as i}from"./index-Dn-8SHVW.js";import{C as t}from"./Card-CNC75MhM.js";import{A as l,B as c}from"./Button-BxLN3lEw.js";const j=()=>{const[e,m]=n.useState(""),{currentUser:s,logoutUser:a}=o();return r.jsxs(r.Fragment,{children:[r.jsx(t,{children:r.jsxs(t.Body,{children:[r.jsx("h2",{className:"text-center mb-4",children:"Profile"}),e&&r.jsx(l,{variant:"danger",children:e}),r.jsx("strong",{children:"Name:"})," ",s.name," ",r.jsx("br",{}),r.jsx("strong",{children:"Email:"})," ",s.email,r.jsx(i,{to:"/update-profile",className:"btn btn-primary w-100 mt-3",children:"Update Profile"})]})}),r.jsx("div",{className:"w-100 text-center mt-2",children:r.jsx(c,{variant:"link",onClick:a,children:"Log Out"})})]})};export{j as default};
