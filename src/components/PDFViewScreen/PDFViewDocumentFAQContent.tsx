//data format definition
//fake data

export type FAQ = {
    question: string
    answerParagraphs: AnswerParagraph[]
}

type AnswerParagraph = {
    type: 'text'
    content: string
} | {
    type: 'bullets'
    content: string[]
}


export const faq = [

    {

        question: 'What is Fresh Farm Picking?',

        answerParagraphs: [

            {

                type: 'text',

                content:

                    "Imagine a world where you can pick your own fresh produce, learn about sustainable farming, and create unforgettable memories with your loved ones. It's now possible with Fresh Farm Picking!",

            },

            {

                type: 'text',

                content:

                    'Fresh Farm Picking is your go-to destination for all things farm-related. Our innovative website connects you with a wide array of farm activities and experiences, right in your neighborhood!',

            },

        ],

    },

    {

        question: 'Why Choose Fresh Farm Picking?',

        answerParagraphs: [

            {

                type: 'text',

                content:

                    'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the',

            },

            {

                type: 'bullets',

                content: [

                    'Discover Nearby Farms: Easily find farms and agricultural experiences in your area.',

                    'Farm-to-Table Adventures: Handpick your own fruits and vegetables for a truly fresh dining experience.',

                    'Farm Animal Encounters: Get up close and personal with friendly farm animals.',

                    'Educational Workshops: Learn about sustainable farming practices and eco-conscious living.',

                    'Family-Friendly Fun: Create lasting memories with your family and friends.',

                    'Easy Booking: Effortlessly reserve your spot for farm activities that suit your schedule.',

                    "Flexible Scheduling: Whether you're planning a weekend outing or a special occasion, we've got you covered. Booking farm adventures has never been easier!",

                ],

            },

        ],

    },

    {

        question: 'What Awaits You?',

        answerParagraphs: [

            {

                type: 'text',

                content:

                    "Experience the joy of picking your own strawberries, explore lush vineyards, and connect with the heartbeat of the land. Fresh Farm Picking opens the door to farm adventures you've only dreamt of!",

            },

            {

                type: 'text',

                content:

                    'For a limited time, sign up and book your first farm adventure to receive an exclusive discount.',

            },

        ],

    },

    {

        question: 'Do you want to support Local Farms?',

        answerParagraphs: [

            {

                type: 'text',

                content:

                    "At Fresh Farm Picking, we're not just passionate about connecting you with unforgettable farm experiences; we're also dedicated to promoting the well-being of local farms and the Australian agriculture industry as a whole. Here's why supporting local farms matters:",

            },

            {

                type: 'bullets',

                content: [

                    'Preserving Tradition:\nLocal farms are the heart and soul of our agricultural heritage. By choosing to visit and engage with these farms, you help preserve age-old farming traditions that are an integral part of our culture.',

                    'Reducing Food Miles:\nEvery time you pick and purchase produce from a local farm, you contribute to reducing food miles. This means fewer emissions from long-distance transportation, resulting in a healthier planet.',

                    "Boosting the Economy:\nAustralian agriculture plays a crucial role in the nation's economy. Supporting local farms means bolstering rural communities, creating jobs, and ensuring the sustainability of our food supply.",

                ],

            },

        ],

    },

    {

        question: 'Your Choice Matters',

        answerParagraphs: [

            {

                type: 'text',

                content:

                    'Your Choice Matters: Every time you choose to engage with local farms through Fresh Farm Picking, you cast a vote for a greener, more sustainable future. You become an advocate for agriculture that cares for both people and the planet.',

            },

        ],

    },

] satisfies FAQ[]