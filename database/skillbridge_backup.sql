--
-- PostgreSQL database dump
--

\restrict 55dC6I9zK5jORZ8xqjlGlWve2Dv9z3ky9DVWJDjTbwJD1Ixak06vLos3ZTrQV0V

-- Dumped from database version 17.10
-- Dumped by pg_dump version 17.10

-- Started on 2026-07-14 19:14:21

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
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
-- TOC entry 224 (class 1259 OID 16428)
-- Name: ats_score; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ats_score (
    ats_id integer NOT NULL,
    user_id integer,
    overall_score integer,
    missing_keywords text,
    suggestions text,
    generated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.ats_score OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16427)
-- Name: ats_score_ats_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ats_score_ats_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ats_score_ats_id_seq OWNER TO postgres;

--
-- TOC entry 4981 (class 0 OID 0)
-- Dependencies: 223
-- Name: ats_score_ats_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ats_score_ats_id_seq OWNED BY public.ats_score.ats_id;


--
-- TOC entry 230 (class 1259 OID 16467)
-- Name: chat_history; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.chat_history (
    chat_id integer NOT NULL,
    user_id integer,
    question text,
    answer text,
    "timestamp" timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.chat_history OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 16466)
-- Name: chat_history_chat_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.chat_history_chat_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.chat_history_chat_id_seq OWNER TO postgres;

--
-- TOC entry 4982 (class 0 OID 0)
-- Dependencies: 229
-- Name: chat_history_chat_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.chat_history_chat_id_seq OWNED BY public.chat_history.chat_id;


--
-- TOC entry 228 (class 1259 OID 16455)
-- Name: learning_roadmap; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.learning_roadmap (
    roadmap_id integer NOT NULL,
    user_id integer,
    course_name character varying(255),
    platform character varying(100),
    duration character varying(50),
    status character varying(30)
);


ALTER TABLE public.learning_roadmap OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 16454)
-- Name: learning_roadmap_roadmap_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.learning_roadmap_roadmap_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.learning_roadmap_roadmap_id_seq OWNER TO postgres;

--
-- TOC entry 4983 (class 0 OID 0)
-- Dependencies: 227
-- Name: learning_roadmap_roadmap_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.learning_roadmap_roadmap_id_seq OWNED BY public.learning_roadmap.roadmap_id;


--
-- TOC entry 232 (class 1259 OID 16482)
-- Name: mock_interview; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mock_interview (
    interview_id integer NOT NULL,
    user_id integer,
    question text,
    user_answer text,
    feedback text,
    score integer,
    interview_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.mock_interview OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 16481)
-- Name: mock_interview_interview_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.mock_interview_interview_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.mock_interview_interview_id_seq OWNER TO postgres;

--
-- TOC entry 4984 (class 0 OID 0)
-- Dependencies: 231
-- Name: mock_interview_interview_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.mock_interview_interview_id_seq OWNED BY public.mock_interview.interview_id;


--
-- TOC entry 220 (class 1259 OID 16401)
-- Name: resume; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.resume (
    resume_id integer NOT NULL,
    user_id integer,
    file_name character varying(255),
    file_path text,
    upload_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.resume OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16400)
-- Name: resume_resume_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.resume_resume_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.resume_resume_id_seq OWNER TO postgres;

--
-- TOC entry 4985 (class 0 OID 0)
-- Dependencies: 219
-- Name: resume_resume_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.resume_resume_id_seq OWNED BY public.resume.resume_id;


--
-- TOC entry 226 (class 1259 OID 16443)
-- Name: skill_gap; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.skill_gap (
    gap_id integer NOT NULL,
    user_id integer,
    target_role character varying(100),
    missing_skill character varying(100),
    priority character varying(20)
);


ALTER TABLE public.skill_gap OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16442)
-- Name: skill_gap_gap_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.skill_gap_gap_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.skill_gap_gap_id_seq OWNER TO postgres;

--
-- TOC entry 4986 (class 0 OID 0)
-- Dependencies: 225
-- Name: skill_gap_gap_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.skill_gap_gap_id_seq OWNED BY public.skill_gap.gap_id;


--
-- TOC entry 222 (class 1259 OID 16416)
-- Name: skills; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.skills (
    skill_id integer NOT NULL,
    user_id integer,
    skill_name character varying(100),
    skill_level character varying(20)
);


ALTER TABLE public.skills OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16415)
-- Name: skills_skill_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.skills_skill_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.skills_skill_id_seq OWNER TO postgres;

--
-- TOC entry 4987 (class 0 OID 0)
-- Dependencies: 221
-- Name: skills_skill_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.skills_skill_id_seq OWNED BY public.skills.skill_id;


--
-- TOC entry 218 (class 1259 OID 16389)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    full_name character varying(100),
    email character varying(100),
    password character varying(255),
    college character varying(100),
    branch character varying(50),
    graduation_year integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16388)
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_user_id_seq OWNER TO postgres;

--
-- TOC entry 4988 (class 0 OID 0)
-- Dependencies: 217
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- TOC entry 4782 (class 2604 OID 16431)
-- Name: ats_score ats_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ats_score ALTER COLUMN ats_id SET DEFAULT nextval('public.ats_score_ats_id_seq'::regclass);


--
-- TOC entry 4786 (class 2604 OID 16470)
-- Name: chat_history chat_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chat_history ALTER COLUMN chat_id SET DEFAULT nextval('public.chat_history_chat_id_seq'::regclass);


--
-- TOC entry 4785 (class 2604 OID 16458)
-- Name: learning_roadmap roadmap_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.learning_roadmap ALTER COLUMN roadmap_id SET DEFAULT nextval('public.learning_roadmap_roadmap_id_seq'::regclass);


--
-- TOC entry 4788 (class 2604 OID 16485)
-- Name: mock_interview interview_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mock_interview ALTER COLUMN interview_id SET DEFAULT nextval('public.mock_interview_interview_id_seq'::regclass);


--
-- TOC entry 4779 (class 2604 OID 16404)
-- Name: resume resume_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.resume ALTER COLUMN resume_id SET DEFAULT nextval('public.resume_resume_id_seq'::regclass);


--
-- TOC entry 4784 (class 2604 OID 16446)
-- Name: skill_gap gap_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.skill_gap ALTER COLUMN gap_id SET DEFAULT nextval('public.skill_gap_gap_id_seq'::regclass);


--
-- TOC entry 4781 (class 2604 OID 16419)
-- Name: skills skill_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.skills ALTER COLUMN skill_id SET DEFAULT nextval('public.skills_skill_id_seq'::regclass);


--
-- TOC entry 4777 (class 2604 OID 16392)
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- TOC entry 4967 (class 0 OID 16428)
-- Dependencies: 224
-- Data for Name: ats_score; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ats_score (ats_id, user_id, overall_score, missing_keywords, suggestions, generated_at) FROM stdin;
\.


--
-- TOC entry 4973 (class 0 OID 16467)
-- Dependencies: 230
-- Data for Name: chat_history; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.chat_history (chat_id, user_id, question, answer, "timestamp") FROM stdin;
\.


--
-- TOC entry 4971 (class 0 OID 16455)
-- Dependencies: 228
-- Data for Name: learning_roadmap; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.learning_roadmap (roadmap_id, user_id, course_name, platform, duration, status) FROM stdin;
\.


--
-- TOC entry 4975 (class 0 OID 16482)
-- Dependencies: 232
-- Data for Name: mock_interview; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.mock_interview (interview_id, user_id, question, user_answer, feedback, score, interview_date) FROM stdin;
\.


--
-- TOC entry 4963 (class 0 OID 16401)
-- Dependencies: 220
-- Data for Name: resume; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.resume (resume_id, user_id, file_name, file_path, upload_date) FROM stdin;
1	1	resume.pdf	/uploads/resume.pdf	2026-07-14 18:49:38.174221
\.


--
-- TOC entry 4969 (class 0 OID 16443)
-- Dependencies: 226
-- Data for Name: skill_gap; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.skill_gap (gap_id, user_id, target_role, missing_skill, priority) FROM stdin;
\.


--
-- TOC entry 4965 (class 0 OID 16416)
-- Dependencies: 222
-- Data for Name: skills; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.skills (skill_id, user_id, skill_name, skill_level) FROM stdin;
2	1	SQL	Intermediate
1	1	Python	Expert
\.


--
-- TOC entry 4961 (class 0 OID 16389)
-- Dependencies: 218
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (user_id, full_name, email, password, college, branch, graduation_year, created_at) FROM stdin;
1	Kajal Kewat	kajal@gmail.com	123456	ABC Engineering College	Computer Science	2026	2026-07-14 18:48:29.767279
\.


--
-- TOC entry 4989 (class 0 OID 0)
-- Dependencies: 223
-- Name: ats_score_ats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ats_score_ats_id_seq', 1, false);


--
-- TOC entry 4990 (class 0 OID 0)
-- Dependencies: 229
-- Name: chat_history_chat_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.chat_history_chat_id_seq', 1, false);


--
-- TOC entry 4991 (class 0 OID 0)
-- Dependencies: 227
-- Name: learning_roadmap_roadmap_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.learning_roadmap_roadmap_id_seq', 1, false);


--
-- TOC entry 4992 (class 0 OID 0)
-- Dependencies: 231
-- Name: mock_interview_interview_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.mock_interview_interview_id_seq', 1, false);


--
-- TOC entry 4993 (class 0 OID 0)
-- Dependencies: 219
-- Name: resume_resume_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.resume_resume_id_seq', 1, true);


--
-- TOC entry 4994 (class 0 OID 0)
-- Dependencies: 225
-- Name: skill_gap_gap_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.skill_gap_gap_id_seq', 1, false);


--
-- TOC entry 4995 (class 0 OID 0)
-- Dependencies: 221
-- Name: skills_skill_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.skills_skill_id_seq', 3, true);


--
-- TOC entry 4996 (class 0 OID 0)
-- Dependencies: 217
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_user_id_seq', 1, true);


--
-- TOC entry 4799 (class 2606 OID 16436)
-- Name: ats_score ats_score_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ats_score
    ADD CONSTRAINT ats_score_pkey PRIMARY KEY (ats_id);


--
-- TOC entry 4805 (class 2606 OID 16475)
-- Name: chat_history chat_history_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chat_history
    ADD CONSTRAINT chat_history_pkey PRIMARY KEY (chat_id);


--
-- TOC entry 4803 (class 2606 OID 16460)
-- Name: learning_roadmap learning_roadmap_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.learning_roadmap
    ADD CONSTRAINT learning_roadmap_pkey PRIMARY KEY (roadmap_id);


--
-- TOC entry 4807 (class 2606 OID 16490)
-- Name: mock_interview mock_interview_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mock_interview
    ADD CONSTRAINT mock_interview_pkey PRIMARY KEY (interview_id);


--
-- TOC entry 4795 (class 2606 OID 16409)
-- Name: resume resume_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.resume
    ADD CONSTRAINT resume_pkey PRIMARY KEY (resume_id);


--
-- TOC entry 4801 (class 2606 OID 16448)
-- Name: skill_gap skill_gap_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.skill_gap
    ADD CONSTRAINT skill_gap_pkey PRIMARY KEY (gap_id);


--
-- TOC entry 4797 (class 2606 OID 16421)
-- Name: skills skills_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.skills
    ADD CONSTRAINT skills_pkey PRIMARY KEY (skill_id);


--
-- TOC entry 4791 (class 2606 OID 16399)
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- TOC entry 4793 (class 2606 OID 16397)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- TOC entry 4810 (class 2606 OID 16437)
-- Name: ats_score ats_score_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ats_score
    ADD CONSTRAINT ats_score_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- TOC entry 4813 (class 2606 OID 16476)
-- Name: chat_history chat_history_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chat_history
    ADD CONSTRAINT chat_history_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- TOC entry 4812 (class 2606 OID 16461)
-- Name: learning_roadmap learning_roadmap_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.learning_roadmap
    ADD CONSTRAINT learning_roadmap_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- TOC entry 4814 (class 2606 OID 16491)
-- Name: mock_interview mock_interview_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mock_interview
    ADD CONSTRAINT mock_interview_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- TOC entry 4808 (class 2606 OID 16410)
-- Name: resume resume_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.resume
    ADD CONSTRAINT resume_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- TOC entry 4811 (class 2606 OID 16449)
-- Name: skill_gap skill_gap_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.skill_gap
    ADD CONSTRAINT skill_gap_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- TOC entry 4809 (class 2606 OID 16422)
-- Name: skills skills_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.skills
    ADD CONSTRAINT skills_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


-- Completed on 2026-07-14 19:14:22

--
-- PostgreSQL database dump complete
--

\unrestrict 55dC6I9zK5jORZ8xqjlGlWve2Dv9z3ky9DVWJDjTbwJD1Ixak06vLos3ZTrQV0V

