import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

const Signup = ({handleSingUpFormData}:any) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleFormChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };
  
  return (
    <div className="w-[full] flex flex-col gap-2 items-center justify-center">
      <h2 className=" text-xl font-semibold py-2">Create new account</h2>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="username">Full Name</Label>
        <Input
          name="name"
          id="fullname"
          type="text"
          placeholder="Joy Kumar"
          value={formData.name}
          onChange={(e) => handleFormChange(e)}
        ></Input>
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          name="email"
          id="email"
          value={formData.email}
          type="email"
          placeholder="demomail@email.com"
          onChange={(e) => handleFormChange(e)}
        ></Input>
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input
          name="password"
          id="password"
          type="password"
          value={formData.password}
          placeholder="password"
          onChange={(e) => handleFormChange(e)}
        ></Input>
      </div>
    </div>
  );
};

export default Signup;
