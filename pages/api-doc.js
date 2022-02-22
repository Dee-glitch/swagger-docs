import { createSwaggerSpec } from "next-swagger-doc";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const ApiDoc = ({ spec }) => {
  console.log(spec);
  return (
    <SwaggerUI
      spec={{
        info: { title: "NextJS Swagger", version: "0.1.0" },
        swagger: "2.0",
        paths: { "/api/hello": { get: [Object] } },
        definitions: {},
        responses: {},
        parameters: {},
        securityDefinitions: {},
        tags: [],
      }}
    />
  );
};

export const getStaticProps = async () => {
  const spec = createSwaggerSpec({
    definition: {
      info: {
        title: "NextJS Swagger",
        version: "0.1.0",
      },
    },
  });
  return {
    props: {
      spec,
    },
  };
};

export default ApiDoc;
