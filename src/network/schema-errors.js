const getErrorField = (schemaError) => {
  return schemaError.instancePath
    ? schemaError.instancePath.slice(1)
    : schemaError.params.missingProperty;
};

const cleanSchemaErrors = (schemaErrors) => {
  return schemaErrors.map((schemaError) => {
    const errorField = getErrorField(schemaError);
    const errorMessage = schemaError.message;
    return {
      name: errorField,
      message: errorMessage,
    };
  });
};

export const getSchemaErrors = (invalidParams) => {
  const schemaErrors = invalidParams?.body || invalidParams?.params || [];
  const errors = cleanSchemaErrors(schemaErrors);
  return errors;
};
