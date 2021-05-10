const users = [
  {
    id: "1",
    name: "Leanne Graham",
    username: "Bret",
    age: 23,
    job: "UI Designer",
    employed: true,
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  },
  {
    id: "2",
    name: "Ervin Howell",
    username: "Antonette",
    age: 19,
    job: "Self Employed",
    employed: true,
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
  },
  {
    id: "3",
    name: "Clementine Bauch",
    username: "Samantha",
    age: 29,
    job: "Data Analyst",
    employed: true,
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
    website: "ramiro.info",
  },
  {
    id: "4",
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    age: 32,

    employed: false,
    phone: "493-170-9623 x156",
    website: "kale.biz",
  },
  {
    id: "5",
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    age: 21,
    job: "Developer Advocate",
    employed: true,
    phone: "(254)954-1289",
    website: "demarco.info",
  },
  {
    id: "6",
    name: `Adams Ade`,
    username: "ade",
    age: 19,
    email: "ade010499@gmail.com",
    job: `Web Developer`,
    employed: true,
    phone: "+234 (909)954-1289",
    website: "lee.info",
  },
];

const me = {
  id: "n vlndsnv vnisd ",
  name: `Adams Ade`,
  username: "ade",
  age: 19,
  email: "ade010499@gmail.com",
  job: `Web Developer`,
  employed: true,
  phone: "+234 (909)954-1289",
  website: "lee.info",
};

const posts = [
  {
    title: "How to build a GraphQL api with NodeJs",
    author: "6",
    body:
      "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    likes: 0,
    id: "7hffui9844q348438",
    published: true,
    tags: ["NodeJS", "GraphQl", "API", "apollo", "web development"],
  },
  {
    author: "2",
    published: true,
    tags: ["NodeJS", "GraphQl", "API", "apollo", "web development"],
    likes: 12,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    author: "6",
    published: true,
    tags: ["NodeJS", "GraphQl", "API", "apollo", "web development"],
    likes: 12,
    id: 2,
    title: "qui est esse",
    body:
      "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    author: "5",
    published: true,
    tags: ["NodeJS", "GraphQl", "API", "apollo", "web development"],
    likes: 12,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body:
      "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    author: "1",
    published: true,
    tags: ["NodeJS", "GraphQl", "API", "apollo", "web development"],
    likes: 12,
    id: 4,
    title: "eum et est occaecati",
    body:
      "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
  {
    author: "3",
    published: true,
    tags: ["NodeJS", "GraphQl", "API", "apollo", "web development"],
    likes: 12,
    id: 5,
    title: "nesciunt quas odio",
    body:
      "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
  {
    author: "6",
    published: true,
    tags: ["NodeJS", "GraphQl", "API", "apollo", "web development"],
    likes: 12,
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body:
      "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
  },
  {
    author: "1",
    published: true,
    tags: ["NodeJS", "GraphQl", "API", "apollo", "web development"],
    likes: 12,
    id: 7,
    title: "magnam facilis autem",
    body:
      "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
  },
  {
    author: "6",
    published: true,
    tags: ["NodeJS", "GraphQl", "API", "apollo", "web development"],
    likes: 12,
    id: 8,
    title: "dolorem dolore est ipsam",
    body:
      "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
  },
  {
    author: "5",
    published: true,
    tags: ["NodeJS", "GraphQl", "API", "apollo", "web development"],
    likes: 12,
    id: 9,
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body:
      "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
  },
  {
    author: "2",
    published: true,
    tags: ["NodeJS", "GraphQl", "API", "apollo", "web development"],
    likes: 12,
    id: 10,
    title: "optio molestias id quia eum",
    body:
      "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
  },
];
export { users, posts, me };
