import {PublishingInformation} from '../publishing-information';

export const skill = {
    skillManifest: {
      publishingInformation: {
        locales: {
          'en-GB': {
            "summary": PublishingInformation.SUMMARY,
            "examplePhrases": [
              `Alexa open ${PublishingInformation.APP_NAME}`,
              `Alexa launch ${PublishingInformation.APP_NAME}`,
              `Alexa start ${PublishingInformation.APP_NAME}`
            ],
            name: PublishingInformation.NAME,
            description: PublishingInformation.DESCRIPTION
          }
        },
        isAvailableWorldwide: true,
        testingInstructions: PublishingInformation.TESTING_INSTRUCTIONS,
        category: PublishingInformation.CATEGORY,
        distributionCountries: []
      },
      apis: {
        custom: {
          endpoint: {
            sslCertificateType: "Wildcard",
            uri: PublishingInformation.APP_ENDPOINT
          }
        }
      },
      manifestVersion: "1.0"
    }
  }