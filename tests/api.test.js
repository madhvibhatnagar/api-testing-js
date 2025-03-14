/**
 * API Testing with Jest
 * This script tests JSONPlaceholder API (Fake API for Testing)
 */

const fetch = require('node-fetch');

// Base URL for the API
const BASE_URL = "https://jsonplaceholder.typicode.com";

/**
 * Test 1: Fetch all users
 */
test("Fetch all users", async () => {
    const response = await fetch(`${BASE_URL}/users`);
    expect(response.status).toBe(200);

    const users = await response.json();
    expect(users.length).toBeGreaterThan(0);
});

/**
 * Test 2: Fetch a specific user by ID
 */
test("Fetch user by ID", async () => {
    const response = await fetch(`${BASE_URL}/users/1`);
    expect(response.status).toBe(200);

    const user = await response.json();
    expect(user.id).toBe(1);
    expect(user).toHaveProperty("name");
});

/**
 * Test 3: Create a new post (POST Request)
 */
test("Create a new post", async () => {
    const newPost = {
        title: "Automated Test Post",
        body: "This is a test post",
        userId: 1
    };

    const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
    });

    expect(response.status).toBe(201); // Created
    const post = await response.json();
    expect(post).toHaveProperty("id");
});

/**
 * Test 4: Update a post (PUT Request)
 */
test("Update an existing post", async () => {
    const updatedPost = {
        title: "Updated Test Post",
        body: "This post has been updated",
        userId: 1
    };

    const response = await fetch(`${BASE_URL}/posts/1`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedPost)
    });

    expect(response.status).toBe(200);
    const post = await response.json();
    expect(post.title).toBe("Updated Test Post");
});

/**
 * Test 5: Delete a post (DELETE Request)
 */
test("Delete a post", async () => {
    const response = await fetch(`${BASE_URL}/posts/1`, {
        method: "DELETE"
    });

    expect(response.status).toBe(200);
});
