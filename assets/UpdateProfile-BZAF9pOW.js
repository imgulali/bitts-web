import{u as w,r as m,a as v,j as e}from"./index-Dn-8SHVW.js";import{F as s,v as b,U as C}from"./Users-Df1pIjoG.js";import{C as u}from"./Card-CNC75MhM.js";import{A as y,B as U}from"./Button-BxLN3lEw.js";const P=()=>{const{currentUser:n,updateUser:h}=w(),[x,t]=m.useState(!1),[c,o]=m.useState(""),f=v(),[r,j]=m.useState({name:n.name,email:n.email,password:""}),i=d=>{const{name:a,value:l}=d.target;j({...r,[a]:l})},g=async d=>{try{d.preventDefault(),t(!0),o("");let a=null;if(r.name!==n.name&&(a={...a,name:r.name}),r.email!==n.email&&(a={...a,email:r.email}),r.password!==""&&(a={...a,password:r.password}),!a)return t(!1),o("Nothing has been changed");const{validationError:l}=await b(C,a);if(l)return t(!1),o(l);const p=await h(a);return p?(t(!1),o(p)):(t(!1),f("/"))}catch(a){console.error(a)}};return e.jsx(e.Fragment,{children:e.jsx(u,{children:e.jsxs(u.Body,{children:[e.jsx("h2",{className:"text-center mb-4",children:"Update Profile"}),c&&e.jsx(y,{variant:"danger",children:c}),e.jsxs(s,{onSubmit:g,children:[e.jsxs(s.Group,{id:"name",children:[e.jsx(s.Label,{children:"Name"}),e.jsx(s.Control,{type:"text",name:"name",onChange:i,value:r.name})]}),e.jsxs(s.Group,{id:"email",children:[e.jsx(s.Label,{children:"Email"}),e.jsx(s.Control,{type:"text",name:"email",onChange:i,value:r.email})]}),e.jsxs(s.Group,{id:"password",children:[e.jsx(s.Label,{children:"New Password"}),e.jsx(s.Control,{type:"password",name:"password",onChange:i,value:r.password,placeholder:"Leave blank to keep same"})]}),e.jsx(U,{disabled:x,className:"w-100 mt-4",type:"submit",children:"Update Profile"})]})]})})})};export{P as default};
