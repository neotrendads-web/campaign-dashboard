import { NextResponse } from "next/server"
import { getCampaignData } from "@/services/campaignService"

export async function GET() {

    try {

        const data =
            await getCampaignData()

        return NextResponse.json(data)

    } catch(error) {

        console.error(error)

        return NextResponse.json(
            {error:"Failed"},
            {status:500}
        )
    }
}