import{r,u as h,j as e}from"./index-qWjGYKgz.js";const j=()=>{const[o,m]=r.useState(""),[a,u]=r.useState(""),[l,x]=r.useState(""),[c,t]=r.useState(null),[i,p]=r.useState(null),w=h(),f=()=>{console.log(document.cookie)},b=async s=>{if(s.preventDefault(),!o||!l||!a){t("Please fill in all fields");return}if(o!==l){t("Passwords do not match");return}try{f();const n={email:a,newPassword:o};t(null);const d=await(await fetch("/api/user/setpassword",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n),credentials:"include"})).json();console.log(d),d.status==="true"?(p("Password has been reset successfully"),w("/login")):t(d.message||"Failed to reset password")}catch(n){console.error("Error during password reset:",n),t("An error occurred. Please try again.")}};return e.jsx("div",{className:"bg-gradient-to-r from-blue-500 to-cyan-500 h-[100vh] w-full flex justify-center items-center",children:e.jsxs("div",{className:"bg-white w-[280px] py-3 px-4 flex flex-col items-center rounded-xl",children:[e.jsx("h1",{className:"text-black text-xl font-bold mb-4",children:"Set New Password"}),e.jsxs("form",{onSubmit:b,className:"flex flex-col w-full",children:[e.jsx("label",{htmlFor:"email",className:"font-semibold text-md",children:"Email Address"}),e.jsx("input",{type:"text",value:a,onChange:s=>u(s.target.value),placeholder:"Enter your email",className:"outline-none border-b-[2px] rounded-md mb-3 mt-1 text-md border-gray-300"}),e.jsx("label",{htmlFor:"password",className:"font-semibold text-md",children:"New Password"}),e.jsx("input",{type:"password",value:o,onChange:s=>m(s.target.value),placeholder:"Type your new password",className:"outline-none border-b-[2px] rounded-md mb-3 mt-1 text-md border-gray-300"}),e.jsx("label",{htmlFor:"confirmPassword",className:"font-semibold text-md",children:"Confirm New Password"}),e.jsx("input",{type:"password",value:l,onChange:s=>x(s.target.value),placeholder:"Confirm your new password",className:"outline-none border-b-[2px]  rounded-md mb-3 mt-1 text-md border-gray-300"}),e.jsx("button",{type:"submit",className:"bg-gradient-to-r from-blue-500 to-cyan-500 py-[5px] w-full my-4 text-white font-semibold rounded-full",children:"Set Password"}),c&&e.jsx("p",{className:"text-red-500 text-center",children:c}),i&&e.jsx("p",{className:"text-green-500 text-center",children:i})]})]})})};export{j as default};
