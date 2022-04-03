# IoT Gateway API

   This flow repalces the backend processing of IoT insights

   Bosch Rexroth IoT Insights has been discontinued as of May 2021

   Created by an Intern

# What does this API do?
   Subscribes to a Broker that IoT Gateway is processing data to and formats it to influxDB before uploading it.

# Prerequisites
### Snaps  
   IoT-Gateway. Look at PoC folder.
   
   [node-red](https://snapcraft.io/node-red) Version 2 or later

   [influxDB](https://snapcraft.io/influxdb) Version 2 or later

   [Guide to installing snaps](https://snapcraft.io/docs/getting-started)
### node-red pallets

   You can install the node directly within the editor by using the [Palette Manager](https://nodered.org/docs/user-guide/editor/palette/manager).

   [Aedes](https://flows.nodered.org/node/node-red-contrib-aedes)

   [influxDB](https://flows.nodered.org/node/node-red-contrib-influxdb)

# Guide

   This part will show you how to use the software. ALL the text inputs are case-sensitive!
## IoT Gateway Software

1. Create a MQTT Processing with these parameters

   | Required Feilds | Inputs |
   | ----------- | ----------- |
   | Broker | localhost |
   | Port | 1883 |
   | Topic | (SensorName) |
   | ClientID | IoTGW-(SensorName) |
   
I like to keep the topic name to the Machine part the sensor is located at e.g. Motor X 

2. Save and check your diagnostic for any issues.

### Common Errors

   Only some Sensors are published

   IoT Gateway for some reason uses multiple server client so each new cloud processing is a seperate client. Max tested is 5 clients per Port. Just use a unused port e.g 1884 if data is not being transfered

## node-red
   Accessed on localhost:1880. PR43 will return "cannot GET/" so use (PR43IP):1880
   
   There are 3 nodes. DO NOT TOUCH FORMATTER unless you know what you are doing.

   1. IoT Gateway Input 1 (MQTT Subscribe node)
      | Required Feilds | Inputs |
      | ----------- | ----------- |
      | Server | localhost |
      | Port | 1883 |
      | Topic | (SensorName) |
   2. influxDB Batch
      | Required Feilds | Inputs |
      | ----------- | ----------- |
      | Version | 2.0 |
      | URL | http://localhost:8086 |
      | Token | (FROM INFLUXDB) |
      | Organization | Initial_Organization |
      | Bucket | (MachineName) |
   3. Create a new flow and insert the Aedes broker. You can use the Mosquitto broker snap but I find using that limiting and cumbersome.
      
## InfluxDB
   Accessed on localhost:8086
   
   1. Follow the steps to create an account.
      | Required Feilds | Inputs |
      | ----------- | ----------- |
      | Inital Bucket | Inital_Bucket |
      | Organization | Initial_Organization |
 
   2. Get your token from data(side tab)>tokens
   3. Create a new bucket with your Machine name from data(side tab)>buckets
   4. Use data explorer to view your data
   5. Use Boards to create Dashboards

## Remarks
Now you're all done!

If you have any errors, Good luck on debugging them!

But on a serious note, most of the errors will be shown on the node-red debug terminal and they are quite self explanatory.

Most of the parts that can bring an error already have been ironed out. Most of the errors will be on node-red so insert a debug node

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
