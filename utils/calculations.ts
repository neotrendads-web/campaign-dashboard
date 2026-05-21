export function calculateMetrics(
    clicks: number,
    impressions: number,
    conversions: number,
    cpc: number,
    revenue: number
) {

    const spend = clicks * cpc

    return {

        spend,

        cpm:
            impressions
            ? (spend / impressions) * 1000
            : 0,

        cpa:
            conversions
            ? spend / conversions
            : 0,

        cvr:
            clicks
            ? (conversions / clicks) * 100
            : 0,

        roas:
            spend
            ? revenue / spend
            : 0
    }
}