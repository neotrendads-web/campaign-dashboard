export default function CampaignTable({
    data
}: {
    data: any[]
}) {
    return (
        <div
            className="
      bg-white
      rounded-2xl
      shadow-md
      border
      border-gray-100
      p-4
      sm:p-6
      "
        >
            <div
                className="
        flex
        flex-col
        sm:flex-row
        sm:items-center
        sm:justify-between
        mb-5
        gap-2
        "
            >
                <div>
                    <h2
                        className="
            text-lg
            sm:text-xl
            font-bold
            "
                    >
                        Campaign Data
                    </h2>

                    <p
                        className="
            text-sm
            text-gray-500
            mt-1
            "
                    >
                        Campaign performance overview
                    </p>
                </div>
            </div>

            <div
                className="
        overflow-x-auto
        rounded-xl
        border
        "
            >
                <table
                    className="
          min-w-[1100px]
          w-full
          text-sm
          "
                >
                    <thead
                        className="
            bg-gray-50
            sticky
            top-0
            z-10
            "
                    >
                        <tr
                            className="
              text-left
              text-gray-600
              border-b
              "
                        >
                            <th className="px-4 py-4 font-semibold">
                                Date
                            </th>

                            <th className="px-4 py-4 font-semibold">
                                Account
                            </th>

                            <th className="px-4 py-4 font-semibold">
                                Clicks
                            </th>

                            <th className="px-4 py-4 font-semibold">
                                Impressions
                            </th>

                            <th className="px-4 py-4 font-semibold">
                                Conversions
                            </th>

                            <th className="px-4 py-4 font-semibold">
                                CPC
                            </th>

                            <th className="px-4 py-4 font-semibold">
                                Spend
                            </th>

                            <th className="px-4 py-4 font-semibold">
                                CPM
                            </th>

                            <th className="px-4 py-4 font-semibold">
                                CTR
                            </th>

                            <th className="px-4 py-4 font-semibold">
                                CPA
                            </th>

                            <th className="px-4 py-4 font-semibold">
                                CVR
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item, index) => (
                            <tr
                                key={index}
                                className="
      border-b
      hover:bg-gray-50
      transition-colors
      odd:bg-white
      even:bg-gray-50/30
      "
                            >
                                <td className="px-4 py-4 whitespace-nowrap">
                                    {item.date}
                                </td>

                                <td
                                    className="
        px-4
        py-4
        font-medium
        whitespace-nowrap
        "
                                >
                                    {item.accountName}
                                </td>

                                <td className="px-4 py-4">
                                    {item.clicks}
                                </td>

                                <td className="px-4 py-4">
                                    {item.impressions}
                                </td>

                                <td className="px-4 py-4">
                                    {item.conversions}
                                </td>

                                <td className="px-4 py-4">
                                    ${item.cpc.toFixed(3)}
                                </td>

                                <td
                                    className="
        px-4
        py-4
        font-medium
        "
                                >
                                    ${item.spend.toFixed(2)}
                                </td>

                                <td className="px-4 py-4">
                                    {item.cpm.toFixed(2)}
                                </td>

                                <td className="px-4 py-4">
                                    {item.ctr.toFixed(2)}%
                                </td>

                                <td className="px-4 py-4">
                                    ${item.cpa.toFixed(2)}
                                </td>

                                <td className="px-4 py-4">
                                    {item.cvr.toFixed(2)}%
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}