# Bit.CookieHandler
Small module to get, add and remove the cookies in a web page, it saves the cookies in the local scope of the module until they are modified

# Usage
Download or clone the repo to get the assert.js and cookieHandler.js files, since the last has a dependency on the first to work properly you need both, finally add them to your project. 

### Important
Make sure to **__always__** add *assert.js* before *cookieHandler.js*

# Examples
### getAll
Takes no arguments and the fisrt time gets the cookies from the browser, after that it gets the cookies from the module local scope, it returns a collection on key value pairs
```javascript
cookieHandler.getAll();
// output
we got cookies from browser
(5) [{…}, {…}, {…}, {…}, {…}]
0: {name: "SID", value: "9wWiZpAYVqvh1sg1iLNneQenCVhpHVDeM8jWkc1B4Qm08Z7ocvoqaKiTAkdpsvhK768N0A."}
1: {name: "APISID", value: "QPFZCFqUKld4orhA/AfcAXNsqdM-q5jv1c"}
2: {name: "SAPISID", value: "ZfaSh-P2nMZAApIX/AfxLoDU2xx8QeOu2T"}
3: {name: "1P_JAR", value: "2018-4-6-0"}
4: {name: "SIDCC", value: "AEfoLeZKVy-XMuIM4oVpH8HFgGqwGVyUB3EdUXge_R6H8jOW1dx26BIdfVBZ09zWzu22oRW94FA"}

cookieHandler.getAll();
// output
we got cookies from local scope
(5) [{…}, {…}, {…}, {…}, {…}]
0: {name: "SID", value: "9wWiZpAYVqvh1sg1iLNneQenCVhpHVDeM8jWkc1B4Qm08Z7ocvoqaKiTAkdpsvhK768N0A."}
1: {name: "APISID", value: "QPFZCFqUKld4orhA/AfcAXNsqdM-q5jv1c"}
2: {name: "SAPISID", value: "ZfaSh-P2nMZAApIX/AfxLoDU2xx8QeOu2T"}
3: {name: "1P_JAR", value: "2018-4-6-0"}
4: {name: "SIDCC", value: "AEfoLeZKVy-XMuIM4oVpH8HFgGqwGVyUB3EdUXge_R6H8jOW1dx26BIdfVBZ09zWzu22oRW94FA"}
```
### get
Takes as argument the name of a cookie as string, throws an exception if the argument is not a string, returns a key value pair if the cookie is found, undefined otherwise
```javascript
cookieHandler.get(404);
// output
Uncaught 404 is not a string

cookieHandler.get('SID');
// output
{name: "SID", value: "9wWiZpAYVqvh1sg1iLNneQenCVhpHVDeM8jWkc1B4Qm08Z7ocvoqaKiTAkdpsvhK768N0A."}

cookieHandler.get('404');
// output
undefined
```
