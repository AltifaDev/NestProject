import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as s}from"./index.CRC3r6US.js";import{s as u}from"./supabase.v0okrWp3.js";import"./index.BbNJ08op.js";function A(){const[a,f]=s.useState(!0),[o,n]=s.useState(!1),[l,j]=s.useState(""),[c,v]=s.useState(""),[g,w]=s.useState(""),[p,k]=s.useState(""),[m,i]=s.useState(null),[x,h]=s.useState(null),y=async r=>{r.preventDefault(),n(!0),i(null),h(null);try{if(a){const{error:t}=await u.auth.signInWithPassword({email:l,password:c});if(t)throw t;window.location.href="/"}else{const{error:t,data:d}=await u.auth.signUp({email:l,password:c,options:{data:{full_name:g,phone:p}}});if(t)throw t;d.user&&d.user.identities&&d.user.identities.length===0?i("This email is already registered. Please sign in instead."):h("We've sent a confirmation link to your email. Please verify to continue.")}}catch(t){i(t.message)}finally{n(!1)}},b=async r=>{n(!0),i(null);try{const{error:t}=await u.auth.signInWithOAuth({provider:r,options:{redirectTo:`${window.location.origin}/`}});if(t)throw t}catch(t){i(t.message),n(!1)}};return e.jsxs("div",{className:"auth-root",children:[e.jsx("style",{children:`
                .auth-root {
                    width: 100%;
                }

                .auth-card {
                    position: relative;
                    z-index: 10;
                }

                .auth-header {
                    text-align: center;
                    margin-bottom: 2.5rem;
                }

                .auth-title {
                    font-size: 2rem;
                    font-weight: 800;
                    color: white;
                    margin-bottom: 0.5rem;
                    letter-spacing: -0.03em;
                }

                .auth-subtitle {
                    color: rgba(255,255,255,0.4);
                    font-size: 0.95rem;
                    font-weight: 400;
                    line-height: 1.5;
                }

                /* Alerts */
                .auth-alert {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.75rem;
                    padding: 1rem 1.25rem;
                    border-radius: 14px;
                    margin-bottom: 1.75rem;
                    font-size: 0.85rem;
                    font-weight: 500;
                    line-height: 1.5;
                }
                .auth-alert-error {
                    background: rgba(239,68,68,0.08);
                    border: 1px solid rgba(239,68,68,0.15);
                    color: #fca5a5;
                }
                .auth-alert-success {
                    background: rgba(34,197,94,0.08);
                    border: 1px solid rgba(34,197,94,0.15);
                    color: #86efac;
                }
                .auth-alert svg {
                    flex-shrink: 0;
                    margin-top: 1px;
                }

                /* Social buttons */
                .auth-social-row {
                    display: flex;
                    gap: 0.75rem;
                    margin-bottom: 1.75rem;
                }
                .auth-social-btn {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.6rem;
                    height: 52px;
                    border-radius: 14px;
                    border: 1px solid rgba(255,255,255,0.1);
                    background: rgba(255,255,255,0.03);
                    color: rgba(255,255,255,0.7);
                    font-size: 0.85rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.25s ease;
                }
                .auth-social-btn:hover {
                    background: rgba(255,255,255,0.07);
                    border-color: rgba(255,255,255,0.2);
                    color: white;
                }
                .auth-social-btn svg {
                    width: 20px;
                    height: 20px;
                }

                /* Divider */
                .auth-divider {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1.75rem;
                }
                .auth-divider-line {
                    flex: 1;
                    height: 1px;
                    background: rgba(255,255,255,0.08);
                }
                .auth-divider-text {
                    font-size: 0.7rem;
                    font-weight: 700;
                    color: rgba(255,255,255,0.2);
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                }

                /* Form fields */
                .auth-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .auth-field-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                }
                .auth-label {
                    font-size: 0.7rem;
                    font-weight: 700;
                    color: rgba(255,255,255,0.3);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    padding-left: 0.25rem;
                }
                .auth-input-wrap {
                    position: relative;
                }
                .auth-input-icon {
                    position: absolute;
                    left: 1rem;
                    top: 50%;
                    transform: translateY(-50%);
                    color: rgba(255,255,255,0.2);
                    pointer-events: none;
                }
                .auth-input {
                    width: 100%;
                    height: 52px;
                    background: rgba(255,255,255,0.04);
                    border: 1.5px solid rgba(255,255,255,0.08);
                    border-radius: 14px;
                    padding: 0 1rem 0 3rem;
                    color: white;
                    font-size: 0.95rem;
                    font-weight: 400;
                    outline: none;
                    transition: all 0.25s ease;
                    font-family: inherit;
                }
                .auth-input:focus {
                    border-color: #3b82f6;
                    background: rgba(59,130,246,0.04);
                    box-shadow: 0 0 0 4px rgba(59,130,246,0.1);
                }
                .auth-input::placeholder {
                    color: rgba(255,255,255,0.15);
                }

                /* Forgot link row */
                .auth-label-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 0.25rem;
                }
                .auth-forgot {
                    font-size: 0.7rem;
                    font-weight: 700;
                    color: rgba(59,130,246,0.7);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    background: none;
                    border: none;
                    cursor: pointer;
                    transition: color 0.2s;
                    padding: 0;
                }
                .auth-forgot:hover {
                    color: #3b82f6;
                }

                /* Submit */
                .auth-submit {
                    width: 100%;
                    height: 52px;
                    margin-top: 0.75rem;
                    background: white;
                    color: #020617;
                    border: none;
                    border-radius: 14px;
                    font-size: 0.9rem;
                    font-weight: 700;
                    letter-spacing: 0.02em;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.6rem;
                    transition: all 0.3s ease;
                }
                .auth-submit:hover {
                    background: #3b82f6;
                    color: white;
                    transform: translateY(-1px);
                    box-shadow: 0 12px 30px -8px rgba(59,130,246,0.4);
                }
                .auth-submit:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                    transform: none;
                }
                .auth-submit svg {
                    width: 18px;
                    height: 18px;
                }
                @keyframes spin { to { transform: rotate(360deg); } }
                .auth-spinner {
                    animation: spin 0.8s linear infinite;
                }

                /* Toggle */
                .auth-toggle {
                    text-align: center;
                    margin-top: 2.5rem;
                    font-size: 0.875rem;
                    color: rgba(255,255,255,0.35);
                    font-weight: 500;
                }
                .auth-toggle-btn {
                    color: white;
                    font-weight: 700;
                    background: none;
                    border: none;
                    cursor: pointer;
                    border-bottom: 1px solid rgba(255,255,255,0.15);
                    padding-bottom: 2px;
                    margin-left: 0.3rem;
                    transition: all 0.2s;
                }
                .auth-toggle-btn:hover {
                    color: #3b82f6;
                    border-color: #3b82f6;
                }

                /* Registration extra fields animation */
                .auth-extra-fields {
                    overflow: hidden;
                    transition: max-height 0.4s ease, opacity 0.3s ease;
                }
                /* Agent Link */
                .auth-agent-link {
                    margin-top: 1.5rem;
                    padding-top: 1.5rem;
                    border-top: 1px solid rgba(255,255,255,0.08);
                    display: flex;
                    justify-content: center;
                }
                .agent-link-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 1rem;
                    border-radius: 8px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 0.8rem;
                    font-weight: 500;
                    text-decoration: none;
                    transition: all 0.2s;
                }
                .agent-link-btn:hover {
                    background: rgba(255, 255, 255, 0.08);
                    color: rgba(255, 255, 255, 0.9);
                    border-color: rgba(255, 255, 255, 0.15);
                }
                .agent-link-btn .icon {
                    opacity: 0.6;
                    font-size: 0.9rem;
                }
            `}),e.jsxs("div",{className:"auth-card",id:"auth-form-card",children:[e.jsxs("div",{className:"auth-header",children:[e.jsx("h1",{className:"auth-title",children:a?"Welcome Back":"Create Account"}),e.jsx("p",{className:"auth-subtitle",children:a?"Sign in to explore properties and save your favorites":"Join us to discover your perfect property"})]}),m&&e.jsxs("div",{className:"auth-alert auth-alert-error",children:[e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),e.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),e.jsx("span",{children:m})]}),x&&e.jsxs("div",{className:"auth-alert auth-alert-success",children:[e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),e.jsx("span",{children:x})]}),e.jsxs("div",{className:"auth-social-row",children:[e.jsxs("button",{type:"button",className:"auth-social-btn",onClick:()=>b("google"),disabled:o,children:[e.jsxs("svg",{viewBox:"0 0 24 24",children:[e.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z",fill:"#4285F4"}),e.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),e.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),e.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]}),"Google"]}),e.jsxs("button",{type:"button",className:"auth-social-btn",onClick:()=>b("facebook"),disabled:o,children:[e.jsx("svg",{viewBox:"0 0 24 24",fill:"#1877F2",children:e.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),"Facebook"]})]}),e.jsxs("div",{className:"auth-divider",children:[e.jsx("div",{className:"auth-divider-line"}),e.jsx("span",{className:"auth-divider-text",children:"or continue with email"}),e.jsx("div",{className:"auth-divider-line"})]}),e.jsxs("form",{onSubmit:y,className:"auth-form",children:[!a&&e.jsxs("div",{className:"auth-extra-fields",children:[e.jsxs("div",{className:"auth-field-group",style:{marginBottom:"1rem"},children:[e.jsx("label",{className:"auth-label",children:"Full Name"}),e.jsxs("div",{className:"auth-input-wrap",children:[e.jsxs("svg",{className:"auth-input-icon",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),e.jsx("input",{type:"text",value:g,onChange:r=>w(r.target.value),className:"auth-input",placeholder:"John Doe"})]})]}),e.jsxs("div",{className:"auth-field-group",children:[e.jsx("label",{className:"auth-label",children:"Phone Number"}),e.jsxs("div",{className:"auth-input-wrap",children:[e.jsx("svg",{className:"auth-input-icon",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})}),e.jsx("input",{type:"tel",value:p,onChange:r=>k(r.target.value),className:"auth-input",placeholder:"+66 XX XXX XXXX"})]})]})]}),e.jsxs("div",{className:"auth-field-group",children:[e.jsx("label",{className:"auth-label",children:"Email Address"}),e.jsxs("div",{className:"auth-input-wrap",children:[e.jsxs("svg",{className:"auth-input-icon",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),e.jsx("path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"})]}),e.jsx("input",{type:"email",required:!0,value:l,onChange:r=>j(r.target.value),className:"auth-input",placeholder:"name@example.com"})]})]}),e.jsxs("div",{className:"auth-field-group",children:[e.jsxs("div",{className:"auth-label-row",children:[e.jsx("label",{className:"auth-label",children:"Password"}),a&&e.jsx("button",{type:"button",className:"auth-forgot",children:"Forgot?"})]}),e.jsxs("div",{className:"auth-input-wrap",children:[e.jsxs("svg",{className:"auth-input-icon",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),e.jsx("input",{type:"password",required:!0,value:c,onChange:r=>v(r.target.value),className:"auth-input",placeholder:"••••••••"})]})]}),e.jsx("button",{type:"submit",disabled:o,className:"auth-submit",children:o?e.jsx("svg",{className:"auth-spinner",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:a?"Sign In":"Create Account"}),e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})})]}),e.jsxs("div",{className:"auth-toggle",children:[a?"New to Nest of Assets?":"Already have an account?",e.jsx("button",{onClick:()=>{f(!a),i(null),h(null)},className:"auth-toggle-btn",children:a?"Create your account":"Sign in now"})]}),e.jsx("div",{className:"auth-agent-link",children:e.jsxs("a",{href:"/agent/login",className:"agent-link-btn",children:[e.jsx("span",{className:"icon",children:"🔐"}),e.jsx("span",{className:"text",children:"Agent Portal Access"})]})})]})]})}export{A as default};
