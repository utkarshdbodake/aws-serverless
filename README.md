# AWS Serverless
Various implementation of serverless lamda.

## Steps to run
1. Pre-requisites: serverless framework and maven.
2. If its java project, go to its directory & run `mnv clean package`.
3. Then run `sls deploy`.
4. Congrats you have deployed your serverless function.

## Cold start of various lambdas
#### For 128 MB RAM
| Lambda                    | Cold start in ms |
| :-------------:           |:-------------:   |
| Java with no framework    | [ 5362, 5368, 5300, 5559, 5128 ]            |
| Java with Spring boot     |              |
| Nodejs with no framework  | [   ]            |

## Execution time of warm lambda
#### For 128 MB RAM
| Lambda                    | Executable time in ms  |
| :-------------:           |:-------------:         |
| Java with no framework    | [ 2.95, 0.96, 1.06, 16.83, 0.98 ] |
| Java with Spring boot     |              |
| Nodejs with no framework  | [ 18, 0.40]             |
