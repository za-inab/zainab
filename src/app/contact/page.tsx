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
    <div className={cn("justify-center items-center")}>
      <div>
        You feel like I can solve your problems or simply you have a query then
        <h1>Let's Work Together</h1>
        <h5>zainabasif.work@gmail.com</h5>
        <form>
          <label>Full name</label>
          <input></input>
          <label>Your Email Address</label>
          <input></input>
          <label>Phone Number</label>
          <input></input>
          <label>Subject</label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <label>Message</label>
          <textarea />
        </form>
      </div>
    </div>
  );
}

export default Contact;
