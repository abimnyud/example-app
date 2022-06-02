CREATE TABLE public.articles (
    id          serial4         NOT NULL,
	title       varchar(255)    NOT NULL,
    content     varchar(500)    NOT NULL,
    created_at  timestamp NOT   NULL DEFAULT now(),
    updated_at  timestamp NOT   NULL DEFAULT now(),
    PRIMARY KEY (id)
);

INSERT INTO public.articles(title, content)
VALUES
('First Article', 'This is the first article.'),
('Second Article', 'This is the second article.'),
('Third Article', 'This is the third article.');