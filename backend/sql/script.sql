CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    name VARCHAR(25),
    surname VARCHAR(255)
);

CREATE TABLE post (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    content VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person(id)
);
