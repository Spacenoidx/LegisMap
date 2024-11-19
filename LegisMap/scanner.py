import requests
import json
import pprint as pprint


key = "832888b2712ec76b67d7385597cad774"

op = "getBill"


BASE_URL = 'http://api.legiscan.com/?key={0}&op={1}'

params = {
    'state': 'OK',
    'key': '832888b2712ec76b67d7385597cad774',
    'op': 'getSearch',
    'query': 'marijuana',
    
}

response = requests.get("https://api.legiscan.com/", params=params)

data = response.json()

pprint.pprint(data)

with open('data.json', 'w') as f:
    json.dump(data, f, indent=4)