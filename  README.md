# Vocabulary Builder
Vocabulary Builder is an application that can be used to for learning arcane vocabulary words for competitive language exams. 
It has been designed in a way that you can work with as few clicks and typing as possible. 

![img_1.png](php/images/HomeScreen.png)

## Features
1. Show results dynamically (without having to press Return/Enter key after each entry).
2. Shows search results from [Google](https://www.google.com/)  , [Merriam Webster](https://www.merriam-webster.com/), [Google Images](https://www.google.com/imghp), [YouTube](https://www.youtube.com/), and [Olam](https://olam.in/) in new tabs.  

## TechStack
- JavaScript with HTML and CSS is used for front-end.
- [PHP](https://www.php.net/) has been used as back-end.
- [MongoDB](https://www.mongodb.com/)is the database used in current version. Previous it was [MySQL](https://www.mysql.com/).
- [Docker](https://www.docker.com/) has been used for portability.

## Running the Project

#### Prerequisites for running:
1. [MongoDB](https://www.mongodb.com/)
2. [Docker](https://www.docker.com/)

#### Steps
1. Specify your MongoDB credentials in the file `php/vocabularyAppWebConstants.php`.  
2. Build and run the Docker image from the  Dockerfile in the root directory. `docker run -p 80:80 -d vocabularyBuilder`
3. Access the project from: http://localhost

Optional: If you plan to use Google reCaptcha v3, specify your _client-key_ in `php/scripts/vocabularyAppWebScripts.js` and _server-key_ in `php/vocabularyAppWebServer.php`

#### MongoDB Structure
Specify your MongoDB database and collections names in `php/vocabularyAppWebServer.php`.

###### Collection: VocabularyBuilder.all_words (structure)
    _id: ObjectId('6531c1fe5fcacb701d73e8b4')
    Word : "a"
    Meaning : "on"
    Definition : "afire - on fire; ashore - on the shore; aside - on the side"
    Additional_Info : "Latin"
    Date : "01 January 2019"



### Version History
#### v1.0 
* Development timeline: 22-March-2020 (start) to 23:23 on 29-March-2020 (end) IST.
* Functionalities: PHP application with MySQL database, running in local machine using XAMPP server. 

#### v2.0 
* Timeline: 10:00 of 17-October-2023 (start) to 23:30 of 19-October-2023 PT.
* Updates: 
  * Changed to MongoDB.
  * Deployed to Microsoft Azure. 

#### v2.1
* Timeline: 13:30 of 11-Nov-2023 (start) to 13:30 of 12-November-2023 (end) PT.
* Updates:
  * Updated keyboard-shortcuts to toggle configurations. 
  * Incorporated Google reCaptcha v3. 
  * Integrated [APM](https://applicationmonitor.azurewebsites.net/). 
  * Added footer with contact information. 

## Disclaimer 
While developing and using the application I had used study proprietary materials of other companies, to comply with copyright laws and their works I have excluded them from the deployed database.