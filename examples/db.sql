`SELECT * FROM publishers p JOIN game g ON p.id_publisher = g.id_publisher where p.publisher = ${id}`

create table games (
    id_game serial PRIMARY KEY , 
    nama_game varchar NOT NULL, 
    tanggal_rilis date NOT NULL, 
    harga int
);

CREATE TABLE IF NOT EXISTS public.user
(
    id_user integer NOT NULL DEFAULT nextval('game_id_game_seq'::regclass),
    usernam character(50) COLLATE pg_catalog."default" NOT NULL,
    email character(100) NOT NULL,
    password character(200) NOT NULL,
    CONSTRAINT user_pkey PRIMARY KEY (id_user)
)


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