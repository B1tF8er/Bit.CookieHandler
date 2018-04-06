# Bit.CookieHandler
Small module to get, add and remove the cookies in a web page, it saves the cookies in the local scope of the module until they are modified

# Usage
Download or clone the repo to get the assert.js and cookieHandler.js files, since the last has a dependency on the first to work properly you need both, finally add them to your project. 

### Important
Make sure to **__always__** add *assert.js* before *cookieHandler.js*

# Examples
### getAll
Takes no arguments

The first time gets the cookies from the browser, after that it gets the cookies from the module local scope

Returns a collection of key value pairs
```javascript
cookieHandler.getAll();
```
### get
Takes as argument the name of a cookie as string.

Throws an exception if the argument is not a string

Returns a key value pair if the cookie is found, null otherwise
```javascript
cookieHandler.get('test');
```
### set
Takes as arguments:

  1. the name of a cookie as string
  
  2. the value of the cookie that can be any string, number, array or object
  
  3. the days in which the cookie will expire, this is optional and must be a number
 
Throws an exception if:

  1. the argument name is not a string
  
  2. the argument value is null or undefined
  
  3. throws an exception if the argument days is not a number 
```javascript
cookieHandler.set('test', 404);
cookieHandler.set('test', 404, 10);
```
### remove
Takes as argument the name of a cookie as string.

Throws an exception if the argument is not a string
```javascript
cookieHandler.remove('test');
