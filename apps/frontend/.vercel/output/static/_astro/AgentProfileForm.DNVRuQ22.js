import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as d}from"./index.CRC3r6US.js";import{p as j,P as m}from"./payload-client.Bgp2zVY_.js";import{L as y}from"./loader-circle.Bn9BaOCc.js";import{C as S}from"./check.BcOmL8nZ.js";import{S as I,C as z}from"./save.BGpreTZp.js";import{U as L,B as U}from"./user.ChmUyGds.js";import{c as N}from"./createLucideIcon.BistqCsR.js";import{M as B}from"./map-pin.CAUsXeja.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],M=N("globe",E);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],D=N("link-2",T);function H(){const[w,h]=d.useState(!0),[c,u]=d.useState(!1),[k,p]=d.useState(""),[f,A]=d.useState(null),[a,t]=d.useState({name:"",role:"",phone:"",email:"",bio:"",fullBio:"",whatsapp:"",lineId:"",facebook:"",linkedin:"",instagram:"",licenseNumber:"",experienceYears:0,languages:[],serviceAreas:[],officeAddress:"",photoId:null,photoUrl:""});d.useEffect(()=>{(async()=>{const i=j.getUser();if(!i||i.role!=="agent"||!i.agent){h(!1);return}try{const l=typeof i.agent=="object"?i.agent.id:i.agent;A(l);const o=await fetch(`${m}/api/agents/${l}?depth=1`);if(o.ok){const s=await o.json();let b="",v=null;s.photo&&typeof s.photo=="object"&&(v=s.photo.id,b=s.photo.url.startsWith("http")?s.photo.url:`${m}${s.photo.url}`),t({name:s.name||"",role:s.role||"agent",phone:s.phone||"",email:s.email||"",bio:s.bio||"",fullBio:s.fullBio||"",whatsapp:s.whatsapp||"",lineId:s.lineId||"",facebook:s.facebook||"",linkedin:s.linkedin||"",instagram:s.instagram||"",licenseNumber:s.licenseNumber||"",experienceYears:s.experienceYears||0,languages:s.languages||[],serviceAreas:s.serviceAreas||[],officeAddress:s.officeAddress||"",photoId:v,photoUrl:b})}}catch(l){console.error("Failed to load agent profile",l)}finally{h(!1)}})()},[]);const n=r=>{const{name:i,value:l}=r.target;t(o=>({...o,[i]:l}))},C=async r=>{const i=r.target.files?.[0];if(i)try{const l=URL.createObjectURL(i);t(s=>({...s,photoUrl:l}));const o=await j.uploadMedia(i);o?.doc?.id&&t(s=>({...s,photoId:o.doc.id}))}catch(l){console.error("Failed to upload photo",l),alert("Failed to upload photo. Please try again.")}},g=(r,i)=>{if(r.key==="Enter"){r.preventDefault();const l=r.currentTarget.value.trim();l&&!a[i].includes(l)&&(t(o=>({...o,[i]:[...o[i],l]})),r.currentTarget.value="")}},x=(r,i)=>{t(l=>({...l,[r]:l[r].filter(o=>o!==i)}))},P=async r=>{if(r.preventDefault(),!!f){u(!0),p("");try{const i=localStorage.getItem("payload_token"),l={name:a.name,phone:a.phone,email:a.email,bio:a.bio,fullBio:a.fullBio,whatsapp:a.whatsapp,lineId:a.lineId,facebook:a.facebook,linkedin:a.linkedin,instagram:a.instagram,licenseNumber:a.licenseNumber,experienceYears:Number(a.experienceYears),languages:a.languages,serviceAreas:a.serviceAreas,officeAddress:a.officeAddress,photo:a.photoId};if((await fetch(`${m}/api/agents/${f}`,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:`JWT ${i}`},body:JSON.stringify(l)})).ok)p("Profile updated successfully!"),setTimeout(()=>p(""),3e3);else throw new Error("Failed to save")}catch(i){console.error(i),alert("Failed to save profile. Please see console.")}finally{u(!1)}}};return w?e.jsxs("div",{className:"apf-loading",children:[e.jsx(y,{className:"animate-spin"})," Loading Profile..."]}):f?e.jsxs("form",{onSubmit:P,className:"apf-container",children:[e.jsxs("div",{className:"apf-header",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"apf-title",children:"Agent Profile"}),e.jsx("p",{className:"apf-description",children:"Manage your public professional presence."})]}),e.jsxs("div",{className:"apf-actions",children:[k&&e.jsxs("span",{className:"apf-success",children:[e.jsx(S,{size:16})," Saved"]}),e.jsxs("button",{type:"submit",disabled:c,className:"apf-btn-primary",children:[c?e.jsx(y,{size:16,className:"animate-spin"}):e.jsx(I,{size:16}),c?"Saving...":"Save Changes"]})]})]}),e.jsxs("div",{className:"apf-grid",children:[e.jsxs("div",{className:"apf-col",children:[e.jsxs("div",{className:"apf-card",children:[e.jsxs("h3",{className:"apf-card-title",children:[e.jsx(L,{size:18})," Profile Picture"]}),e.jsxs("div",{className:"apf-avatar-upload",children:[e.jsx("div",{className:"apf-avatar-preview",children:a.photoUrl?e.jsx("img",{src:a.photoUrl,alt:"Agent Avatar",className:"apf-avatar-img"}):e.jsx("img",{src:`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(a.name||"Agent")}&backgroundColor=3b82f6&textColor=ffffff`,alt:"Profile Placeholder",className:"apf-avatar-img"})}),e.jsxs("div",{className:"apf-upload-controls",children:[e.jsxs("label",{className:"apf-upload-lbl",children:[e.jsx(z,{size:14})," Upload New Photo",e.jsx("input",{type:"file",accept:"image/*",onChange:C,style:{display:"none"}})]}),a.photoUrl&&e.jsx("button",{type:"button",className:"apf-upload-lbl",style:{marginTop:"0.2rem",color:"#ef4444",borderColor:"#fecaca",background:"transparent"},onClick:()=>t(r=>({...r,photoUrl:"",photoId:null})),children:"Remove Photo"}),e.jsx("p",{className:"apf-hint",style:{marginTop:"0.5rem"},children:"Recommended format: Square 500x500px, JPG or PNG."})]})]})]}),e.jsxs("div",{className:"apf-card",children:[e.jsxs("h3",{className:"apf-card-title",children:[e.jsx(D,{size:18})," Connect Links"]}),e.jsxs("div",{className:"apf-field-group",children:[e.jsx("label",{children:"WhatsApp Number"}),e.jsx("input",{type:"text",name:"whatsapp",value:a.whatsapp,onChange:n,placeholder:"+66 8X XXX XXXX"})]}),e.jsxs("div",{className:"apf-field-group",children:[e.jsx("label",{children:"LINE ID"}),e.jsx("input",{type:"text",name:"lineId",value:a.lineId,onChange:n,placeholder:"@yourlineid"})]}),e.jsxs("div",{className:"apf-field-group",children:[e.jsx("label",{children:"LinkedIn Profile"}),e.jsx("input",{type:"url",name:"linkedin",value:a.linkedin,onChange:n,placeholder:"https://linkedin.com/in/..."})]}),e.jsxs("div",{className:"apf-field-group",children:[e.jsx("label",{children:"Instagram / Facebook"}),e.jsx("input",{type:"text",name:"instagram",value:a.instagram,onChange:n,placeholder:"@username or URL"})]})]})]}),e.jsxs("div",{className:"apf-col apf-span-2",children:[e.jsxs("div",{className:"apf-card",children:[e.jsxs("h3",{className:"apf-card-title",children:[e.jsx(U,{size:18})," Professional Details"]}),e.jsxs("div",{className:"apf-row-2",children:[e.jsxs("div",{className:"apf-field-group",children:[e.jsx("label",{children:"Full Name"}),e.jsx("input",{type:"text",name:"name",required:!0,value:a.name,onChange:n})]}),e.jsxs("div",{className:"apf-field-group",children:[e.jsx("label",{children:"Role (View Only)"}),e.jsx("input",{type:"text",value:a.role.replace("_"," ").toUpperCase(),disabled:!0,className:"apf-disabled"})]})]}),e.jsxs("div",{className:"apf-row-2",children:[e.jsxs("div",{className:"apf-field-group",children:[e.jsx("label",{children:"Phone"}),e.jsx("input",{type:"text",name:"phone",required:!0,value:a.phone,onChange:n,placeholder:"+66..."})]}),e.jsxs("div",{className:"apf-field-group",children:[e.jsx("label",{children:"Email address"}),e.jsx("input",{type:"email",name:"email",required:!0,value:a.email,onChange:n})]})]})]}),e.jsxs("div",{className:"apf-card",children:[e.jsxs("h3",{className:"apf-card-title",children:[e.jsx(M,{size:18})," Biography & Experience"]}),e.jsxs("div",{className:"apf-field-group",children:[e.jsx("label",{children:"Short Bio (Headline)"}),e.jsx("input",{type:"text",name:"bio",value:a.bio,onChange:n,placeholder:"e.g. Luxury Condo Specialist in Sukhumvit",maxLength:100}),e.jsx("span",{className:"apf-hint",children:"Max 100 characters. Shown prominently on listings."})]}),e.jsxs("div",{className:"apf-field-group",children:[e.jsx("label",{children:"Full Biography"}),e.jsx("textarea",{name:"fullBio",value:a.fullBio,onChange:n,rows:5,placeholder:"Describe your background, expertise, and how you help clients..."})]}),e.jsxs("div",{className:"apf-row-2",children:[e.jsxs("div",{className:"apf-field-group",children:[e.jsx("label",{children:"Years of Experience"}),e.jsx("input",{type:"number",min:"0",name:"experienceYears",value:a.experienceYears,onChange:n})]}),e.jsxs("div",{className:"apf-field-group",children:[e.jsx("label",{children:"License / Accreditation #"}),e.jsx("input",{type:"text",name:"licenseNumber",value:a.licenseNumber,onChange:n,placeholder:"Optional"})]})]})]}),e.jsxs("div",{className:"apf-card",children:[e.jsxs("h3",{className:"apf-card-title",children:[e.jsx(B,{size:18})," Specialties & Areas"]}),e.jsxs("div",{className:"apf-row-2",children:[e.jsxs("div",{className:"apf-field-group",children:[e.jsxs("label",{children:["Languages Spoken ",e.jsx("span",{className:"apf-hint",children:"(Press Enter to add)"})]}),e.jsx("input",{type:"text",placeholder:"e.g. English, Thai",onKeyDown:r=>g(r,"languages")}),e.jsx("div",{className:"apf-tags",children:a.languages.map(r=>e.jsxs("span",{className:"apf-tag",children:[r," ",e.jsx("button",{type:"button",onClick:()=>x("languages",r),children:"×"})]},r))})]}),e.jsxs("div",{className:"apf-field-group",children:[e.jsxs("label",{children:["Service Neighborhoods ",e.jsx("span",{className:"apf-hint",children:"(Press Enter to add)"})]}),e.jsx("input",{type:"text",placeholder:"e.g. Thong Lo, Sathorn",onKeyDown:r=>g(r,"serviceAreas")}),e.jsx("div",{className:"apf-tags",children:a.serviceAreas.map(r=>e.jsxs("span",{className:"apf-tag",children:[r," ",e.jsx("button",{type:"button",onClick:()=>x("serviceAreas",r),children:"×"})]},r))})]})]}),e.jsxs("div",{className:"apf-field-group",children:[e.jsx("label",{children:"Office Address"}),e.jsx("textarea",{name:"officeAddress",value:a.officeAddress,onChange:n,rows:2,placeholder:"Physical branch or office location..."})]})]})]})]}),e.jsx("style",{children:`
                /* Styling purely for the form */
                .apf-container {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    width: 100%;
                    max-width: 1100px;
                    margin: 0 auto;
                }

                .apf-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: var(--bg-card, rgba(255,255,255,0.02));
                    padding: 1.5rem;
                    border-radius: 12px;
                    border: 1px solid var(--border-subtle, rgba(255,255,255,0.06));
                }

                .apf-title { font-size: 1.25rem; font-weight: 600; color: var(--text-main); margin-bottom: 0.25rem; }
                .apf-description { font-size: 0.85rem; color: var(--text-muted); }

                .apf-actions { display: flex; align-items: center; gap: 1rem; }
                .apf-success { color: #10b981; font-size: 0.85rem; font-weight: 500; display: flex; align-items: center; gap: 0.3rem; }
                
                .apf-btn-primary {
                    background: var(--accent-primary, #3b82f6);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    padding: 0.6rem 1.25rem;
                    font-size: 0.9rem;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .apf-btn-primary:hover:not(:disabled) { opacity: 0.9; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(59,130,246,0.3); }
                .apf-btn-primary:disabled { opacity: 0.7; cursor: not-allowed; }

                .apf-grid {
                    display: grid;
                    grid-template-columns: 1fr 2fr;
                    gap: 1.5rem;
                }
                @media (max-width: 768px) {
                    .apf-grid { grid-template-columns: 1fr; }
                }

                .apf-col { display: flex; flex-direction: column; gap: 1.5rem; }
                .apf-span-2 { /* In grid terms */ }

                .apf-card {
                    background: var(--bg-card, rgba(255,255,255,0.02));
                    border: 1px solid var(--border-subtle, rgba(255,255,255,0.06));
                    border-radius: 12px;
                    padding: 1.5rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1.25rem;
                }

                .apf-card-title {
                    font-size: 1rem;
                    font-weight: 600;
                    color: var(--text-main);
                    border-bottom: 1px solid var(--border-subtle);
                    padding-bottom: 0.75rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .apf-avatar-upload {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    padding: 1rem 0;
                }

                .apf-avatar-preview {
                    width: 120px;
                    height: 120px;
                    border-radius: 50%;
                    background: var(--bg-glass);
                    border: 2px dashed var(--border-medium);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    color: var(--text-dim);
                }

                .apf-avatar-img { width: 100%; height: 100%; object-fit: cover; }
                
                .apf-upload-controls { text-align: center; display: flex; flex-direction: column; gap: 0.5rem; align-items: center;}
                
                .apf-upload-lbl {
                    background: var(--bg-main);
                    border: 1px solid var(--border-subtle);
                    color: var(--text-main);
                    font-size: 0.8rem;
                    font-weight: 500;
                    padding: 0.5rem 1rem;
                    border-radius: 6px;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.4rem;
                    transition: background 0.2s;
                }
                .apf-upload-lbl:hover { background: var(--bg-glass); }

                .apf-field-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                }

                .apf-row-2 {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.25rem;
                }
                @media (max-width: 600px) {
                    .apf-row-2 { grid-template-columns: 1fr; }
                }

                .apf-field-group label { font-size: 0.85rem; font-weight: 500; color: var(--text-muted); }
                .apf-hint { font-size: 0.75rem; color: var(--text-dim); font-weight: 400; margin-left: auto; }

                .apf-field-group input, .apf-field-group textarea {
                    width: 100%;
                    background: var(--bg-main);
                    border: 1px solid var(--border-subtle);
                    color: var(--text-main);
                    padding: 0.6rem 0.8rem;
                    border-radius: 8px;
                    font-size: 0.9rem;
                    font-family: inherit;
                    transition: border-color 0.2s;
                }
                .apf-field-group input:focus, .apf-field-group textarea:focus { outline: none; border-color: var(--accent-primary); }
                .apf-disabled { opacity: 0.6; cursor: not-allowed; }

                .apf-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.5rem; }
                .apf-tag {
                    background: rgba(59,130,246,0.1);
                    color: var(--accent-primary);
                    font-size: 0.75rem;
                    font-weight: 500;
                    padding: 0.2rem 0.6rem;
                    border-radius: 99px;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.3rem;
                }
                .apf-tag button { background: none; border: none; color: inherit; cursor: pointer; padding: 0;font-size:1rem; line-height:1;}
                .apf-tag button:hover { color: #ef4444; }

                .apf-loading, .apf-error {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    padding: 4rem;
                    color: var(--text-muted);
                }
            `})]}):e.jsx("div",{className:"apf-error",children:"Agent profile not found."})}export{H as default};
