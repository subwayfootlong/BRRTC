# KUBE 

This flow enables you to subscribe from the KUBE Gateway

   Created by an Intern


# Prerequisites
### Snaps  
   
   [node-red](https://snapcraft.io/node-red) Version 2 or later

   [influxDB](https://snapcraft.io/influxdb) Version 2 or later

   [Guide to installing snaps](https://snapcraft.io/docs/getting-started)
### node-red pallets

   You can install the node directly within the editor by using the [Palette Manager](https://nodered.org/docs/user-guide/editor/palette/manager).

   [Aedes](https://flows.nodered.org/node/node-red-contrib-aedes)

   [influxDB](https://flows.nodered.org/node/node-red-contrib-influxdb)

# Guide
This part will show you how to use the software. ALL the text inputs are case-sensitive!
## KUBE Gateway
Follow the [setup guide](https://www.kube-iot.com/support). Its pretty self explanatory

## node-red
   Accessed on localhost:1880. PR43 will return "cannot GET/" so use (PR43IP):1880
   
   There are 5 nodes. DO NOT TOUCH FORMATTER unless you know what you are doing.

   1. Subscribe to a Sensor (MQTT Subscribe node)
      | Required Feilds | Inputs |
      | ----------- | ----------- |
      | Server | localhost |
      | Port | 1883 |
      | Topic | (KUBEGWName)/(SensorMacID) |
   2. Change Measurement Name (Change Node)\\
      Change Sensor 1 to your sensor name. I like to change it to the part I attached the sensor to e.g. Motor X
   3. Variable Deleter (Function Node)
      This node deletes variables that dont need to be stored into influxDB to be efficient
   4. Formatter (Change Node)
      DO NOT TOUCH this node unless you know what you are doing
   6. influxDB Batch
      | Required Feilds | Inputs |
      | ----------- | ----------- |
      | Version | 2.0 |
      | URL | http://localhost:8086 |
      | Token | (FROM INFLUXDB) |
      | Organization | Initial Organization |
      | Bucket | (MachineName) |

Create a new flow and insert the Aedes broker. You can use the Mosquitto broker snap but I find using that limiting and cumbersome.      
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
