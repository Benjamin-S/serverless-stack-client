export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-east-1",
        BUCKET: "note-app-uploads-serverless"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://pl81otylq0.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_apvXhBV4Y",
        APP_CLIENT_ID: "4ibaoekq5v8c00ffeua95qsgtr",
        IDENTITY_POOL_ID: "us-east-1:839cf399-125d-4642-8dfd-bbe2a45c963b"
    }
};