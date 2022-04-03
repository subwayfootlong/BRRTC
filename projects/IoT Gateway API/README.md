# IoT Gateway API

This flow repalces the backend processing of IoT insights

Bosch Rexroth IoT Insights has been discontinued as of May 2021

Created by an Intern

## Prerequisites
Programs : [node-red (https://snapcraft.io/node-red) , [influxDB](https://snapcraft.io/influxdb)

## What the project does
This project is basically an API from IoT Gateway to InfluxDB v2. It automatically take the MQTT output of the IoT gateway and format it into influxdb format

## Installation

* Copy the code and import on node-red
## Required Custom Palletes 

node-red-contrib-influxdb

This link shows you how to install custom pallates: https://nodered.org/docs/user-guide/editor/palette/manager

Just download the latest version
## Usage
Follow the powerpoint slides for a more detailed view

If you're reading this, you're probably technically inclined to understand it from text so just follow my readme
  
1. Run node-red on your platform
   1. Once installed as a global module you can use the node-red command to start Node-RED in your terminal.
1. You can then access the Node-RED editor from your browser at http://localhost:1880 
1. Create and set the Broker Source in the MQTT node on the left.(Node with MQTT logo)
2. Replace the inject node with your MQTT Node
3. Create and set the Database Source in the InfluxDB node on the right (Node with InfluxDB logo)
4. Deploy and Enjoy

## Version
This flow has 4 versions which all basically do the same thing.
The completed is the one to use for actual implementation

## Multiple Measurements
If you would like to rename/create more measurements, as of latest version, the code below will extract the measurement name from the mqtt topic.
<pre><code>[
   {
       "measurement": msg.topic,
       "fields": msg.payload.${$.name: $.values.value}
  }
] </code></pre>

## JSON pointer
`msg.payload[foo].name` points to measurement name set in the IoT Gateway Software

`msg.payload[foo].values[0].value` points to to the value collected

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
