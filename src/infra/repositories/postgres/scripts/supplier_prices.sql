CREATE TABLE IF NOT EXISTS public.supplier_prices
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    fuel_type character varying COLLATE pg_catalog."default" NOT NULL,
    payment_type character varying COLLATE pg_catalog."default" NOT NULL,
    delivery_type character varying COLLATE pg_catalog."default" NOT NULL,
    purchase_price double precision NOT NULL,
    sales_price double precision NOT NULL,
    supplier_id integer NOT NULL,
    CONSTRAINT supplier_prices_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;