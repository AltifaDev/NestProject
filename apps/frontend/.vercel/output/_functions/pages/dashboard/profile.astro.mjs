import { c as createComponent, r as renderComponent, g as renderScript, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DT-sokh3.mjs';
import 'piccolore';
import { $ as $$DashboardLayout, N as NotificationBell } from '../../chunks/NotificationBell_DhIfkeMo.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { p as payloadClient, P as PAYLOAD_URL } from '../../chunks/payload-client_0exDmbme.mjs';
import { Loader2, Check, Save, User, Camera, Link2, Briefcase, Globe, MapPin } from 'lucide-react';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

function AgentProfileForm() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [agentId, setAgentId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    phone: "",
    email: "",
    bio: "",
    fullBio: "",
    whatsapp: "",
    lineId: "",
    facebook: "",
    linkedin: "",
    instagram: "",
    licenseNumber: "",
    experienceYears: 0,
    languages: [],
    serviceAreas: [],
    officeAddress: "",
    photoId: null,
    photoUrl: ""
  });
  useEffect(() => {
    const loadProfile = async () => {
      const user = payloadClient.getUser();
      if (!user || user.role !== "agent" || !user.agent) {
        setLoading(false);
        return;
      }
      try {
        const id = typeof user.agent === "object" ? user.agent.id : user.agent;
        setAgentId(id);
        const response = await fetch(`${PAYLOAD_URL}/api/agents/${id}?depth=1`);
        if (response.ok) {
          const agent = await response.json();
          let photoUrl = "";
          let photoId = null;
          if (agent.photo && typeof agent.photo === "object") {
            photoId = agent.photo.id;
            photoUrl = agent.photo.url.startsWith("http") ? agent.photo.url : `${PAYLOAD_URL}${agent.photo.url}`;
          }
          setFormData({
            name: agent.name || "",
            role: agent.role || "agent",
            phone: agent.phone || "",
            email: agent.email || "",
            bio: agent.bio || "",
            fullBio: agent.fullBio || "",
            whatsapp: agent.whatsapp || "",
            lineId: agent.lineId || "",
            facebook: agent.facebook || "",
            linkedin: agent.linkedin || "",
            instagram: agent.instagram || "",
            licenseNumber: agent.licenseNumber || "",
            experienceYears: agent.experienceYears || 0,
            languages: agent.languages || [],
            serviceAreas: agent.serviceAreas || [],
            officeAddress: agent.officeAddress || "",
            photoId,
            photoUrl
          });
        }
      } catch (err) {
        console.error("Failed to load agent profile", err);
      } finally {
        setLoading(false);
      }
    };
    loadProfile();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handlePhotoUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const objectUrl = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, photoUrl: objectUrl }));
      const uploadedMedia = await payloadClient.uploadMedia(file);
      if (uploadedMedia?.doc?.id) {
        setFormData((prev) => ({ ...prev, photoId: uploadedMedia.doc.id }));
      }
    } catch (err) {
      console.error("Failed to upload photo", err);
      alert("Failed to upload photo. Please try again.");
    }
  };
  const handleArrayInput = (e, field) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const val = e.currentTarget.value.trim();
      if (val && !formData[field].includes(val)) {
        setFormData((prev) => ({ ...prev, [field]: [...prev[field], val] }));
        e.currentTarget.value = "";
      }
    }
  };
  const removeArrayItem = (field, itemToRemove) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].filter((item) => item !== itemToRemove)
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agentId) return;
    setSaving(true);
    setSuccessMessage("");
    try {
      const token = localStorage.getItem("payload_token");
      const dataToSave = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        bio: formData.bio,
        fullBio: formData.fullBio,
        whatsapp: formData.whatsapp,
        lineId: formData.lineId,
        facebook: formData.facebook,
        linkedin: formData.linkedin,
        instagram: formData.instagram,
        licenseNumber: formData.licenseNumber,
        experienceYears: Number(formData.experienceYears),
        languages: formData.languages,
        serviceAreas: formData.serviceAreas,
        officeAddress: formData.officeAddress,
        photo: formData.photoId
      };
      const response = await fetch(`${PAYLOAD_URL}/api/agents/${agentId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `JWT ${token}`
        },
        body: JSON.stringify(dataToSave)
      });
      if (response.ok) {
        setSuccessMessage("Profile updated successfully!");
        setTimeout(() => setSuccessMessage(""), 3e3);
      } else {
        throw new Error("Failed to save");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to save profile. Please see console.");
    } finally {
      setSaving(false);
    }
  };
  if (loading) return /* @__PURE__ */ jsxs("div", { className: "apf-loading", children: [
    /* @__PURE__ */ jsx(Loader2, { className: "animate-spin" }),
    " Loading Profile..."
  ] });
  if (!agentId) return /* @__PURE__ */ jsx("div", { className: "apf-error", children: "Agent profile not found." });
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "apf-container", children: [
    /* @__PURE__ */ jsxs("div", { className: "apf-header", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "apf-title", children: "Agent Profile" }),
        /* @__PURE__ */ jsx("p", { className: "apf-description", children: "Manage your public professional presence." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "apf-actions", children: [
        successMessage && /* @__PURE__ */ jsxs("span", { className: "apf-success", children: [
          /* @__PURE__ */ jsx(Check, { size: 16 }),
          " Saved"
        ] }),
        /* @__PURE__ */ jsxs("button", { type: "submit", disabled: saving, className: "apf-btn-primary", children: [
          saving ? /* @__PURE__ */ jsx(Loader2, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ jsx(Save, { size: 16 }),
          saving ? "Saving..." : "Save Changes"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "apf-grid", children: [
      /* @__PURE__ */ jsxs("div", { className: "apf-col", children: [
        /* @__PURE__ */ jsxs("div", { className: "apf-card", children: [
          /* @__PURE__ */ jsxs("h3", { className: "apf-card-title", children: [
            /* @__PURE__ */ jsx(User, { size: 18 }),
            " Profile Picture"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "apf-avatar-upload", children: [
            /* @__PURE__ */ jsx("div", { className: "apf-avatar-preview", children: formData.photoUrl ? /* @__PURE__ */ jsx("img", { src: formData.photoUrl, alt: "Agent Avatar", className: "apf-avatar-img" }) : /* @__PURE__ */ jsx(
              "img",
              {
                src: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(formData.name || "Agent")}&backgroundColor=3b82f6&textColor=ffffff`,
                alt: "Profile Placeholder",
                className: "apf-avatar-img"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "apf-upload-controls", children: [
              /* @__PURE__ */ jsxs("label", { className: "apf-upload-lbl", children: [
                /* @__PURE__ */ jsx(Camera, { size: 14 }),
                " Upload New Photo",
                /* @__PURE__ */ jsx("input", { type: "file", accept: "image/*", onChange: handlePhotoUpload, style: { display: "none" } })
              ] }),
              formData.photoUrl && /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  className: "apf-upload-lbl",
                  style: { marginTop: "0.2rem", color: "#ef4444", borderColor: "#fecaca", background: "transparent" },
                  onClick: () => setFormData((prev) => ({ ...prev, photoUrl: "", photoId: null })),
                  children: "Remove Photo"
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "apf-hint", style: { marginTop: "0.5rem" }, children: "Recommended format: Square 500x500px, JPG or PNG." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "apf-card", children: [
          /* @__PURE__ */ jsxs("h3", { className: "apf-card-title", children: [
            /* @__PURE__ */ jsx(Link2, { size: 18 }),
            " Connect Links"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "apf-field-group", children: [
            /* @__PURE__ */ jsx("label", { children: "WhatsApp Number" }),
            /* @__PURE__ */ jsx("input", { type: "text", name: "whatsapp", value: formData.whatsapp, onChange: handleChange, placeholder: "+66 8X XXX XXXX" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "apf-field-group", children: [
            /* @__PURE__ */ jsx("label", { children: "LINE ID" }),
            /* @__PURE__ */ jsx("input", { type: "text", name: "lineId", value: formData.lineId, onChange: handleChange, placeholder: "@yourlineid" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "apf-field-group", children: [
            /* @__PURE__ */ jsx("label", { children: "LinkedIn Profile" }),
            /* @__PURE__ */ jsx("input", { type: "url", name: "linkedin", value: formData.linkedin, onChange: handleChange, placeholder: "https://linkedin.com/in/..." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "apf-field-group", children: [
            /* @__PURE__ */ jsx("label", { children: "Instagram / Facebook" }),
            /* @__PURE__ */ jsx("input", { type: "text", name: "instagram", value: formData.instagram, onChange: handleChange, placeholder: "@username or URL" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "apf-col apf-span-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "apf-card", children: [
          /* @__PURE__ */ jsxs("h3", { className: "apf-card-title", children: [
            /* @__PURE__ */ jsx(Briefcase, { size: 18 }),
            " Professional Details"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "apf-row-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "apf-field-group", children: [
              /* @__PURE__ */ jsx("label", { children: "Full Name" }),
              /* @__PURE__ */ jsx("input", { type: "text", name: "name", required: true, value: formData.name, onChange: handleChange })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "apf-field-group", children: [
              /* @__PURE__ */ jsx("label", { children: "Role (View Only)" }),
              /* @__PURE__ */ jsx("input", { type: "text", value: formData.role.replace("_", " ").toUpperCase(), disabled: true, className: "apf-disabled" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "apf-row-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "apf-field-group", children: [
              /* @__PURE__ */ jsx("label", { children: "Phone" }),
              /* @__PURE__ */ jsx("input", { type: "text", name: "phone", required: true, value: formData.phone, onChange: handleChange, placeholder: "+66..." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "apf-field-group", children: [
              /* @__PURE__ */ jsx("label", { children: "Email address" }),
              /* @__PURE__ */ jsx("input", { type: "email", name: "email", required: true, value: formData.email, onChange: handleChange })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "apf-card", children: [
          /* @__PURE__ */ jsxs("h3", { className: "apf-card-title", children: [
            /* @__PURE__ */ jsx(Globe, { size: 18 }),
            " Biography & Experience"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "apf-field-group", children: [
            /* @__PURE__ */ jsx("label", { children: "Short Bio (Headline)" }),
            /* @__PURE__ */ jsx("input", { type: "text", name: "bio", value: formData.bio, onChange: handleChange, placeholder: "e.g. Luxury Condo Specialist in Sukhumvit", maxLength: 100 }),
            /* @__PURE__ */ jsx("span", { className: "apf-hint", children: "Max 100 characters. Shown prominently on listings." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "apf-field-group", children: [
            /* @__PURE__ */ jsx("label", { children: "Full Biography" }),
            /* @__PURE__ */ jsx("textarea", { name: "fullBio", value: formData.fullBio, onChange: handleChange, rows: 5, placeholder: "Describe your background, expertise, and how you help clients..." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "apf-row-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "apf-field-group", children: [
              /* @__PURE__ */ jsx("label", { children: "Years of Experience" }),
              /* @__PURE__ */ jsx("input", { type: "number", min: "0", name: "experienceYears", value: formData.experienceYears, onChange: handleChange })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "apf-field-group", children: [
              /* @__PURE__ */ jsx("label", { children: "License / Accreditation #" }),
              /* @__PURE__ */ jsx("input", { type: "text", name: "licenseNumber", value: formData.licenseNumber, onChange: handleChange, placeholder: "Optional" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "apf-card", children: [
          /* @__PURE__ */ jsxs("h3", { className: "apf-card-title", children: [
            /* @__PURE__ */ jsx(MapPin, { size: 18 }),
            " Specialties & Areas"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "apf-row-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "apf-field-group", children: [
              /* @__PURE__ */ jsxs("label", { children: [
                "Languages Spoken ",
                /* @__PURE__ */ jsx("span", { className: "apf-hint", children: "(Press Enter to add)" })
              ] }),
              /* @__PURE__ */ jsx("input", { type: "text", placeholder: "e.g. English, Thai", onKeyDown: (e) => handleArrayInput(e, "languages") }),
              /* @__PURE__ */ jsx("div", { className: "apf-tags", children: formData.languages.map((lang) => /* @__PURE__ */ jsxs("span", { className: "apf-tag", children: [
                lang,
                " ",
                /* @__PURE__ */ jsx("button", { type: "button", onClick: () => removeArrayItem("languages", lang), children: "×" })
              ] }, lang)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "apf-field-group", children: [
              /* @__PURE__ */ jsxs("label", { children: [
                "Service Neighborhoods ",
                /* @__PURE__ */ jsx("span", { className: "apf-hint", children: "(Press Enter to add)" })
              ] }),
              /* @__PURE__ */ jsx("input", { type: "text", placeholder: "e.g. Thong Lo, Sathorn", onKeyDown: (e) => handleArrayInput(e, "serviceAreas") }),
              /* @__PURE__ */ jsx("div", { className: "apf-tags", children: formData.serviceAreas.map((area) => /* @__PURE__ */ jsxs("span", { className: "apf-tag", children: [
                area,
                " ",
                /* @__PURE__ */ jsx("button", { type: "button", onClick: () => removeArrayItem("serviceAreas", area), children: "×" })
              ] }, area)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "apf-field-group", children: [
            /* @__PURE__ */ jsx("label", { children: "Office Address" }),
            /* @__PURE__ */ jsx("textarea", { name: "officeAddress", value: formData.officeAddress, onChange: handleChange, rows: 2, placeholder: "Physical branch or office location..." })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
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
            ` })
  ] });
}

const $$Profile = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Agent Profile | NEST Elite Dashboard", "data-astro-cid-rxvxkuhm": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="dashboard-root" data-astro-cid-rxvxkuhm> <!-- Sidebar Navigation --> <aside class="dashboard-sidebar" data-astro-cid-rxvxkuhm> <div class="sidebar-header" data-astro-cid-rxvxkuhm> <div class="brand-box" data-astro-cid-rxvxkuhm> <div class="brand-logo" data-astro-cid-rxvxkuhm>N</div> <div class="brand-info" data-astro-cid-rxvxkuhm> <span class="brand-name" data-astro-cid-rxvxkuhm>NEST ELITE</span> <span class="brand-tag" data-astro-cid-rxvxkuhm>AGENT PORTAL</span> </div> </div> </div> <nav class="sidebar-menu" data-astro-cid-rxvxkuhm> <div class="menu-section" data-astro-cid-rxvxkuhm> <span class="section-title" data-astro-cid-rxvxkuhm>CORE</span> <a href="/dashboard" class="menu-item" data-astro-cid-rxvxkuhm> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-rxvxkuhm><rect width="7" height="9" x="3" y="3" rx="1" data-astro-cid-rxvxkuhm></rect><rect width="7" height="5" x="14" y="3" rx="1" data-astro-cid-rxvxkuhm></rect><rect width="7" height="9" x="14" y="12" rx="1" data-astro-cid-rxvxkuhm></rect><rect width="7" height="5" x="3" y="16" rx="1" data-astro-cid-rxvxkuhm></rect></svg> <span data-astro-cid-rxvxkuhm>Overview</span> </a> <a href="/dashboard/properties" class="menu-item" data-astro-cid-rxvxkuhm> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-rxvxkuhm><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" data-astro-cid-rxvxkuhm></path><polyline points="9 22 9 12 15 12 15 22" data-astro-cid-rxvxkuhm></polyline></svg> <span data-astro-cid-rxvxkuhm>Properties</span> </a> <a href="/dashboard/profile" class="menu-item active" data-astro-cid-rxvxkuhm> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-rxvxkuhm><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" data-astro-cid-rxvxkuhm></path><circle cx="12" cy="7" r="4" data-astro-cid-rxvxkuhm></circle></svg> <span data-astro-cid-rxvxkuhm>Profile Management</span> </a> </div> <div class="menu-section" data-astro-cid-rxvxkuhm> <span class="section-title" data-astro-cid-rxvxkuhm>ENGAGEMENT</span> <a href="/dashboard/leads" class="menu-item" data-astro-cid-rxvxkuhm> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-rxvxkuhm><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" data-astro-cid-rxvxkuhm></path><circle cx="9" cy="7" r="4" data-astro-cid-rxvxkuhm></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87" data-astro-cid-rxvxkuhm></path><path d="M16 3.13a4 4 0 0 1 0 7.75" data-astro-cid-rxvxkuhm></path></svg> <span data-astro-cid-rxvxkuhm>Leads & CRM</span> </a> <a href="/dashboard/calendar" class="menu-item" data-astro-cid-rxvxkuhm> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-rxvxkuhm><rect width="18" height="18" x="3" y="4" rx="2" ry="2" data-astro-cid-rxvxkuhm></rect><line x1="16" x2="16" y1="2" y2="6" data-astro-cid-rxvxkuhm></line><line x1="8" x2="8" y1="2" y2="6" data-astro-cid-rxvxkuhm></line><line x1="3" x2="21" y1="10" y2="10" data-astro-cid-rxvxkuhm></line></svg> <span data-astro-cid-rxvxkuhm>Calendar</span> </a> </div> <div class="menu-section" data-astro-cid-rxvxkuhm> <span class="section-title" data-astro-cid-rxvxkuhm>GROWTH</span> <a href="/dashboard/marketing" class="menu-item" data-astro-cid-rxvxkuhm> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-rxvxkuhm><path d="m12 14 4-4" data-astro-cid-rxvxkuhm></path><path d="M3.34 19a10 10 0 1 1 17.32 0" data-astro-cid-rxvxkuhm></path></svg> <span data-astro-cid-rxvxkuhm>Marketing</span> </a> <a href="/dashboard/performance" class="menu-item" data-astro-cid-rxvxkuhm> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-rxvxkuhm><path d="M12 20V10" data-astro-cid-rxvxkuhm></path><path d="M18 20V4" data-astro-cid-rxvxkuhm></path><path d="M6 20v-4" data-astro-cid-rxvxkuhm></path></svg> <span data-astro-cid-rxvxkuhm>Analytics</span> </a> </div> </nav> <div class="sidebar-footer" data-astro-cid-rxvxkuhm> <button id="theme-toggle" class="theme-switch" aria-label="Toggle Theme" data-astro-cid-rxvxkuhm> <div class="switch-icons" data-astro-cid-rxvxkuhm> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sun-icon" data-astro-cid-rxvxkuhm><circle cx="12" cy="12" r="4" data-astro-cid-rxvxkuhm></circle><path d="M12 2v2" data-astro-cid-rxvxkuhm></path><path d="M12 20v2" data-astro-cid-rxvxkuhm></path><path d="m4.93 4.93 1.41 1.41" data-astro-cid-rxvxkuhm></path><path d="m17.66 17.66 1.41 1.41" data-astro-cid-rxvxkuhm></path><path d="M2 12h2" data-astro-cid-rxvxkuhm></path><path d="M20 12h2" data-astro-cid-rxvxkuhm></path><path d="m6.34 17.66-1.41 1.41" data-astro-cid-rxvxkuhm></path><path d="m19.07 4.93-1.41 1.41" data-astro-cid-rxvxkuhm></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="moon-icon" data-astro-cid-rxvxkuhm><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" data-astro-cid-rxvxkuhm></path></svg> </div> <span class="switch-text" data-astro-cid-rxvxkuhm>Switch Theme</span> </button> <div class="footer-divider" data-astro-cid-rxvxkuhm></div> <button id="logout-btn" class="menu-item logout" data-astro-cid-rxvxkuhm> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon logout-icon" data-astro-cid-rxvxkuhm><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" data-astro-cid-rxvxkuhm></path><polyline points="16 17 21 12 16 7" data-astro-cid-rxvxkuhm></polyline><line x1="21" x2="9" y1="12" y2="12" data-astro-cid-rxvxkuhm></line></svg> <span data-astro-cid-rxvxkuhm>Logout</span> </button> </div> </aside> <!-- Main Content Area --> <main class="dashboard-main" data-astro-cid-rxvxkuhm> <header class="main-header" data-astro-cid-rxvxkuhm> <div class="greeting-box" data-astro-cid-rxvxkuhm> <h1 class="welcome-text" data-astro-cid-rxvxkuhm>Settings & Profile</h1> <p id="user-display" class="user-id" data-astro-cid-rxvxkuhm>Manage your account ✨</p> </div> <div class="header-actions" data-astro-cid-rxvxkuhm> ${renderComponent($$result2, "NotificationBell", NotificationBell, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/altifa/Documents/nest-webapp/apps/frontend/src/components/dashboard/NotificationBell.tsx", "client:component-export": "default", "data-astro-cid-rxvxkuhm": true })} <a href="/agent/login" class="add-property-btn" style="background: var(--bg-card); color: var(--text-main); border: 1px solid var(--border-subtle);" data-astro-cid-rxvxkuhm> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-rxvxkuhm><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" data-astro-cid-rxvxkuhm></path><polyline points="10 17 15 12 10 7" data-astro-cid-rxvxkuhm></polyline><line x1="15" x2="3" y1="12" y2="12" data-astro-cid-rxvxkuhm></line></svg> <span data-astro-cid-rxvxkuhm>Agent Login Page</span> </a> <div class="profile-summary" data-astro-cid-rxvxkuhm> <div class="profile-text" data-astro-cid-rxvxkuhm> <span id="user-email-full" class="email-label" data-astro-cid-rxvxkuhm></span> <span class="badge-elite" data-astro-cid-rxvxkuhm>Elite Member</span> </div> <div class="profile-orb" data-astro-cid-rxvxkuhm></div> </div> </div> </header> <div class="main-scroll" data-astro-cid-rxvxkuhm> <div class="content-wrapper" data-astro-cid-rxvxkuhm> ${renderComponent($$result2, "AgentProfileForm", AgentProfileForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/altifa/Documents/nest-webapp/apps/frontend/src/components/dashboard/AgentProfileForm.tsx", "client:component-export": "default", "data-astro-cid-rxvxkuhm": true })} </div> </div> </main> </div> ` })} ${renderScript($$result, "/Users/altifa/Documents/nest-webapp/apps/frontend/src/pages/dashboard/profile.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/altifa/Documents/nest-webapp/apps/frontend/src/pages/dashboard/profile.astro", void 0);

const $$file = "/Users/altifa/Documents/nest-webapp/apps/frontend/src/pages/dashboard/profile.astro";
const $$url = "/dashboard/profile";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Profile,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
