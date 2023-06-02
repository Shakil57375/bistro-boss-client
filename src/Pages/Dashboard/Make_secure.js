/**
 * --------------
 * BASIC
 * --------------
 * 1. don not show the link to them who should not see it only show to the person/types of user who should see it
 * 2. Do not allow to visit the link by typing on the url
 * use AdminRoute that will check whether the use is admin or not if not admin the redirect to any other page. you could logout user and send them to the login page as well.
 * --------------
 * TO SEND DATA
 * --------------
 * 1. verify jwt token (send authorization token in the header to the server). If possible use axios to send jwt token by intercepting the request.
 * if it is an admin activity. Make sure only admin user is posting data
 * by using verifyAdmin
 * 
*/