import { Auth } from "@aws-amplify/auth";
/**
 * Export credentials and settings to connect AWSCognito
 */
const AwsExports = {
    Auth:{
      mandatorySignIn: true,
      region: 'us-east-1',
      userPoolId: 'us-east-1_2jGo6rb3L',
      userPoolWebClientId: '463ub0u223tqq8mv9mpo2ofuqd',
    },
    API:    {
        endpoints:[
            {
                name: 'MyAPIGatewayAPI',
                endpoint: 'https://fq8u05ukwc.execute-api.us-east-1.amazonaws.com/Prod',
                region: 'us-east-1',
                custom_header: async () => { 
                     return { Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`,
                     'Access-Control-Allow-Origin': '*',
                     'Content-Type': 'application/json' }
                }
            }
        ]
    }
  }

export default AwsExports;