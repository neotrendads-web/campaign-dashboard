"use client";

import { useEffect,useMemo,useState } from "react";

import CampaignChart
from "@/components/CampaignChart";

import CampaignTable
from "@/components/CampaignTable";

export default function Home(){

const today=
new Date()
.toISOString()
.split("T")[0];

const [campaigns,setCampaigns]=
useState<any[]>([]);

const [loading,setLoading]=
useState(true);

const [startDate,setStartDate]=
useState(today);

const [endDate,setEndDate]=
useState(today);

const [selectedCampaign,
setSelectedCampaign]=
useState("");

useEffect(()=>{

async function loadData(){

try{

const response=
await fetch(
"/api/campaigns"
);

const data=
await response.json();

setCampaigns(data);

}catch(error){

console.log(error);

}finally{

setLoading(false);

}

}

loadData();

},[]);


const campaignOptions=
useMemo(()=>{

return [...new Set(

campaigns.map(
(item)=>item.campaign
)

)];

},[campaigns]);


const filteredData=
useMemo(()=>{

return campaigns.filter(
(item)=>{

const currentDate=
new Date(item.date);

currentDate.setHours(
0,0,0,0
);

const start=
new Date(startDate);

const end=
new Date(endDate);

start.setHours(
0,0,0,0
);

end.setHours(
23,59,59,999
);

const matchesDate=

currentDate>=start &&
currentDate<=end;

const matchesCampaign=

selectedCampaign
? item.campaign===selectedCampaign
: true;

return(
matchesDate &&
matchesCampaign
);

});

},[
campaigns,
startDate,
endDate,
selectedCampaign
]);


const resetFilters=()=>{

setStartDate(today);

setEndDate(today);

setSelectedCampaign("");

};


if(loading){

return<div>Loading...</div>

}

return(

<div className="
min-h-screen
bg-gray-100
p-4
md:p-8
">

<div className="
max-w-7xl
mx-auto
">

<h1 className="
text-3xl
font-bold
mb-6
">

Campaign Dashboard

</h1>


<div className="
bg-white
rounded-xl
shadow
p-5
mb-6
">

<div className="
grid
grid-cols-1
md:grid-cols-4
gap-4
">

<div>

<label>

Start Date

</label>

<input
type="date"
value={startDate}
onChange={(e)=>
setStartDate(
e.target.value
)
}
className="
border
rounded-lg
w-full
p-2
"
/>

</div>


<div>

<label>

End Date

</label>

<input
type="date"
value={endDate}
onChange={(e)=>
setEndDate(
e.target.value
)
}
className="
border
rounded-lg
w-full
p-2
"
/>

</div>


<div>

<label>

Campaign

</label>

<select
value={
selectedCampaign
}
onChange={(e)=>
setSelectedCampaign(
e.target.value
)
}
className="
border
rounded-lg
w-full
p-2
"
>

<option value="">

All Campaigns

</option>

{campaignOptions.map(
(campaign,index)=>(

<option
key={index}
value={campaign}
>

{campaign}

</option>

)

)}

</select>

</div>


<div
className="
flex
items-end
"
>

<button

onClick={
resetFilters
}

className="
bg-black
text-white
w-full
p-2
rounded-lg
"

>

Reset Filters

</button>

</div>

</div>

</div>

<CampaignChart
data={filteredData}
/>

<CampaignTable
data={filteredData}
/>

</div>

</div>

)

}