import { useIncidentForm } from "../hooks/useIncidentForm";
import IncidentForm from "../components/IncidentForm";
import Message from "../components/Message";
import { useState } from "react";

export default function AddIncidentPage() {
const { form, error, saving, handleChange, handleSubmit } =
useIncidentForm();
const [City, setCity] = useState("delhi")
return ( <div className="flex min-h-[calc(100vh-72px)] items-center justify-center px-4 py-8"> <div className="w-full max-w-3xl"> <h1 className="mb-4 text-center font-display text-3xl font-bold text-[#12203A]">
Add incident {City} </h1>

<button className="border border-3 border-black-500 rounded-md bg-emerald-300 p-1 m-2 cursor-pointer " onClick={()=>{
  setCity("New Delhi")
}}>change city</button>

    {error && <Message text={error} type="error" />}

    <IncidentForm
      form={form}
      saving={saving}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      city={"delhi"}
    />
  </div>
</div>
);
}
