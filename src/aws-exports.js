import { Auth } from "@aws-amplify/auth";

const AwsExports = {
    Auth:{
      mandatorySignIn: true,
      region: 'us-east-1',
      userPoolId: 'us-east-1_SGzhouwJi',
      userPoolWebClientId: '5bp80udikc0jpm9ttto4ujjp72',
    },
    API:    {
        endpoints:[
            {
                name: 'MyAPIGatewayAPI',
                endpoint: 'https://e01strnfge.execute-api.us-east-1.amazonaws.com/Prod',
                region: 'us-east-1',
                // custom_header: async () => { 
                //     return { Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}` }
                // }
            }
        ]
    }
  }

export default AwsExports;