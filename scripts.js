document.addEventListener('DOMContentLoaded', function() {
    const blogList = document.getElementById('blog-list');

    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = 'blog-post';
                
                postElement.innerHTML = `
                    <div class="post-header">
                        <h2>${post.title}</h2>
                        <p class="post-date">${post.date}</p>
                    </div>
                    <div class="post-content">
                        <p>${post.content}</p>
                    </div>
                `;

                blogList.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error loading blog posts:', error));
});
