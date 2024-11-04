export const petNamePrompt = {
    model: "gpt-4o-2024-08-06",
    temperature: 1,
    systemPrompt: "You are a helpful assistant that specializes in generating creative pet names.",
    userPrompt: (animalType: string) => `Generate a creative pet name and short description for a ${animalType}.`,
    responseFormat: {
      "type": "json_schema",
      "json_schema": {
        "name": "petNameResponse",
        "strict": true,
        "schema": {
          "type": "object",
          "properties": {
            "petName": {
              "type": "string",
              "description": "The creative pet name generated for the pet."
            },
            "description": {
              "type": "string",
              "description": "A short description of the pet name, limited to 100 characters."
            }
          },
          "required": [
            "petName",
            "description"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
      }
    }
  };
  