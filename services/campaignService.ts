import { getSheetData } from "./googleSheets";
import { calculateMetrics } from "@/utils/calculations";

export async function getCampaignData() {

    const rows = await getSheetData();

    const dataRows =
        rows?.slice(1) || [];

    return dataRows.map((row)=>{

        const date = row[0];
        const campaign = row[1];

        const clicks =
            Number(row[2]);

        const impressions =
            Number(row[3]);

        const conversions =
            Number(row[4]);

        const cpc =
            Number(row[5]);

        const revenue =
            Number(row[6]);

        const metrics =
            calculateMetrics(
                clicks,
                impressions,
                conversions,
                cpc,
                revenue
            );

        return{

            date,
            campaign,
            clicks,
            impressions,
            conversions,
            cpc,
            revenue,

            ...metrics

        };

    });

}