import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/posts';
axios
    .get(url)
    .then((response) => {
    const posts = response.data;
    console.log(posts);
})
    .catch((error) => {
    console.error(error);
});
