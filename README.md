# POTD


Pint Of The Day: Simple app to randomly suggest what pint you should go for today :) Cheers!

## Install Dev enviroment (OSX)

### Install Node
 
    brew update
    brew install node
  
### Install Grunt and bower

    npm install -g grunt-cli bower

### Install dependencies via bower
    bower install

## Preview the app
 
    grunt serve
    http://localhost:9000/

## Build an optimized, production-ready version

    grunt
    
## APITools
   www.apitools.com

### Middlewares
   * CORS Header
   * Change Query Params
   * Response Caching

## Trying out the app
  For the app to work, CORS and Change Query Params (API Key) are needed.
  Then, it's good to make use of Response Caching middleware modified as the [following gist](https://gist.github.com/ddcesare/e99c2f006d2a14438a5d)

