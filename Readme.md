# Welcome to Raremark Application!


Application  Instructions: 
- 
- Frontend
	- npm install / yarn install
	- npm start / yarn start
- Backend
	- Import the SQL file from the project main root folder. or /
	- connect database by changing .env file
	- npm migrate / yarn migrate to initialise fresh database 



Frontend urls: 
- http://localhost:3000/
-  http://localhost:3000/add
 - http://localhost:3000/property-search?property=asdfasdfasdf&adult=1&children=0&roomCount=1&checkIn=10-10-2020&checkOut12-10-2020 
 - http://localhost:3000/details/1


Backend API  urls: 
- (POST)  http://localhost:1338/api/v1/property/create-property
- (GET) http://localhost:1338/api/v1/property/search-property
- (GET) http://localhost:1338/api/v1/property/get-property?id=${id}



