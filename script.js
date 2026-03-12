// Basic blog storage utilities using localStorage
const STORAGE_KEY = 'blogPosts';

function getPosts() {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
}

function savePosts(posts) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

function addPost(post) {
    const posts = getPosts();
    posts.push(post);
    savePosts(posts);
}

function updatePost(updated) {
    const posts = getPosts();
    const idx = posts.findIndex(p => p.id === updated.id);
    if (idx !== -1) {
        posts[idx] = updated;
        savePosts(posts);
    }
}

function deletePost(id) {
    let posts = getPosts();
    posts = posts.filter(p => p.id !== id);
    savePosts(posts);
}

function findPost(id) {
    const posts = getPosts();
    return posts.find(p => p.id === id);
}

