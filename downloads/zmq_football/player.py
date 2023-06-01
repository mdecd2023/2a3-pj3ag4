# pip install pyzmq cbor keyboard
from zmqRemoteApi import RemoteAPIClient
from zmqRemoteApi_IPv6 import RemoteAPIClient
import keyboard
import random
import math
#import pathlib.path


client = RemoteAPIClient('localhost', 23000)
#client = RemoteAPIClient('2001:288:6004:17:2023:cda:4:6', 23000)

print('Program started')
sim = client.getObject('sim')
#sim.startSimulation()
print('Simulation started')

player='/a_player1'
v=8
a=40

def setVelocity(lfwV, rfwV,lbwV, rbwV):
    leftMotor1 = sim.getObject(player+'/joint_lf')
    rightMotor1 = sim.getObject(player+'/joint_rf')
    leftMotor2 = sim.getObject(player+'/joint_lb')
    rightMotor2 = sim.getObject(player+'/joint_rb')
    sim.setJointTargetVelocity(leftMotor1, lfwV)
    sim.setJointTargetVelocity(rightMotor1, rfwV)
    sim.setJointTargetVelocity(leftMotor2, lbwV)
    sim.setJointTargetVelocity(rightMotor2, rbwV)
    #輸入四個變數分別給四個軸速度
    
def setangel(y):
    ontology= sim.getObject(player)
    angel = [-90*math.pi/180, y*math.pi/180, 0*math.pi/180]
    leftMotor = sim.getObject(player+'/joint_lf')
    rightMotor = sim.getObject(player+'/joint_rf')
    sim.setObjectOrientation(leftMotor, ontology, angel)
    sim.setObjectOrientation(rightMotor, ontology, angel)
    #輸入一個變數改變前輪方向
def controlangel(y):
    if keyboard.is_pressed('a'):
        setangel(-y)
    elif keyboard.is_pressed('d'):
        setangel(y)
    else:
        setangel(0)

def playercontrol(x,y):
    if keyboard.is_pressed('w'):
        setVelocity(x,x,x,x)
        controlangel(y)
    elif keyboard.is_pressed('s'):
        setVelocity(-x,-x,-x,-x)
        controlangel(y)
    elif keyboard.is_pressed('a'):
        setVelocity(-x,x,-x,x)
    elif keyboard.is_pressed('d'):
        setVelocity(x,-x,x,-x)
    elif keyboard.is_pressed('q'):
        # stop simulation
        sim.stopSimulation()
    else:
        setVelocity(0, 0, 0, 0)
        setangel(0)
  
while True:
    if keyboard.is_pressed('shift'):
        playercontrol(v+4,a-20)
    else:
        playercontrol(v,a)