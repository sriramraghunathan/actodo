import React from 'react'
import Header1 from "../components/Header1";
import Card from "../components/Card";
import Todocontainer from "../components/Todocontainer";
import { useLocation } from "react-router-dom";

const Landing = () => {
    const data =useLocation()
  return (
    <div className="bg-black p-20">
          <div className="bg-white p-40 border rounded-md">
            <Header1 name={data.state.user} />
            <div className="flex justify-between gap-7 my-5 flex-wrap ">
              <Card bgColor={"#8272DA"} title={"23"} subtitle={"chennai"} />
              <Card bgColor={"#EB5757"} title={"December"} subtitle={"14:02:34"} />
              <Card bgColor={"#418645"} title={"Built Using"} subtitle={"React"} />
            </div>
            <Todocontainer/>
          </div>
        </div>
  )
}

export default Landing
