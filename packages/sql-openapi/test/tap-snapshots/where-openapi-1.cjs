/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports['platformatic/db/openapi/where list > matches expected OpenAPI defs 1'] = `
Object {
  "components": Object {
    "schemas": Object {
      "Post": Object {
        "description": "A Post",
        "properties": Object {
          "counter": Object {
            "nullable": true,
            "type": "integer",
          },
          "id": Object {
            "type": "integer",
          },
          "longText": Object {
            "nullable": true,
            "type": "string",
          },
          "title": Object {
            "nullable": true,
            "type": "string",
          },
        },
        "required": Array [],
        "title": "Post",
        "type": "object",
      },
    },
  },
  "info": Object {
    "description": "Exposing a SQL database as REST",
    "title": "Platformatic DB",
  },
  "openapi": "3.0.3",
  "paths": Object {
    "/posts/": Object {
      "get": Object {
        "operationId": "getAllPost",
        "parameters": Array [
          Object {
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": Object {
              "type": "integer",
            },
          },
          Object {
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": Object {
              "type": "integer",
            },
          },
          Object {
            "in": "query",
            "name": "fields",
            "required": false,
            "schema": Object {
              "items": Object {
                "enum": Array [
                  "counter",
                  "id",
                  "longText",
                  "title",
                ],
                "type": "string",
              },
              "type": "array",
            },
          },
          Object {
            "in": "query",
            "name": "where.counter.eq",
            "required": false,
            "schema": Object {
              "type": "integer",
            },
          },
          Object {
            "in": "query",
            "name": "where.counter.neq",
            "required": false,
            "schema": Object {
              "type": "integer",
            },
          },
          Object {
            "in": "query",
            "name": "where.counter.gt",
            "required": false,
            "schema": Object {
              "type": "integer",
            },
          },
          Object {
            "in": "query",
            "name": "where.counter.gte",
            "required": false,
            "schema": Object {
              "type": "integer",
            },
          },
          Object {
            "in": "query",
            "name": "where.counter.lt",
            "required": false,
            "schema": Object {
              "type": "integer",
            },
          },
          Object {
            "in": "query",
            "name": "where.counter.lte",
            "required": false,
            "schema": Object {
              "type": "integer",
            },
          },
          Object {
            "in": "query",
            "name": "where.counter.in",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "in": "query",
            "name": "where.counter.nin",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "in": "query",
            "name": "where.id.eq",
            "required": false,
            "schema": Object {
              "type": "integer",
            },
          },
          Object {
            "in": "query",
            "name": "where.id.neq",
            "required": false,
            "schema": Object {
              "type": "integer",
            },
          },
          Object {
            "in": "query",
            "name": "where.id.gt",
            "required": false,
            "schema": Object {
              "type": "integer",
            },
          },
          Object {
            "in": "query",
            "name": "where.id.gte",
            "required": false,
            "schema": Object {
              "type": "integer",
            },
          },
          Object {
            "in": "query",
            "name": "where.id.lt",
            "required": false,
            "schema": Object {
              "type": "integer",
            },
          },
          Object {
            "in": "query",
            "name": "where.id.lte",
            "required": false,
            "schema": Object {
              "type": "integer",
            },
          },
          Object {
            "in": "query",
            "name": "where.id.in",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "in": "query",
            "name": "where.id.nin",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "in": "query",
            "name": "where.longText.eq",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "in": "query",
            "name": "where.longText.neq",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "in": "query",
            "name": "where.longText.gt",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "in": "query",
            "name": "where.longText.gte",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "in": "query",
            "name": "where.longText.lt",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "in": "query",
            "name": "where.longText.lte",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "in": "query",
            "name": "where.longText.in",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "in": "query",
            "name": "where.longText.nin",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "in": "query",
            "name": "where.title.eq",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "in": "query",
            "name": "where.title.neq",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "in": "query",
            "name": "where.title.gt",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "in": "query",
            "name": "where.title.gte",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "in": "query",
            "name": "where.title.lt",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "in": "query",
            "name": "where.title.lte",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "in": "query",
            "name": "where.title.in",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "in": "query",
            "name": "where.title.nin",
            "required": false,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "in": "query",
            "name": "orderby.counter",
            "required": false,
            "schema": Object {
              "enum": Array [
                "asc",
                "desc",
              ],
              "type": "string",
            },
          },
          Object {
            "in": "query",
            "name": "orderby.id",
            "required": false,
            "schema": Object {
              "enum": Array [
                "asc",
                "desc",
              ],
              "type": "string",
            },
          },
          Object {
            "in": "query",
            "name": "orderby.longText",
            "required": false,
            "schema": Object {
              "enum": Array [
                "asc",
                "desc",
              ],
              "type": "string",
            },
          },
          Object {
            "in": "query",
            "name": "orderby.title",
            "required": false,
            "schema": Object {
              "enum": Array [
                "asc",
                "desc",
              ],
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "items": Object {
                    "$ref": "#/components/schemas/Post",
                  },
                  "type": "array",
                },
              },
            },
            "description": "Default Response",
          },
        },
      },
      "post": Object {
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Post",
              },
            },
          },
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Post",
                },
              },
            },
            "description": "Default Response",
            "links": Object {},
          },
        },
      },
    },
    "/posts/{id}": Object {
      "delete": Object {
        "parameters": Array [
          Object {
            "in": "query",
            "name": "fields",
            "required": false,
            "schema": Object {
              "items": Object {
                "enum": Array [
                  "counter",
                  "id",
                  "longText",
                  "title",
                ],
                "type": "string",
              },
              "type": "array",
            },
          },
          Object {
            "in": "path",
            "name": "id",
            "required": true,
            "schema": Object {
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Post",
                },
              },
            },
            "description": "Default Response",
          },
        },
      },
      "get": Object {
        "operationId": "getPostById",
        "parameters": Array [
          Object {
            "in": "query",
            "name": "fields",
            "required": false,
            "schema": Object {
              "items": Object {
                "enum": Array [
                  "counter",
                  "id",
                  "longText",
                  "title",
                ],
                "type": "string",
              },
              "type": "array",
            },
          },
          Object {
            "in": "path",
            "name": "id",
            "required": true,
            "schema": Object {
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Post",
                },
              },
            },
            "description": "Default Response",
            "links": Object {},
          },
        },
      },
      "post": Object {
        "parameters": Array [
          Object {
            "in": "query",
            "name": "fields",
            "required": false,
            "schema": Object {
              "items": Object {
                "enum": Array [
                  "counter",
                  "id",
                  "longText",
                  "title",
                ],
                "type": "string",
              },
              "type": "array",
            },
          },
          Object {
            "in": "path",
            "name": "id",
            "required": true,
            "schema": Object {
              "type": "integer",
            },
          },
        ],
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Post",
              },
            },
          },
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Post",
                },
              },
            },
            "description": "Default Response",
            "links": Object {},
          },
        },
      },
      "put": Object {
        "parameters": Array [
          Object {
            "in": "query",
            "name": "fields",
            "required": false,
            "schema": Object {
              "items": Object {
                "enum": Array [
                  "counter",
                  "id",
                  "longText",
                  "title",
                ],
                "type": "string",
              },
              "type": "array",
            },
          },
          Object {
            "in": "path",
            "name": "id",
            "required": true,
            "schema": Object {
              "type": "integer",
            },
          },
        ],
        "requestBody": Object {
          "content": Object {
            "application/json": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Post",
              },
            },
          },
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Post",
                },
              },
            },
            "description": "Default Response",
            "links": Object {},
          },
        },
      },
    },
  },
}
`
