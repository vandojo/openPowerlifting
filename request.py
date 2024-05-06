import requests

# App url
url = 'http://127.0.0.1:5000/predictSq'

data = {
    'Squat1Kg': [100, 80, 150, 200, 300],
    'Sex': [1,0,0,1,1]
}


response = requests.post(url, json=data)

response = requests.post(url, json=data)


if response.status_code == 200:
    
    prediction = response.json()
    print(prediction)
else:
    
    print(f'API Request Failed with Status Code: {response.status_code}')
    print(f'Response Content: {response.text}')