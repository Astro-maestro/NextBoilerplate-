(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[506],{6109:(e,r,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/register",function(){return t(3348)}])},9358:(e,r,t)=>{"use strict";t.d(r,{x:()=>h,B:()=>g});var s=t(9097),i=t(7665);let o=()=>({queryClient:(0,i.jE)()});var n=t(1145),a=t(4335);let l=new n.A,d=a.A.create({baseURL:"https://wtsacademy.dedicateddevelopers.us/api"});d.interceptors.request.use(function(e){console.log(e,"config");let r=l.get("token");return console.log(r,"token"),r&&(e.headers=e.headers||{},e.headers["x-access-token"]=r),e},function(e){return Promise.reject(e)});let c={auth:{login:"/user/signin",register:"/user/signup",profileDetails:"/user/profile-details"}},p=async e=>{let r=await d.post(c.auth.login,e);return console.log(r,"loginResponse"),r.data},u=async e=>{let r=await d.post(c.auth.register,e);return console.log(r,"registerResponse"),r.data};var m=t(2636),x=t(6715);let h=()=>{let{queryClient:e}=o(),r=new n.A;return(0,s.n)({mutationFn:p,onSuccess:t=>{let{token:s,status:i,message:o}=t||{};200===i&&s&&r.set("token",s,{path:"/",secure:!0}),m.Ay.success("".concat(o)),e.invalidateQueries({queryKey:["USER"]})},onError:(r,t,s)=>{m.Ay.error("".concat((null==r?void 0:r.response.data.message)||(null==r?void 0:r.message))),e.invalidateQueries({queryKey:["USER"]})}})},g=()=>{let{queryClient:e}=o(),r=new n.A,t=(0,x.useRouter)();return(0,s.n)({mutationFn:u,onSuccess:s=>{let{token:i,status:o,message:n}=s||{};200===o&&i?(r.set("token",i,{path:"/",secure:!0}),t.push("/auth/login")):console.log("first"),m.Ay.success("".concat(n)),e.invalidateQueries({queryKey:["USER"]})},onError:(r,t,s)=>{m.Ay.error("".concat((null==r?void 0:r.response.data.msg)||(null==r?void 0:r.message))),console.log(r),console.log(t),console.log(s),e.invalidateQueries({queryKey:["USER"]})}})}},3348:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>U});var s=t(4848),i=t(6540),o=t(4737),n=t.n(o),a=t(2413),l=t(3317),d=t(8590),c=t(2424),p=t(4164),u=t(1317),m=t(1609),x=t(5659);let h=(0,t(8351).Ay)();var g=t(7379),v=t(423),f=t(9599),y=t(2370),j=t(9499),b=t(2308);let _=(0,y.A)(),w=h("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,r)=>r.root});function A(e){return function({props:e,name:r,defaultTheme:t,themeId:s}){let i=(0,v.A)(t);return s&&(i=i[s]||i),function(e){let{theme:r,name:t,props:s}=e;return r&&r.components&&r.components[t]&&r.components[t].defaultProps?(0,g.A)(r.components[t].defaultProps,s):s}({theme:i,name:r,props:e})}({props:e,name:"MuiStack",defaultTheme:_})}let k=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],R=({ownerState:e,theme:r})=>{let t={display:"flex",flexDirection:"column",...(0,j.NI)({theme:r},(0,j.kW)({values:e.direction,breakpoints:r.breakpoints.values}),e=>({flexDirection:e}))};if(e.spacing){let s=(0,b.LX)(r),i=Object.keys(r.breakpoints.values).reduce((r,t)=>(("object"==typeof e.spacing&&null!=e.spacing[t]||"object"==typeof e.direction&&null!=e.direction[t])&&(r[t]=!0),r),{}),o=(0,j.kW)({values:e.direction,base:i}),n=(0,j.kW)({values:e.spacing,base:i});"object"==typeof o&&Object.keys(o).forEach((e,r,t)=>{if(!o[e]){let s=r>0?o[t[r-1]]:"column";o[e]=s}}),t=(0,u.A)(t,(0,j.NI)({theme:r},n,(r,t)=>e.useFlexGap?{gap:(0,b._W)(s,r)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${k(t?o[t]:e.direction)}`]:(0,b._W)(s,r)}}))}return(0,j.iZ)(r.breakpoints,t)};var C=t(3552),S=t(6322);let N=function(e={}){let{createStyledComponent:r=w,useThemeProps:t=A,componentName:o="MuiStack"}=e,n=()=>(0,x.A)({root:["root"]},e=>(0,m.Ay)(o,e),{}),a=r(R);return i.forwardRef(function(e,r){let o=t(e),{component:l="div",direction:d="column",spacing:c=0,divider:u,children:m,className:x,useFlexGap:h=!1,...g}=(0,f.A)(o),v=n();return(0,s.jsx)(a,{as:l,ownerState:{direction:d,spacing:c,useFlexGap:h},ref:r,className:(0,p.A)(v.root,x),...g,children:u?function(e,r){let t=i.Children.toArray(e).filter(Boolean);return t.reduce((e,s,o)=>(e.push(s),o<t.length-1&&e.push(i.cloneElement(r,{key:`separator-${o}`})),e),[])}(m,u):m})})}({createStyledComponent:(0,C.Ay)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,r)=>r.root}),useThemeProps:e=>(0,S.b)({props:e,name:"MuiStack"})});var E=t(1917),F=t(7330),q=t(1106),P=t.n(q),W=t(4883),L=t(9785),z=t(9358),B=t(1166);let U=()=>{var e,r,t,o,p;let[u,m]=(0,i.useState)(),[x,h]=(0,i.useState)(!1),{mutate:g,isPending:v,data:f}=(0,z.B)(),{register:y,handleSubmit:j,formState:{errors:b}}=(0,L.mN)(),_=async e=>{let{first_name:r,last_name:t,email:s,password:i}=e,o=new FormData;o.append("first_name",r),o.append("last_name",t),o.append("email",s),o.append("password",i),u&&o.append("profile_pic",u),g(o),console.log(o)};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:n().registerFormWrapper,children:[(0,s.jsx)("div",{className:n().borderRadiusComponent1,children:"\xa0"}),(0,s.jsx)("div",{className:n().borderRadiusComponent2,children:"\xa0"}),(0,s.jsx)("form",{style:{zIndex:"2"},children:(0,s.jsxs)(W.P.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.5},className:n().registerFormWrapperChild,style:{backgroundColor:"white"},children:[(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,s.jsx)(a.A,{variant:"h4",sx:{fontSize:"24px",fontWeight:"bold",margin:"1rem 0rem"},color:"#1976d2",children:"Sign Up"})}),(0,s.jsxs)("div",{style:{marginBottom:"1rem"},children:[(0,s.jsx)(a.A,{variant:"body1",sx:{fontSize:"16px"},children:"First Name"}),(0,s.jsx)(l.A,{id:"outlined-basic",variant:"outlined",placeholder:"Enter First Name",sx:{width:"100%",mb:"6px"},...y("first_name",{required:"First Name is required",minLength:{value:3,message:"First Name must be at least 3 characters long"}})}),(0,s.jsx)("span",{style:{color:"red"},children:b.first_name&&"*".concat(null===(e=b.first_name)||void 0===e?void 0:e.message)})]}),(0,s.jsxs)("div",{style:{marginBottom:"1rem"},children:[(0,s.jsx)(a.A,{variant:"body1",sx:{fontSize:"16px"},children:"Last Name"}),(0,s.jsx)(l.A,{id:"outlined-basic",variant:"outlined",placeholder:"Enter Last Name",sx:{width:"100%",mb:"6px"},...y("last_name",{required:"Last Name is required",minLength:{value:3,message:"Last Name must be at least 3 characters long"}})}),(0,s.jsx)("span",{style:{color:"red"},children:b.last_name&&"*".concat(null===(r=b.last_name)||void 0===r?void 0:r.message)})]}),(0,s.jsxs)("div",{style:{marginBottom:"1rem"},children:[(0,s.jsx)(a.A,{variant:"body1",sx:{fontSize:"16px"},children:"Email"}),(0,s.jsx)(l.A,{id:"outlined-basic",variant:"outlined",type:"email",placeholder:"Enter email",sx:{width:"100%",mb:"6px"},...y("email",{required:"Email is required",pattern:{value:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,message:"Invalid email format"}})}),(0,s.jsx)("span",{style:{color:"red"},children:b.email&&"*".concat(null===(t=b.email)||void 0===t?void 0:t.message)})]}),(0,s.jsxs)("div",{style:{marginBottom:"1rem"},children:[(0,s.jsx)(a.A,{variant:"body1",sx:{fontSize:"16px"},children:"Password"}),(0,s.jsx)(l.A,{id:"outlined-basic",variant:"outlined",type:x?"text":"password",placeholder:"Enter password",sx:{width:"100%",marginBottom:"5px"},...y("password",{required:"Password is required",pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,message:"Invalid password format"}}),slotProps:{input:{endAdornment:(0,s.jsx)(d.A,{position:"end",children:(0,s.jsx)(c.A,{"aria-label":"toggle password visibility",onClick:()=>{h(!x)},children:x?(0,s.jsx)(B.$_Y,{color:"#000"}):(0,s.jsx)(B.QJN,{color:"#000"})})})}}}),(0,s.jsx)("span",{style:{color:"red"},children:b.password&&"*".concat(null===(o=b.password)||void 0===o?void 0:o.message)})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(a.A,{variant:"body1",sx:{fontSize:"16px"},children:"Profile Pic"}),(0,s.jsx)(l.A,{...y("profile_pic",{required:"profile_pic is required"}),type:"file",variant:"outlined",color:"secondary",onChange:e=>{var r;m((null===(r=e.target.files)||void 0===r?void 0:r[0])||null)},error:!!b.profile_pic,helperText:b.profile_pic&&b.profile_pic.message,fullWidth:!0,sx:{backgroundColor:"white",borderRadius:"5px",mb:4}}),(0,s.jsxs)(N,{direction:{xs:"column-reverse",sm:"row"},style:{display:"".concat(u?"flex":"none"),justifyContent:"center",alignItems:"center",marginBottom:"1rem",gap:"1rem"},children:[(0,s.jsx)("img",{src:u?URL.createObjectURL(u):void 0,alt:"preview",style:{width:"100px",height:"100px",borderRadius:"1rem"}}),u&&(0,s.jsxs)(a.A,{variant:"caption",display:"block",sx:{mt:1},children:["Selected file: ",u.name]})]}),(0,s.jsx)("span",{style:{color:"red"},children:b.profile_pic&&"*".concat(null===(p=b.profile_pic)||void 0===p?void 0:p.message)})]}),(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",padding:"1rem 0rem"},children:(0,s.jsx)(E.A,{variant:"contained",type:"submit",onClick:j(_),sx:{width:"8rem",borderRadius:"2rem",backgroundColor:"#026EF8",display:"flex",justifyContent:"center",alignItems:"center",":disabled":{backgroundColor:"#afd3ff"}},disabled:v,children:v?(0,s.jsx)(F.A,{color:"inherit",size:25}):"Register"})}),(0,s.jsxs)("div",{style:{display:"flex",gap:"10px",justifyContent:"center"},children:[(0,s.jsx)(a.A,{variant:"body1",sx:{fontSize:"16px"},children:"Don't have an account?"}),(0,s.jsx)(P(),{href:"/auth/login",children:(0,s.jsx)(a.A,{variant:"body1",sx:{fontSize:"16px",color:"#0270F7",cursor:"pointer"},children:"Login"})})]})]})})]})})}},4737:e=>{e.exports={registerFormWrapper:"Register_registerFormWrapper__jx8Q6",registerFormWrapperChild:"Register_registerFormWrapperChild__GVa5U",borderRadiusComponent1:"Register_borderRadiusComponent1__kpRoY",borderRadiusComponent2:"Register_borderRadiusComponent2__rNPVN"}}},e=>{var r=r=>e(e.s=r);e.O(0,[374,636,593,792],()=>r(6109)),_N_E=e.O()}]);