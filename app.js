console.log("Let's get this party started!");
let gifData = undefined;
async function searchGifs(val) {
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${val}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    console.log(res);

    // gifData = res.data.data.forEach(data => {
    //     console.log(`data.url ${data.url}`)
    // });
    let url = res.data.data[0].images.original.url;
    console.log(`url ${url}`)

    $('#giphy').append(`<img src="${url}">`)
};
// `url="${res.data.data[0].url}"`
$('.searchBtn').on('click', function () {
    const input = $('#search').val();
    searchGifs(input);
    $('#search').val('')
});


$('.removeBtn').on('click', function () {
    $('img').remove();
})


// https://giphy.com/gifs/20thcenturyfox-night-at-the-museum-natm-movie-ylyUQlf4VUVF9odXKU/fullscreen

// 

  
// async function signUp(username, password, name) {
// const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/signup', { user: { name, username, password } })
// console.log(res);
// }

// async function login(username, password) {
// const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/login', { user: { username, password } })
// console.log(res);
// return res.data.token;
// }


// async function getUsersWithAuth() {
// const token = await login('butterschicken', '238197sadhj');
// getUsers(token);
// }

// async function createStory() {
// const token = await login('butterschicken', '238197sadhj');
// const newStory = {
//     token,
//     story: {
//     author: 'Butters',
//     title: 'BOCK BOCK BOCK',
//     url: 'http://chickens4lyfe.com'
//     }
// }
// const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/stories', newStory);
// console.log(res);
// }

// createStory();
  
  
  
  
  