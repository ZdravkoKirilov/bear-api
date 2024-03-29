# Bear api

## Get started

A recent version of nodejs should be installed.
Then in the project root folder run via cmd or any given terminal:

```js
npm install
```

and then

```js
npm start
```

then open localhost:8080 and "Hello world" should be returned

## Endpoints

1. /bears - returns a list of bear objects, randomly fails 10% of the time

2. /bears/1 - will return the first bear from the list, there are 4 bears in total. Also randomly fails 10% of the time. Trying to search for a non-existing bear, e.g. - /bears/7 always returns an error

3. /bears/search?name=some_search_string - returns a list of matched bears ( by their name)

## Accessing from front end apps

1. Returns all bears:

   ```js
   fetch("http://localhost:8080/bears");
   ```

2. Returns a single bear

   ```js
   fetch("http://localhost:8080/bears/2");
   ```

3. Searches for a bear by name
   ```js
   fetch("http://localhost:8080/bears/search?name=polar}");
   ```
