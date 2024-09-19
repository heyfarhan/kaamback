import{r as a,j as e,u as x}from"./index-B9v6D_0a.js";import{C as m,a as p}from"./CompanyNavbar-Wr-_Cx8W.js";import{G as l,F as h}from"./Footer-BPCS-lqn.js";import"./search-jheIeyU5.js";function f(t){return l({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"},child:[]}]})(t)}function b(t){return l({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"},child:[]}]})(t)}const j=({question:t,answer:r})=>{const[s,n]=a.useState(!1),o=a.useRef(null),[c,d]=a.useState(0);a.useEffect(()=>{o.current&&d(s?o.current.scrollHeight:0)},[s]);const u=()=>{n(!s)};return e.jsxs("div",{className:"border-b-2 border-black mb-4 py-4",children:[e.jsxs("div",{className:"flex justify-between items-center cursor-pointer",onClick:u,children:[e.jsx("h4",{className:"font-semibold text-[18px]",children:t}),e.jsx("button",{className:"text-xl",children:s?e.jsx(b,{size:25}):e.jsx(f,{size:25})})]}),e.jsx("div",{className:"overflow-hidden transition-height duration-300 ease-in-out",style:{height:`${c}px`},ref:o,children:e.jsx("div",{className:"pt-2 text-[15px]",children:r})})]})},g=()=>{const t=[{question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas diam in arcu cursus euismod quis. Sed nisi lacus sed viverra tellus. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Tellus orci ac auctor augue mauris augue. Vitae tortor condimentum lacinia quis vel eros donec ac odio. Aliquam malesuada bibendum arcu vitae elementum. Nunc mattis enim ut tellus elementum sagittis vitae. Orci porta non pulvinar neque laoreet. Montes nascetur ridiculus mus mauris vitae ultricies. Laoreet id donec ultrices tincidunt arcu non sodales. Gravida arcu ac tortor dignissim convallis."},{question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",answer:"You can track your order by..."},{question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",answer:"You can track your order by..."},{question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",answer:"Yes, you can purchase items again by..."}];return e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"text-3xl font-bold text-center lg:text-left text-[#181B38]",children:"FAQ"}),e.jsx("div",{className:"mt-6",children:t.map((r,s)=>e.jsx(j,{question:r.question,answer:r.answer},s))})]})},i={modal:"fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50",modalContent:"bg-blue-200 rounded-lg shadow-lg py-8 px-20 w-[90%] md:w-[35%] relative",closeButton:"absolute top-4 right-4 text-black text-2xl cursor-pointer",input:"w-full px-3 py-2 border border-gray-500 rounded-lg bg-blue-200 placeholder-[#838383] text-black mb-4",textarea:"w-full px-3 py-2 border border-gray-500 rounded-lg bg-blue-200 placeholder-[#838383] text-black mb-4 resize-none",button:"w-full py-2 bg-blue-300 text-black rounded-lg"},v=({onClose:t})=>e.jsx("div",{className:i.modal,children:e.jsxs("div",{className:i.modalContent,children:[e.jsx("span",{className:i.closeButton,onClick:t,children:"×"}),e.jsx("h2",{className:"text-2xl font-bold text-center font-ptSans",children:"Matching Time..."}),e.jsx("p",{className:"text-sm font-bold text-center mb-8",children:"Fill in your details"}),e.jsxs("form",{action:"https://getform.io/f/axojjmrb",method:"POST",children:[e.jsxs("select",{id:"sort-dropdown",className:i.input,children:[e.jsx("option",{value:" ",disabled:!0,children:"Type of freelancer"}),e.jsx("option",{value:"newest",children:"option1"}),e.jsx("option",{value:"highest",children:"option2"}),e.jsx("option",{value:"lowest",children:"option3"})]}),e.jsx("input",{className:i.input,type:"text",placeholder:"Project title",required:!0}),e.jsx("textarea",{className:i.textarea,name:"message",placeholder:"Project Description",rows:6,required:!0}),e.jsx("input",{className:i.input,type:"text",placeholder:"Project fee",required:!0}),e.jsx("input",{className:i.input,type:"text",placeholder:"Project timeline",required:!0}),e.jsx("button",{className:i.button,type:"submit",children:"Finish"})]})]})}),k=()=>{const t=x(),[r,s]=a.useState(!1),n=()=>{s(!0)},o=()=>{s(!1)};return e.jsxs("div",{className:"flex flex-col mt-[70px] sm:pt-6",children:[e.jsx(m,{}),e.jsx("div",{className:"bg-[#BFE0FF] h-[180px] w-full px-4 sm:px-24 flex items-center",children:e.jsxs("div",{className:"flex flex-row items-center gap-x-6",children:[e.jsx("img",{src:p,alt:"avatar",className:"h-[60px] w-[60px] rounded-full"}),e.jsx("p",{className:"text-[24px] sm:text-[40px] font-semibold text-black font-ptSans",children:"Hello, Name"})]})}),e.jsxs("div",{className:"flex flex-row gap-x-2 sm:gap-x-32 justify-center mt-[-24px]",children:[e.jsx("div",{className:"px-[16px] py-[8px] bg-[#84bcf5] rounded-xl flex justify-center items-center cursor-pointer",onClick:n,children:e.jsx("p",{className:"text-[16px] sm:text-[24px] font-semibold text-white",children:"New Projects"})}),e.jsx("div",{className:"px-[16px] py-[8px] bg-[#84bcf5] rounded-xl flex justify-center items-center cursor-pointer",onClick:()=>t("/company-dashboard/your-projects"),children:e.jsx("p",{className:"text-[16px] sm:text-[24px] font-semibold text-white",children:"Your Projects"})}),e.jsx("div",{className:"px-[16px] py-[8px] bg-[#84bcf5] rounded-xl flex justify-center items-center cursor-pointer",onClick:()=>t("/company-dashboard/your-hires"),children:e.jsx("p",{className:"text-[16px] sm:text-[24px] font-semibold text-white",children:"Your Hires"})})]}),r&&e.jsx(v,{onClose:o}),e.jsx("div",{className:"bg-white py-10 sm:py-20 px-4 sm:px-24",children:e.jsx(g,{})}),e.jsx(h,{})]})};export{k as default};
