import * as AmazonCognitoIdentity from "amazon-cognito-identity-js";
import { getenv } from "./getenv";

export const userPool = new AmazonCognitoIdentity.CognitoUserPool({
  UserPoolId: getenv("CognitoUserPoolId"),
  ClientId: getenv("CognitoClientId"),
});

export const getCognitoUserAttribute = (Name, Value) =>
  new AmazonCognitoIdentity.CognitoUserAttribute({ Name, Value });

export const cognitoUserSignUp = ({ firstName, lastName, email, password }) =>
  new Promise((resolve, reject) => {
    try {
      const userAttributes = [
        getCognitoUserAttribute("custom:firstName", firstName),
        getCognitoUserAttribute("custom:lastName", lastName),
      ];

      userPool.signUp(
        email,
        password,
        userAttributes,
        null,
        (error, result) => {
          if (error) reject(error);

          resolve();
        }
      );
    } catch (error) {
      reject(error);
    }
  });

export const cognitoUserSignIn = (email, password) =>
  new Promise((resolve, reject) => {
    try {
      const cognitoUser = new AmazonCognitoIdentity.CognitoUser({
        Username: email,
        Pool: userPool,
      });

      const authenticationDetails =
        new AmazonCognitoIdentity.AuthenticationDetails({
          Username: email,
          Password: password,
        });

      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: resolve,
        onFailure: reject,
        newPasswordRequired: () => {},
        totpRequired: () => {},
      });
    } catch (error) {
      reject(error);
    }
  });

export const cognitoUserSignOut = () => userPool.getCurrentUser()?.signOut();

export const getCurrentUser = () =>
  new Promise((resolve, reject) => {
    try {
      const currentUser = userPool.getCurrentUser();

      if (!currentUser) reject(new Error("currentUser is invalid."));

      currentUser.getSession((error, session) => {
        if (error) reject(error);

        if (!session || !session.isValid())
          reject(new Error("Session is invalid."));

        resolve(currentUser);
      });
    } catch (error) {
      reject(error);
    }
  });
