let card = document.querySelector('.card')
const requestUrl = 'https://api.github.com/users/bilal-qadri140'
const xhr = new XMLHttpRequest()

xhr.open('GET', requestUrl)
xhr.send()

// const data = JSON.parse(this.responseText)
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText)
        console.log(data.followers);


        card.innerHTML = `
            <div class="image">
                <img src="${data.avatar_url}" alt="">
            </div>
            <div class="name">${data.name}</div>
            <div class="text username">Username: ${data.login}</div>
            <div class="text followers">Followers: ${data.followers}</div>
            <div class="text followers">Address: ${data.location}</div>
            <div class="text followers">No. of public repos: ${data.public_repos}</div>
            <div class="text links">
                Twitter: <a href="https://twitter.com/Bilalqadri142">${data.twitter_username}</a>
            </div>
        `
    }
}
