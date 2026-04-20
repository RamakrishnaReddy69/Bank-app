export default function generateData({ amountOfRecords }) {
    return [...Array(amountOfRecords)].map((_, index) => {
        return {
            name: `Account ${index + 1}`,
            website: `https://www.account${index + 1}.com`,
            phone: `555-${String(index).padStart(4, '0')}`,
            amount: Math.floor(Math.random() * 100000) + 1000,
            closeAt: new Date(Date.now() + Math.random() * 10000000000).toISOString()
        };
    });
}