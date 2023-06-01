# pip install pyzmq cbor keyboard
from zmqRemoteApi import RemoteAPIClient
from zmqRemoteApi_IPv6 import RemoteAPIClient
import keyboard
import random
import math

client = RemoteAPIClient('localhost', 23000)
#client = RemoteAPIClient('2001:288:6004:17:2023:cda:4:6', 23000)

print('Program started')
sim = client.getObject('sim')
#sim.startSimulation()
print('Simulation started')

player='/a_player1'
v=8


def setBubbleRobVelocity(leftWheelVelocity1, rightWheelVelocity1,leftWheelVelocity2, rightWheelVelocity2):
    leftMotor1 = sim.getObject(player+'/joint_lf')
    rightMotor1 = sim.getObject(player+'/joint_rf')
    leftMotor2 = sim.getObject(player+'/joint_lb')
    rightMotor2 = sim.getObject(player+'/joint_rb')
    sim.setJointTargetVelocity(leftMotor1, leftWheelVelocity1)
    sim.setJointTargetVelocity(rightMotor1, rightWheelVelocity1)
    sim.setJointTargetVelocity(leftMotor2, leftWheelVelocity2)
    sim.setJointTargetVelocity(rightMotor2, rightWheelVelocity2)
    #輸入四個變數分別給四個軸速度
    
def setBubbleRobangel(a):
    brickRob= sim.getObject(player)
    angel = [-90*math.pi/180, a*math.pi/180, 0*math.pi/180]
    leftMotor = sim.getObject(player+'/joint_lf')
    rightMotor = sim.getObject(player+'/joint_rf')
    sim.setObjectOrientation(leftMotor, brickRob, angel)
    sim.setObjectOrientation(rightMotor, brickRob, angel)
    #輸入一個變數改變前輪方向
  
while True:
    if keyboard.is_pressed('w'):
        setBubbleRobVelocity(v,v,v,v)
        if keyboard.is_pressed('a'):
            setBubbleRobangel(-40)
        elif keyboard.is_pressed('d'):
            setBubbleRobangel(40)
        else:
            setBubbleRobangel(0)
    elif keyboard.is_pressed('s'):
        setBubbleRobVelocity(-v,-v,-v,-v)
        if keyboard.is_pressed('a'):
            setBubbleRobangel(-40)
        elif keyboard.is_pressed('d'):
            setBubbleRobangel(40)
        else:
            setBubbleRobangel(0)
    elif keyboard.is_pressed('a'):
        setBubbleRobVelocity(-v,v,-v,v)
    elif keyboard.is_pressed('d'):
        setBubbleRobVelocity(v,-v,v,-v)
    elif keyboard.is_pressed('q'):
        # stop simulation
        sim.stopSimulation()
    else:
        setBubbleRobVelocity(0, 0, 0, 0)
        setBubbleRobangel(0)




