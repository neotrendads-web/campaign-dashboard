import { getSheetData } from "./googleSheets";
import { calculateMetrics } from "@/utils/calculations";

export async function getCampaignData() {

    const rows = await getSheetData();

    const dataRows =
        rows?.slice(1) || [];

    return dataRows.map((row) => {

        const date =
            row[0];

        const accountName =
            row[1];

        const clicks =
            Number(
                String(row[2] || "0")
                    .replace(/,/g, "")
            );

        const impressions =
            Number(
                String(row[3] || "0")
                    .replace(/,/g, "")
            );

        const conversions =
            Number(
                String(row[4] || "0")
                    .replace(/,/g, "")
            );

        const cpc =
            Number(
                String(row[5] || "0")
                    .replace(/,/g, "")
            );

        const metrics =
            calculateMetrics(
                clicks,
                impressions,
                conversions,
                cpc
            );

        return {

            date,
            accountName,
            clicks,
            impressions,
            conversions,
            cpc,

            ...metrics
        };

    });

}