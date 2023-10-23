--
-- PostgreSQL database dump
--

-- Dumped from database version 14.9 (Ubuntu 14.9-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.9 (Ubuntu 14.9-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cakes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cakes (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    price numeric(10,2) NOT NULL,
    image character varying NOT NULL,
    description text NOT NULL
);


--
-- Name: cakes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cakes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cakes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cakes_id_seq OWNED BY public.cakes.id;


--
-- Name: clients; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.clients (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    address character varying(255) NOT NULL,
    phone character varying(11) NOT NULL
);


--
-- Name: clients_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.clients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: clients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.clients_id_seq OWNED BY public.clients.id;


--
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    "clientId" integer NOT NULL,
    "cakeId" integer NOT NULL,
    quantity integer NOT NULL,
    "totalPrice" numeric(10,2) NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;


--
-- Name: cakes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cakes ALTER COLUMN id SET DEFAULT nextval('public.cakes_id_seq'::regclass);


--
-- Name: clients id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.clients ALTER COLUMN id SET DEFAULT nextval('public.clients_id_seq'::regclass);


--
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);


--
-- Data for Name: cakes; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cakes VALUES (1, 'Bolo de Chocolate', 13.00, 'http://www.imagem.com', 'Bolo de chocolate com recheio de leite ninho');
INSERT INTO public.cakes VALUES (2, 'Bolo de Limão', 23.00, 'http://www.imagem.com', 'Bolo delicioso com raspas de limão');
INSERT INTO public.cakes VALUES (3, 'Bolo de Laranja', 23.00, 'http://www.imagem.com', 'Bolo delicioso com raspas de laranja');
INSERT INTO public.cakes VALUES (4, 'Bolo de Maracuja com Chocolate', 20.00, 'http://www.imagem.com', 'Bolo de Maracuja com muito chocolate');


--
-- Data for Name: clients; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.clients VALUES (1, 'Fulana', 'Rua tal', '2199999999');
INSERT INTO public.clients VALUES (2, 'Fulana', 'Rua tal', '2199999999');
INSERT INTO public.clients VALUES (3, 'Fai', 'Rua Guaratinga', '2199999999');
INSERT INTO public.clients VALUES (4, 'Vivi', 'Rua Jose Boali', '2199999999');


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.orders VALUES (1, 1, 1, 2, 26.00, '2023-10-22 01:07:16.385709');
INSERT INTO public.orders VALUES (2, 2, 2, 2, 46.00, '2023-10-22 12:35:41.330821');
INSERT INTO public.orders VALUES (3, 3, 3, 2, 46.00, '2023-10-22 12:39:31.021085');
INSERT INTO public.orders VALUES (4, 4, 4, 2, 40.00, '2023-10-22 13:41:27.285866');


--
-- Name: cakes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cakes_id_seq', 4, true);


--
-- Name: clients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.clients_id_seq', 4, true);


--
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.orders_id_seq', 4, true);


--
-- Name: cakes cakes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cakes
    ADD CONSTRAINT cakes_pkey PRIMARY KEY (id);


--
-- Name: clients clients_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_pkey PRIMARY KEY (id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

