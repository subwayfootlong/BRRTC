This folder includes a new function that uses the KUBE gateway timestamp instead of the server timestamp to achive higher resolution of data.

# WARNING
This flow is UNSTABLE! If you turn off the Kube GW, it will reset its time as it does not have a [RTC!](https://en.wikipedia.org/wiki/Real-time_clock). The data will be backlogged as the date will be set to when the OS was installed!

# How to use
There are two possible ways that you can use this
## Connect the Kube Gateway to internet 24/7
This will enable the Kube Gateway to perform NTP synchronizations often so your timestamp will not be screwed.
## Set a NTP Server on the LAN
Devices that have a RTC or a CMOS Battery will continue counting even when turned off! Set the Kube GW to use that as an NTP server.

I dont know how to do this. Have fun figuring it out!
