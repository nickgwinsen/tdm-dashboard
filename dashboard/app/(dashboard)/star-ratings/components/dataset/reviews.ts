export const dataset = [
    { one: 50, two: 34, three: 32, four: 46, five: 72, month: "Jan" },
    { one: 63, two: 11, three: 44, four: 24, five: 65, month: "Feb" },
    { one: 123, two: 12, three: 32, four: 49, five: 60, month: "Mar" },
    { one: 89, two: 2, three: 156, four: 47, five: 100, month: "Apr" },
    { one: 124, two: 22, three: 31, four: 45, five: 52, month: "May" },
    { one: 200, two: 53, three: 31, four: 41, five: 99, month: "June" },
    { one: 221, two: 80, three: 32, four: 88, five: 120, month: "July" },
    { one: 249, two: 99, three: 65, four: 99, five: 200, month: "Aug" },
    { one: 100, two: 22, three: 33, four: 48, five: 120, month: "Sept" },
    { one: 90, two: 28, three: 37, four: 49, five: 150, month: "Oct" },
    { one: 80, two: 21, three: 31, four: 41, five: 120, month: "Nov" },
    { one: 200, two: 89, three: 65, four: 99, five: 220, month: "Dec" },
];

export const reviews = [
    {
        rating: 4,
        review: "Good product overall, a few minor issues but nothing serious.",
        reviewer: "Liam Wright",
        date: "2021-02-09",
    },
    {
        rating: 3,
        review: "I regret buying this product. Wouldn't recommend.",
        reviewer: "Benjamin Young",
        date: "2023-05-29",
    },
    {
        rating: 2,
        review: "Good product overall, a few minor issues but nothing serious.",
        reviewer: "Sarah Wilson",
        date: "2022-07-07",
    },
    {
        rating: 3,
        review: "Not very impressed. It didn't meet my expectations.",
        reviewer: "Alice Johnson",
        date: "2021-08-18",
    },
    {
        rating: 3,
        review: "Absolutely love it! Exceeded all my expectations!",
        reviewer: "Michael Brown",
        date: "2022-06-16",
    },
    {
        rating: 3,
        review: "Good product overall, a few minor issues but nothing serious.",
        reviewer: "Michael Brown",
        date: "2021-09-09",
    },
    {
        rating: 3,
        review: "Really good quality, but there's room for improvement.",
        reviewer: "Daniel White",
        date: "2021-08-05",
    },
    {
        rating: 5,
        review: "This is the best product ever!",
        reviewer: "William Walker",
        date: "2022-10-04",
    },
    {
        rating: 1,
        review: "Good product overall, a few minor issues but nothing serious.",
        reviewer: "Daniel White",
        date: "2023-04-28",
    },
    {
        rating: 1,
        review: "Average. Gets the job done but lacks some key features.",
        reviewer: "Laura Taylor",
        date: "2023-04-05",
    },
    {
        rating: 4,
        review: "Average. Gets the job done but lacks some key features.",
        reviewer: "Sophia King",
        date: "2023-05-16",
    },
    {
        rating: 2,
        review: "Absolutely love it! Exceeded all my expectations!",
        reviewer: "Robert Martinez",
        date: "2021-07-30",
    },
    {
        rating: 1,
        review: "It's decent, does what it promises but nothing extraordinary.",
        reviewer: "Robert Martinez",
        date: "2021-04-30",
    },
    {
        rating: 4,
        review: "Average. Gets the job done but lacks some key features.",
        reviewer: "Matthew Adams",
        date: "2021-01-03",
    },
];

export function valueFormatter(value: number | null) {
    return `${value} Reviews`;
}

export function getAverageRating() {
    const averageRatings =
        reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length;
    return parseFloat(averageRatings.toFixed(2));
}

export interface ICumulativeStarRating {
    stars: number;
    count: number;
}

export function getCumulativeRatings() {
    return reviews.reduce(
        (acc, curr) => {
            acc[curr.rating - 1].count++;
            return acc;
        },
        [
            { stars: 5, count: 0 },
            { stars: 4, count: 0 },
            { stars: 3, count: 0 },
            { stars: 2, count: 0 },
            { stars: 1, count: 0 },
        ]
    ) as ICumulativeStarRating[];
}
