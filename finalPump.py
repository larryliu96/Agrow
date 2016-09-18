import argparse
#import pandas as pd
import pickle as pl
import numpy as np
import json
import time
from influxdb import InfluxDBClient
from datetime import datetime
import serial

#connected = False

def main(host='172.20.10.13', port=8086):

    locations=['/dev/ttyACM0', '/dev/ttyACM1']
    # InfluxDB
    connected = False
    user = 'root'
    password = 'root'
    dbname = 'takingtheL'
    dbuser = 'root'
    dbuser_password = 'root'
    client = InfluxDBClient(host, port, user, password, dbname)
    client.create_database(dbname)
    print host, port, user, password, dbname
	
    for device in locations:
	try:
		print "Trying...", device
	    	ser = serial.Serial(device, 9600)
		break
	except:
		print "Failed to connect on", device
    while not connected:
	serin = ser.read()
       	connected = True

    
    print 'success'
    # Insert data in every 1 second of rideid
    while(1):
        x = ser.readline()
	x = x.split(" ")
	#print x
	
	# Error checking
	if len(x) != 3:
	    continue
	
	conversionFailure = False
	for num in x:
	    try:
		float_test = float(num)
	    except ValueError:
		print('Could not convert', num)
		conversionFailure = True
	if conversionFailure:
	    continue

	current_time = datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ')
	
	for index, datapoint in enumerate(x):
	    #print index
	    temp = {'value' : float(datapoint.replace('\n', ''))}
	     
	    measurement = 'nil'
	    
	    if index == 0:
		measurement = 'M01PivotNormal'
	    elif index == 1:
		measurement = 'M02PivotNormal'
	    elif index == 2:
		measurement = 'M03PivotNormal'
            
	    json_body = [
                {
                    "measurement": measurement,
                    "tags": {
                        "host": "server01",
                        "region": "us-west"
                    },
                   "time": current_time,
                   "fields": temp
                }
            ]
            
	    #print json_body            
	    client.write_points(json_body)
            time.sleep(0.0)

def parse_args():
    parser = argparse.ArgumentParser(
        description='example code to play with InfluxDB')
    parser.add_argument('--host', type=str, required=False, default='172.20.10.13',
                        help='hostname of InfluxDB http API')
    parser.add_argument('--port', type=int, required=False, default=8086,
                        help='port of InfluxDB http API')
    return parser.parse_args()


if __name__ == '__main__':
    args = parse_args()
    print args.host
    print args.port
    main(host=args.host, port=args.port)
