const testUser = [
    'Mat123',
    'Nolen420',
    'Mo666',
    'Chris69',
    'BirchS2',
    'OakTreeMan',
    'MisterCheeks',
    'TheCoolestAccount',
    'RandomUserNameEpic',
    'WEOUTHERE',
    'KanyeSouth'
];

const lorum = [
    'lorem',
    'imsum',
    'dolor',
    'sit',
    'amet',
    'consectetur',
    'adipiscing',
    'elit',
    'curabitur',
    'vel',
    'hendrerit',
    'libero',
    'eleifend',
    'blandit',
    'nunc',
    'ornare',
    'odio',
    'ut',
    'orci',
    'gravida',
    'imperdiet',
    'nullam',
    'purus',
    'lacinia',
    'a',
    'pretium',
    'quis',
  ];

const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

const getRandomUser = () => `${testUser[genRandomIndex(testUser)]}`;

const getRandomEmail = () => `${getRandomUser()}@Gmail.com`;

const getRandomWord = () => `${lorum[genRandomIndex(lorum)]}`;

const getRandomPost = (words) => {
    let post = '';
    for (let i = 0; i < words; i++) {
        post += `${getRandomWord()}`;
    }
    return post;
}

module.exports = {
    getRandomUser,
    getRandomEmail,
    getRandomPost,
    genRandomIndex
}