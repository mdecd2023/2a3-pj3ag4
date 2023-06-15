# pip install pyzmq cbor keyboard
from zmqRemoteApi import RemoteAPIClient
from zmqRemoteApi_IPv6 import RemoteAPIClient
import keyboard
import random

client = RemoteAPIClient('localhost', 23000)

print('Program started')
sim = client.getObject('sim')
sim.startSimulation()
print('Simulation started')

def avoid(x,y):
    ball = sim.getObject('/Sphere')
    position2= [x, y, 2]
    sim.setObjectPosition(ball, -1, position2)
    
size = [0.1, 0.1, 0.1]
position = [0, 0, 2]
options = 8
def existball():
    try:
        Sphere= sim.getObject('/Sphere')
    except Exception as e:
        #print("Failed to get object: ", e)
        return 1
    return 0

if existball()==1:    
    ball = sim.createPureShape(1, options, size, 1, None)
    sim.setObjectPosition(ball, -1, position)
    ball = sim.getObject('/Sphere')
    sim.setObjectSpecialProperty(ball, sim.objectspecialproperty_detectable)

while True:

    ball = sim.getObject('/Sphere')
    ball_position =sim.getObjectPosition(ball,-1)
    if ball_position[1]<-1.860 or ball_position[1]>1.860:
 
        avoid(random.uniform(-1,1),random.uniform(-1,1))
        sim.setObjectSpecialProperty(ball, sim.objectspecialproperty_detectable)
 




