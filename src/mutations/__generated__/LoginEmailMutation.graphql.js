/**
 * @flow
 * @relayHash c4b66470298436240c55ca345020e580
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LoginEmailInput = {|
  email: string,
  password: string,
|};
export type LoginEmailMutationVariables = {|
  input: LoginEmailInput
|};
export type LoginEmailMutationResponse = {|
  +LoginEmail: ?{|
    +token: ?string,
    +error: ?string,
  |}
|};
export type LoginEmailMutation = {|
  variables: LoginEmailMutationVariables,
  response: LoginEmailMutationResponse,
|};
*/


/*
mutation LoginEmailMutation(
  $input: LoginEmailInput!
) {
  LoginEmail(input: $input) {
    token
    error
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "LoginEmailInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "LoginEmail",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "LoginEmailInput!"
      }
    ],
    "concreteType": "TokenPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "error",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LoginEmailMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "LoginEmailMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "LoginEmailMutation",
    "id": null,
    "text": "mutation LoginEmailMutation(\n  $input: LoginEmailInput!\n) {\n  LoginEmail(input: $input) {\n    token\n    error\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'afe3904fd739324f47d84c12b45d1d3b';
module.exports = node;
