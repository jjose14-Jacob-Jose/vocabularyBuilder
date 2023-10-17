FROM php:7.4-apache
WORKDIR /var/www/html
COPY ./php/ /var/www/html/
EXPOSE 80
CMD ["apache2-foreground"]

# Project can be accessed at the URL:
# http://localhost:80