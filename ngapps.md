Div - > container and form-group
input type-text , select element -> form-control
button ->btn->default, btn-success, btn-primary, btn-warning, btn-alert
table -> table table-striped table-bordered table-condensed 

*****************************************************************************************************25 Jan 2019
*****************************************************************************************************

- Behavioural class -  services -  Class will be laoded as on requirment
- Used to contain load operations
- Use @injectable() decorator to make class service class
- The class must be register
- So that the class will be loaded on demand and used on demand that is the serive class
    - advantage - 
        - Service is reuaable out of the class
    - inectacble tell us that this will be on demand
    - Necessary to think of injectable and providers

*****************************************************************************************************28 Jan 2019
*****************************************************************************************************
- How to secure call from angural secure REST API's
 - Authentication
 - Authorization

- Dockerizarion
 - node + express - one image
 - node + express + mongo - can be one image
 - Angulare can be one image
 - MEAN - can be one image

docker.com
dockerhub.com
You can control security via routes.

Go through - 
1. Docker file
2. docker compose file
*****************************************************************************************************29 Jan 2019
*****************************************************************************************************
Five Objects for ANGULAR ROUTING
- CanActive
   - Decide route can be activated. This guard is useful in the curcumstance where the user is authro]ized to navigate to the target component ro the user might not be logged into the system
- CanDeactive
   - Opposite to to canActive
- Resolve
    - This gaurd delays the activation of the route until some tasks are completed. You can use the gaurd to pre-fetch the data from the backed API, before routing the route.
- CanLoad
    - This gaurd is used to gaurd to routers that load features modules dynamicallay.
    ( Where we have multi module scenario) example angular fusion search for it. github has smaple project
- CanActiveChild
   - This determines the child route can be activated

   IDENTITY MANAGEMNT
   - Token
     - tradition robust way
     - Anybody can access just they have to pass token
   - Oauth2.0 
    - Open Identitty provider - Public facing websites make use of it ( like facebook, google, twitter)
    - small challenge - if finanncial site - no google, facebook, twitter
    - package avaialble , install and use
    - oAuth can be used in openIdConnect
   - OpenIdConnect
     - Used for AD and ADs - 
     - Mulitytenancy ( What is multitenancy )

1. First User attemt to login with theri crediantials
2. After server verifies the crediantials, it sends "JSON web Token" to the the client
3. A client then saves that token in local storjage or any other storage mechanism
4. Again of client wants a request to protected route or resource, then it sends JWT in a request headers
5. The server verifes that JWT and it is correct then return a JSON response , then it give anathorized access


Explore crypto package -  Asked us to do - This is for encryption

ASSIGNEMNT TO DO - 
- Add a login component in a angular application which will have two routes in it. 
- The default route should show username/password textboxes and signin anc cancel two buttons.
- When the username is entered along with the password and signin button is clicked authenticate the user if is found.
- If not authenticcated then show the error page with the link for registration.
- Regitration link should contain username, password, confirmpassword these textboxes signup as button
- When username is entered in the textbox the system is should verify whether the username is avalable
- password and confirm password must match
- Once the user is authenticated allow user to perform crud opertions.

We are index.page - when user is authenticated
it shoud show all the products
on top if products add new
in list edit and delete button

When AddNEw is clciked it should show add new component -  Save the component
edit and delete should delete row

sessionStorage.setItem('key', token)
sessionStorage.getItem(key)

DOCKER COMMANDS
//Build the container
docker build -t msabnisng .

// run te container once it is build
docker run -it -v :/usr/src/app -v /usr/src/