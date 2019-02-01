# AWS Serverless
Various implementation of serverless lamda.

## Steps to run
1. Pre-requisites: serverless framework and maven.
2. If its java project, go to its directory & run `mnv clean package`.
3. Then run `sls deploy`.
4. Congrats you have deployed your serverless function.

## Cold start of various lambdas

| Lambda                    | Cold start in ms |
| :-------------:           |:-------------:   |
| Java with no framework    | 2000             |
| Java with Spring boot     | 1000             |
| Nodejs with no framework  | 1500             |
