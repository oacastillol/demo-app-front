import { Auth } from "@aws-amplify/auth";

const AwsExports = {
    Auth:{
      mandatorySignIn: true,
      region: 'us-east-1',
      userPoolId: 'us-east-1_OI8jKNQ9g',
      userPoolWebClientId: '4rhvsteqkvfjkir3rc135phass',
    },
    API:    {
        endpoints:[
            {
                name: 'MyAPIGatewayAPI',
                endpoint: 'https://p9fi4qwgz0.execute-api.us-east-1.amazonaws.com/Prod',
                region: 'us-east-1',
                // custom_header: async () => { 
                //     return { Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}` }
                // }
            }
        ]
    }
  }

export default AwsExports;