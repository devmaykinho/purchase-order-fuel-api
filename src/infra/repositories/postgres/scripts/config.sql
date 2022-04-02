CREATE TABLE IF NOT EXISTS public.config
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    time_limit_purchase character varying COLLATE pg_catalog."default" NOT NULL,
    block_orders character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT config_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;