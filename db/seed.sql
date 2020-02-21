CREATE TABLE users (
   user_id SERIAL PRIMARY KEY,
   username VARCHAR(200),
   password VARCHAR(250),
   profile_pic TEXT

CREATE TABLE post (
    post_id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    author_id INT REFERENCES users(user_id)
)