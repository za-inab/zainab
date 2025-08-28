import { cn } from "@/lib/utils";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Contact() {
  return (
    <div
      className={cn("flex justify-self-center justify-items-center max-w-8/12")}
    >
      <div className="flex flex-col m-15">
        <p className="pt-2 pb-2">
          You feel like I can solve your problems or simply you have a query
          then
        </p>
        <h1 className="pt-2 pb-2">Let's Work Together</h1>
        <h5 className="pt-2 pb-2">zainabasif.work@gmail.com</h5>
        <form>
          <div className="pt-2 pb-2 flex flex-col">
            <label>Full name</label>
            <input className="border-b-2 border-y-white selection:border-b-green-400"></input>
          </div>
          <div className="pt-2 pb-2 flex flex-col">
            <label>Your Email Address</label>
            <input className="border-b-2 border-y-white"></input>
          </div>
          <div className="pt-2 pb-2 flex flex-col">
            <label>Phone Number</label>
            <input className="border-b-2 border-y-white"></input>
          </div>
          <label>Subject</label>
          <div className="pt-2 pb-2 flex flex-col">
            <input className="border-b-2 border-y-white"></input>
          </div>
          <div className="pt-2 pb-2 flex flex-col">
            <label>Message</label>
            <textarea className="border-2 border-cyan-100" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
