-- Table: public.purchase_order

-- DROP TABLE public.purchase_order;

CREATE TABLE IF NOT EXISTS public.purchase_order
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    fuel_type character varying COLLATE pg_catalog."default" NOT NULL,
    payment_type character varying COLLATE pg_catalog."default" NOT NULL,
    delivery_type character varying COLLATE pg_catalog."default" NOT NULL,
    qtd_liters integer NOT NULL,
    total_price double precision NOT NULL,
    status character varying COLLATE pg_catalog."default" NOT NULL,
    fuel_station_id integer NOT NULL,
    delivery_date character varying COLLATE pg_catalog."default" NOT NULL,
    create_date character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT purchase_order_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.purchase_order
    OWNER to mmuqlxlfswenwg;