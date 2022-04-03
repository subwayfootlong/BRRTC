# IoT Gateway API

This flow repalces the backend processing of IoT insights

Bosch Rexroth IoT Insights has been discontinued as of May 2021

Created by an Intern

## What does this API do?
Subscribes to a Broker that IoT Gateway is processing data to and formats it to influxDB before uploading it.

## Prerequisites
### Snaps  
[node-red](https://snapcraft.io/node-red) Version 2 or later

[influxDB](https://snapcraft.io/influxdb) Version 2 or later

### node-red pallets

You can install the node directly within the editor by using the [Palette Manager](https://nodered.org/docs/user-guide/editor/palette/manager).

[Aedes](https://flows.nodered.org/node/node-red-contrib-aedes)

[influxDB](https://flows.nodered.org/node/node-red-contrib-influxdb)

## Guide

This part will show you how to use the software. ALL the text inputs are case-sensitive!
### IoT Gateway Software

1. Create a MQTT Processing with these parameters

| Required Feilds | Inputs |
| ----------- | ----------- |
| IP destination | localhost |
| Port | 1883 |
| Broker | <SensorName> |
| ClientID | IoTGW <SensorName>|

2. Save and check your diagnostic for any issues.

#### Common Errors


## Multiple Measurements
If you would like to rename/create more measurements, as of latest version, the code below will extract the measurement name from the mqtt topic.
<pre><code>[
   {
       "measurement": msg.topic,
       "fields": msg.payload.${$.name: $.values.value}
  }
] </code></pre>


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
