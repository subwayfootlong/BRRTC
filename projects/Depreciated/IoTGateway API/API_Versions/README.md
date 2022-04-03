## What is this?

These flows convert the IoT gateway output from processing specifically using the MQTT cloud processing into InfluxDB format.
This version follow the plug and play nature of IoT insights. Only Address, Topic, and influxDB configuration is needed in this version.

## Usage

Assuming that you have done all the IoT gateway processing, skip steps 1 through 4
1. Create a new processing that uses MQTT (IP:localhost)
2. Insert the inputs that you would like to view on influxDB
3. The MQTT Topic name will be carried over to influxDB so name it appropriately
4. On Node-Red, configure the MQTT nodes to your IoT gateway and the MQTT topic handler
5. Repeat for the amount of MQTT nodes you would like to use
6. Configure the InfluxDB batch node to InfluxDB v2 specs 
7. Insert your IP for influxDB and token(Generated on InfluxDB GUI)
8. Insert your Organization name and Bucket(Create a new one on the InfluxDB GUI)

Thats it.

If you get:
"Invalid JSONata expression: Key in object structure must evaluate to a string; got: undefined"
Change your MQTT node to output JSON object you dummy

## Versions

These versions are just simple templates that have been configured to the dashboard file.
They can be edited to your liking as it is open source

- **Standard** 2 Inputs with 4 values 

- **Advanced** 4 Inputs with 8 values 

- **Performance** 16 Inputs with 16 values 

- **Engineering** Testing environment with sample inject node
