//Put this before the deleter
const input = msg.payload.time;
let t = 0
const result = input.replace(/:/g, match => ++t === 3 ? '.' : match)
const unixtime = new Date(result).valueOf();
msg.payload.timestamp=unixtime;
return msg;
