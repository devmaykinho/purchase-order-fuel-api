-- Table: public.custom_price

-- DROP TABLE public.custom_price;

CREATE TABLE IF NOT EXISTS public.custom_price
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    fuel_type character varying COLLATE pg_catalog."default" NOT NULL,
    payment_type character varying COLLATE pg_catalog."default" NOT NULL,
    delivery_type character varying COLLATE pg_catalog."default" NOT NULL,
    price double precision NOT NULL,
    is_active character varying COLLATE pg_catalog."default" NOT NULL,
    fuel_station_id integer NOT NULL,
    create_date character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT custom_price_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.custom_price
    OWNER to mmuqlxlfswenwg;