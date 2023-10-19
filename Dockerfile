# Project can be accessed at the URL:
# http://localhost:80

FROM php:7.4-apache
WORKDIR /var/www/html
RUN apt-get update && apt-get install -y libssl-dev
RUN pecl install mongodb
RUN echo "extension=mongodb.so" > /usr/local/etc/php/conf.d/mongodb.ini
COPY ./php/ /var/www/html/
EXPOSE 80
CMD ["apache2-foreground"]