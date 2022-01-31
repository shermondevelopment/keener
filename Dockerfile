FROM mysql:8.0


ADD teste.sql /docker-entrypoint-initdb.d
