import { NavigationMenuDemo } from "./components/Header/Header"
import About from "./pages/About"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contato from "./pages/Contato"

import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

export default function App() {

  const emailRef = useRef<HTMLInputElement>();
  const nameRef = useRef<HTMLInputElement>();
  const [loading, setLoading] = useState(false);
  // ... state
  useEffect(() => emailjs.init("YOUR-PUBLIC-KEY-HERE"), []);
  // Add these
  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_jaf2sqm";
    const templateId = "template_3f9j2os";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
       name: nameRef.current?.value,
        recipient: emailRef.current?.value
      });
      alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section>
      <aside></aside>
      <form className="for" onSubmit={handleSubmit}>
        <div className="form_group">
          <label htmlFor="">name</label>
          <input ref={nameRef} placeholder="enter your name" />
        </div>
        <div className="form_group">
          <label htmlFor="">email</label>
          <input ref={emailRef} type="email" placeholder="enter your email" />
        </div>
        <button className="btn" disabled={loading}>
          subscribe
        </button>
      </form>
    </section>
  );
}
