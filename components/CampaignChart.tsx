"use client";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
} from "recharts";

export default function CampaignChart({
    data
}:{
    data:any[]
}){

    return(

        <div className="
        bg-white
        p-5
        rounded-xl
        shadow
        mb-6
        ">

            <h2 className="
            text-xl
            font-bold
            mb-5
            ">

                Performance Overview

            </h2>

            <div className="h-[350px]">

                <ResponsiveContainer>

                    <LineChart data={data}>

                        <CartesianGrid
                        strokeDasharray="3 3"
                        />

                        <XAxis
                        dataKey="date"
                        />

                        <YAxis/>

                        <Tooltip/>

                        <Line
                        dataKey="clicks"
                        type="monotone"
                        />

                        <Line
                        dataKey="conversions"
                        type="monotone"
                        />

                        <Line
                        dataKey="spend"
                        type="monotone"
                        />

                    </LineChart>

                </ResponsiveContainer>

            </div>

        </div>

    )

}