{
  "meta": {
    "version": "1",
    "type": "variable",
    "name": "field-Template",
    "description": "template created from variable: field"
  },
  "content": {
    "data": {
      "type": "variable",
      "id": "0970a72d075b6000",
      "attributes": {
        "name": "field",
        "arguments": {
          "type": "query",
          "values": {
            "query": "import \"influxdata/influxdb/schema\"\r\n\r\nschema.measurementTagValues(\r\n    bucket: v.buckets,\r\n    measurement: v.measurements,\r\n    tag: \"_field\",\r\n)",
            "language": "flux"
          }
        },
        "selected": [
          "humidity"
        ]
      },
      "relationships": {
        "variable": {
          "data": [
            {
              "type": "variable",
              "id": "096a877f09dfe000"
            },
            {
              "type": "variable",
              "id": "0970b25debdb6000"
            }
          ]
        },
        "label": {
          "data": []
        }
      }
    },
    "included": [
      {
        "id": "096a877f09dfe000",
        "type": "variable",
        "attributes": {
          "name": "buckets",
          "arguments": {
            "type": "query",
            "values": {
              "query": "buckets()\r\n  |> filter(fn: (r) => r.name !~ /^_/)\r\n  |> rename(columns: {name: \"_value\"})\r\n  |> keep(columns: [\"_value\"])",
              "language": "flux"
            }
          },
          "selected": [
            "Kube Gateway"
          ]
        },
        "relationships": {
          "label": {
            "data": []
          }
        }
      },
      {
        "id": "0970b25debdb6000",
        "type": "variable",
        "attributes": {
          "name": "measurements",
          "arguments": {
            "type": "query",
            "values": {
              "query": "import \"influxdata/influxdb/schema\"\r\nschema.measurements(bucket: v.buckets)",
              "language": "flux"
            }
          },
          "selected": [
            "Material Chamber"
          ]
        },
        "relationships": {
          "label": {
            "data": []
          }
        }
      }
    ]
  },
  "labels": []
}
