export default function CampaignTable({
    data
}:{
    data:any[]
}){

    return(

        <div className="
        bg-white
        rounded-xl
        shadow
        p-5
        overflow-x-auto
        ">

            <h2 className="
            text-xl
            font-bold
            mb-5
            ">

                Campaign Data

            </h2>

            <table className="
            w-full
            text-sm
            ">

                <thead>

                <tr className="
                border-b
                text-left
                ">

                    <th>Date</th>
                    <th>Account Name</th>
                    <th>Clicks</th>
                    <th>Impressions</th>
                    <th>Conversions</th>
                    <th>CPC</th>
                    <th>Spend</th>
                    <th>CPM</th>
                    <th>CPA</th>
                    <th>CVR</th>
                    <th>ROAS</th>

                </tr>

                </thead>

                <tbody>

                {data.map((item,index)=>(

                    <tr
                    key={index}
                    className="border-b"
                    >

                        <td>{item.date}</td>

                        <td>{item.campaign}</td>

                        <td>{item.clicks}</td>

                        <td>{item.impressions}</td>

                        <td>{item.conversions}</td>

                        <td>{item.cpc.toFixed(3)}</td>

                        <td>
                            ${item.spend.toFixed(2)}
                        </td>

                        <td>
                            {item.cpm.toFixed(2)}
                        </td>

                        <td>
                            {item.cpa.toFixed(2)}
                        </td>

                        <td>
                            {item.cvr.toFixed(2)}%
                        </td>

                        <td>
                            {item.roas.toFixed(2)}
                        </td>

                    </tr>

                ))}

                </tbody>

            </table>

        </div>

    )

}