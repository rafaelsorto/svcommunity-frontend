- Authentication

  - Authentication is setup with Amplify Cognito Authentication.
  - It has local authentication, Facebook Authentication and Google
    Authentication
  -

- Authentication answers

```
$ amplify add auth
Using service: Cognito, provided by: awscloudformation

 The current configured provider is Amazon Cognito.

 Do you want to use the default authentication and security configuration? Default co
nfiguration with Social Provider (Federation)
 Warning: you will not be able to edit these selections.
 How do you want users to be able to sign in? Username
 Do you want to configure advanced settings? Yes, I want to make some additional chan
ges.
 Warning: you will not be able to edit these selections.
 What attributes are required for signing up? Email
 Do you want to enable any of the following capabilities? Add Google reCaptcha Challe
nge, Email Verification Link with Redirect
 What domain name prefix do you want to use? svcommunity-auth
 Enter your redirect signin URI: http://localhost:3000/
? Do you want to add another redirect signin URI No
 Enter your redirect signout URI: http://localhost:3000/
? Do you want to add another redirect signout URI No
 Select the social providers you want to configure for your user pool: Facebook, Goog
le

 You've opted to allow users to authenticate via Facebook.  If you haven't already, y
ou'll need to go to https://developers.facebook.com and create an App ID.

 Enter your Facebook App ID for your OAuth flow:  423822552478518
 Enter your Facebook App Secret for your OAuth flow:  70901e5534badb27ee8b3e1e99a54f8
4

 You've opted to allow users to authenticate via Google.  If you haven't already, you
'll need to go to https://developers.google.com/identity and create an App ID.

 Enter your Google Web Client ID for your OAuth flow:  796774187077-hdv6i97jetccrsvbo
a9k5jc4pq00k6co.apps.googleusercontent.com
 Enter your Google Web Client Secret for your OAuth flow:  GOCSPX-qGtQS3ssxSsJBcZKjRr
pgJ-jl8bh
Successfully added resource svcommunity9ded2d7dDefineAuthChallenge locally.

Next steps:
Check out sample function code generated in <project-dir>/amplify/backend/function/svcommunity9ded2d7dDefineAuthChallenge/src
"amplify function build" builds all of your functions currently in the project
"amplify mock function <functionName>" runs your function locally
To access AWS resources outside of this Amplify app, edit the /home/rafael/Documents/Projects/svcommunity-frontend/amplify/backend/function/svcommunity9ded2d7dDefineAuthChallenge/custom-policies.json
"amplify push" builds all of your local backend resources and provisions them in the cloud
"amplify publish" builds all of your local backend and front-end resources (if you added hosting category) and provisions them in the cloud
Successfully added the Lambda function locally
? Do you want to edit your captcha-define-challenge function now? Yes
Edit the file in your editor: /home/rafael/Documents/Projects/svcommunity-frontend/amplify/backend/function/svcommunity9ded2d7dDefineAuthChallenge/src/captcha-define-challenge.js
? Press enter to continue
Successfully added resource svcommunity9ded2d7dCreateAuthChallenge locally.

Next steps:
Check out sample function code generated in <project-dir>/amplify/backend/function/svcommunity9ded2d7dCreateAuthChallenge/src
"amplify function build" builds all of your functions currently in the project
"amplify mock function <functionName>" runs your function locally
To access AWS resources outside of this Amplify app, edit the /home/rafael/Documents/Projects/svcommunity-frontend/amplify/backend/function/svcommunity9ded2d7dCreateAuthChallenge/custom-policies.json
"amplify push" builds all of your local backend resources and provisions them in the cloud
"amplify publish" builds all of your local backend and front-end resources (if you added hosting category) and provisions them in the cloud
Successfully added the Lambda function locally
? Do you want to edit your captcha-create-challenge function now? Yes
Edit the file in your editor: /home/rafael/Documents/Projects/svcommunity-frontend/amplify/backend/function/svcommunity9ded2d7dCreateAuthChallenge/src/captcha-create-challenge.js
? Press enter to continue
? Enter the Google reCaptcha secret key: 6LfUgCsdAAAAAFbGPZojdnsbcF53W5cz-p00xKIf
Successfully added resource svcommunity9ded2d7dVerifyAuthChallengeResponse locally.

Next steps:
Check out sample function code generated in <project-dir>/amplify/backend/function/svcommunity9ded2d7dVerifyAuthChallengeResponse/src
"amplify function build" builds all of your functions currently in the project
"amplify mock function <functionName>" runs your function locally
To access AWS resources outside of this Amplify app, edit the /home/rafael/Documents/Projects/svcommunity-frontend/amplify/backend/function/svcommunity9ded2d7dVerifyAuthChallengeResponse/custom-policies.json
"amplify push" builds all of your local backend resources and provisions them in the cloud
"amplify publish" builds all of your local backend and front-end resources (if you added hosting category) and provisions them in the cloud
Successfully added the Lambda function locally
? Do you want to edit your captcha-verify function now? Yes
Edit the file in your editor: /home/rafael/Documents/Projects/svcommunity-frontend/amplify/backend/function/svcommunity9ded2d7dVerifyAuthChallengeResponse/src/captcha-verify.js
? Press enter to continue
? Enter the URL that your users will be redirected to upon account confirmation: http
://localhost:3000/dashboard
? Enter the subject for your custom account confirmation email: Please confirm your a
ccount
? Enter the body text for your custom account confirmation email (this will appear be
fore the link URL): Please click on the link below to confirm your account
Successfully added resource svcommunity9ded2d7dCustomMessage locally.

Next steps:
Check out sample function code generated in <project-dir>/amplify/backend/function/svcommunity9ded2d7dCustomMessage/src
"amplify function build" builds all of your functions currently in the project
"amplify mock function <functionName>" runs your function locally
To access AWS resources outside of this Amplify app, edit the /home/rafael/Documents/Projects/svcommunity-frontend/amplify/backend/function/svcommunity9ded2d7dCustomMessage/custom-policies.json
"amplify push" builds all of your local backend resources and provisions them in the cloud
"amplify publish" builds all of your local backend and front-end resources (if you added hosting category) and provisions them in the cloud
Successfully added the Lambda function locally
? Do you want to edit your verification-link function now? Yes
Edit the file in your editor: /home/rafael/Documents/Projects/svcommunity-frontend/amplify/backend/function/svcommunity9ded2d7dCustomMessage/src/verification-link.js
? Press enter to continue
✅ Successfully added auth resource svcommunity9ded2d7d locally

✅ Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
```
