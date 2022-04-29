This is for advanced users only!
You can change your sensor without creating multiple dashboards with this query on influxdb

Refer to this	[forum post](https://community.influxdata.com/t/dashboard-variables-noob/24828) for more context!

## Variable
	```
import "influxdata/influxdb/schema"
schema.measurements(bucket: "INSERT_BUCKET_NAME")

	```
## Flux Graph Query
Replace filter with 

	```
  |> filter(fn: (r) => r["_measurement"] == v.measurments)
  
  ```
