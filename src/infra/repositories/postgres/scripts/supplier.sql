CREATE TABLE IF NOT EXISTS public.supplier
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    name character varying COLLATE pg_catalog."default" NOT NULL,
    cnpj character varying COLLATE pg_catalog."default" NOT NULL,
    email character varying COLLATE pg_catalog."default" NOT NULL,
    telephone character varying COLLATE pg_catalog."default" NOT NULL,
    city character varying COLLATE pg_catalog."default" NOT NULL,
    district character varying COLLATE pg_catalog."default" NOT NULL,
    street character varying COLLATE pg_catalog."default" NOT NULL,
    cep character varying COLLATE pg_catalog."default" NOT NULL,
    is_active character varying COLLATE pg_catalog."default" NOT NULL,
    supplier_number character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT supplier_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;