export function calculateMetrics(
    clicks: number,
    impressions: number,
    conversions: number,
    cpc: number
) {
    const spend = clicks * cpc;

    return {
        spend,

        cpm:
            impressions > 0
                ? (spend / impressions) * 1000
                : 0,

        ctr:
            impressions > 0
                ? (clicks / impressions) * 100
                : 0,

        cpa:
            conversions > 0
                ? spend / conversions
                : 0,

        cvr:
            clicks > 0
                ? (conversions / clicks) * 100
                : 0
    };
}