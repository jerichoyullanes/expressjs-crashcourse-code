const output = document.querySelector('#output');
const button = document.querySelector('#getPostsBtn');

// Get and show posts
async function showPosts() {
    try {
        const res = await fetch('http://localhost:8000/api/posts');
        if(!res.ok) {
            throw new Error("Failed to fetch posts");
        }

        const posts = await res.json();
        output.innerHTML = '';

        posts.forEach((post) => {
            const postElement = document.createElement('div')
            postElement.textContent = post.title;
            output.appendChild(postElement);
        });
    } catch (error) {
        console.log("Error Fetching Posts: ", error)
    }
}

button.addEventListener('click', showPosts);