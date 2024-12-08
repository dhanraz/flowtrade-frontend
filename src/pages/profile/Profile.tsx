import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = ({ userDetails }: any) => {
  const[loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState({
    name: "Shanu Kumar",
    email: "kumarshanu@gmail.com",
    phoneNumber: "93020334989",
  });
  useEffect(() => {
    const url = "http://localhost:8081/api/user/profile";
    axios
      .get(url,{
        headers: {
          'Authorization': 'Bearer '+localStorage.getItem("jwt"),
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then((response) => {
        console.log(response.data);
        const data = {
          name: response.data.fullName,
          email: response.data.email,
        };
        setProfileData({ ...profileData, ...data });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleAddMoney = ()=>{
    
  }
  return (
    <div>
      {loading ? ( <p>Loading...</p>):(<div className="px-5 flex flex-col items-center mb-5 relative">
      <div className="pt-10  w-full lg:w-[60%]">
        <Card>
          <CardHeader className=" font-bold">Profile</CardHeader>
          <CardContent>
            <div className="lg:flex gap-32">
              <div className="space-y-7">
                <div className="flex">
                  <p className="w-[9rem]">Full Name: </p>
                  <p className=" text-gray-600">{profileData.name}</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Email: </p>
                  <p className=" text-gray-600">{profileData.email}</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Date of Birth: </p>
                  <p className=" text-gray-600">22/11/2001</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Nationality: </p>
                  <p className=" text-gray-600">Indian</p>
                </div>
              </div>
              <div className="space-y-7">
                <div className="flex">
                  <p className="w-[9rem]">Address: </p>
                  <p className=" text-gray-600">981, C-street-24, Downtown</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">City: </p>
                  <p className=" text-gray-600">Jaipur</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Zip/Postal Code: </p>
                  <p className=" text-gray-600">304428</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Country: </p>
                  <p className=" text-gray-600">India</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Avatar className="absolute top-5 ">
        <AvatarFallback className=" font-semibold text-xl">{profileData.name.toUpperCase().charAt(0)}</AvatarFallback>
      </Avatar>
    </div>)}
    </div>
  );
};

export default Profile;
