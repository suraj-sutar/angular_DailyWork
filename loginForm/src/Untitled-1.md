All example or use in reactive From component and demo service
and custome observable example written in app.component

How to call the API ?

---

//how to make Httprequest?

-->if we want to make HttpRequest from angular application
we need to inject Httpclient in service/component constructor.

--> HttpClient it comes from or available within a @angular/common/http.

--> to use HttpClient we need to imports 'HttpClientModule'
--> HttpClientModule this provide the instance to HttpClient
--> first we need to import HttpClientModule Module in imports Array

-->by using 'HttpClient' we can making a HttpRequest and handling the Httpresponse.

---

what is the use of HTTP(Hypertext transfer Protocol):
--> HTTP it's used to communicate between web sever() and client(means a web browser/User Interface)
--> main use of the HHTP is retrive the web pages and other resourse from the web server

webServer: is sending a respose to the web browser.

---

https://jsonplaceholder.typicode.com/users --> this is API endpoint
--> this api is return by backend Developer

https://jsonplaceholder.typicode.com/todos --
what is the use of postman --> by using postman we can test API endpoint
how can you test API endpoint by using postman

steps:

1. First we need to import the HttpClientModule Into imports array
2. then inject that httpClient into constructor of service or component
   e.g: create a method inside servic
   getTodos(){
   this.httpClient.get('pass API endpoint Url')
   }
3. then use any HttpClient Method what you want like (get,post,put,patch,delete)
   4.if you want to use that method inside any component then we need to inject that class
   and then use that method
   e.g: inject that class inside constructor
   consturctor(private demoService: DemoService){
   this.demoservice.getTodos()
   }
4. this method return Observable then we need to subscribe that obseraveble if
   you want to make Http Call

--> if want to make a HttpRequest from Angular applications first of all we need to instance of HttpClient. we need to inject that HttpClient in a constructor or we can inject in service
you can call from component as well . but to get httpclent instance we need to import
HttpClientModeuls in Imports Array.without that we cannot get the instance of httpClient.
--> then we need to used different HttpClent method like get

----Leacture 18

-----------------All example or use in reactive From component and demo service
-----------------and custome observable example written in app.component

HttpClient methods:
1 get: if we want to get the data from the web server
2 post: if we want to create a new entity on the server
3 put: if we want to update the entair entity or class
4 patch: if we want to update the specific property inside the class
5 delete: if we want to remove the entity

// Observeble:
--> is a part of Rxjs library.
--> all httpClient methods giving observeble as a response
--> are lazy --> means there is need to subscribe
--> observeble are cancelable --> we can unsubscribe
//promises
-->its a part of ES6
-->it will return single unit
-->promises are not lazy
-->promises are not cancelable

//what is observeble
--> observables are a crucial part of handling asynchronous operations and managing streams of data
--> if you want to get the data from the observable there is we need to subscribe that method or observable.
--> data strem is data arrive over some time.

Observers:
--> Observers are nothing but a subscribers
--> Observers are communicate with the observable using callback
--> observer must subscribe to the observable for recive the value

--> Observers will pass the Three Method: This methods are Optional
--> this method pass Observer but observeble are call that method

1. next(): if arrive the new strem then observeble call next()
2. error(): if any error are occure the observeble call error()
3. complete(): if the all strem is complet then observeble call complete()

leacture-19
perform the CURD operation: you can get the data from server and get the data from server
1 C: create
2 U: Update
3 R: read
4 D: Delete

http verbs/Methods:
1 Get: retrive a single Item(data,object,Entity)and getting a list of items (Read)
2 Post : Create an new item () (Creatae)
3 Put: Update an Item (Update)
4 Delete : Delete the item (delete)

install json server:

1. npm install -g json-server@0.16.3

2. craete on file data.json

3. then start the server using : json-server --watch ./src/app/data.json

4. server link: http://localhost:3000/todos

5. i was pass the empty array with name todos

--> first create a service
--> then inject the httpClient into
--> then pass API endPoint Url
--> then perform Http verbs or method
--> then inject that class into component constructor
--> then create on mthod
--> inside that we create on data


for update -->
take method in todosService

//
updateTodo(id:any,data:any){

}

leacture 20:
HttpParams : in angular is used to construct URL parameter for httpRequest
