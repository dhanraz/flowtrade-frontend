import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Signin = ({ handleSignInFormData }: any) => {
  return (
    <div className="w-full flex flex-col gap-2 items-center justify-center">
      <h2 className=" text-xl font-semibold py-2">Log in to your account</h2>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">username</Label>
        <Input
          name="email"
          id="email"
          type="text"
          placeholder="username"
          onChange={(e) => handleSignInFormData(e)}
        ></Input>
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input
          name="password"
          id="password"
          type="password"
          placeholder="password"
          onChange={(e) => handleSignInFormData(e)}
        ></Input>
      </div>
    </div>
  );
};

export default Signin;
