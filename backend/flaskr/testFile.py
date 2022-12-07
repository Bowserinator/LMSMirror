# -*- coding: utf-8 -*-
"""
Created on Tue Dec  6 20:01:48 2022

@author: Preston Waters
"""

#!/usr/bin/python

# imports
import datetime
import requests
import hashlib
import hmac
import base64
import json


# Get the current time, printed in the right format
def nowAsStr():
    currentTime = datetime.datetime.utcnow()
    prettyTime = currentTime.strftime('%a, %d %b %Y %H:%M:%S GMT')
    return prettyTime


# Set up the request pieces
apiKey = 'your_key'
apiSecret = 'your_secret'
method = 'GET'
host = 'api.inshosteddata.com'
path = '/api/account/self/dump'
timestamp = nowAsStr()

requestParts = [
    method,
    host,
    '',  # content Type Header
    '',  # content MD5 Header
    path,
    '',  # alpha-sorted Query Params
    timestamp,
    apiSecret
]

# Build the request
requestMessage = '\n'.join(requestParts)
print(requestMessage.__repr__())
hmacObject = hmac.new(apiSecret, '', hashlib.sha256)
hmacObject.update(requestMessage)
hmac_digest = hmacObject.digest()
sig = base64.b64encode(hmac_digest)
headerDict = {
    'Authorization': 'HMACAuth ' + apiKey + ':' + sig,
    'Date': timestamp
}

# Submit the request/get a response
uri = "https://"+host+path
print(uri)
print(headerDict)
response = requests.request(method='GET', url=uri,
                            headers=headerDict, stream=True)

# Check to make sure the request was ok
if(response.status_code != 200):
    print('Request response went bad. Got back a ', response.status_code,
          ' code, meaning the request was ', response.reason)
else:
    # Use the downloaded data
    jsonData = response.json()
    print(json.dumps(jsonData, indent=4))
