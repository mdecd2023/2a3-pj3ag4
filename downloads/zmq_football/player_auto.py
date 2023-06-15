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
sim.startSimulation()
print('Simulation started')

v=2
a=10
rp=[0,0,0]

#選擇控制的球員
player1='/a_player1'
player2='/a_player2'
player3='/a_player3'
player4='/a_player4'
player5='/b_player1'
player6='/b_player2'
player7='/b_player3'
player8='/b_player4'

def existball():
    try:
        Sphere= sim.getObject('/Sphere')
    except Exception as e:
        #print("Failed to get object: ", e)
        return 1
    return 0

def setVelocity(lfwV, rfwV,lbwV, rbwV,player):
    leftMotor1 = sim.getObject(player+'/joint_lf')
    rightMotor1 = sim.getObject(player+'/joint_rf')
    leftMotor2 = sim.getObject(player+'/joint_lb')
    rightMotor2 = sim.getObject(player+'/joint_rb')
    sim.setJointTargetVelocity(leftMotor1, lfwV)
    sim.setJointTargetVelocity(rightMotor1, rfwV)
    sim.setJointTargetVelocity(leftMotor2, lbwV)
    sim.setJointTargetVelocity(rightMotor2, rbwV)
    #輸入四個變數分別給四個軸速度
    
def setangel(y,player):
    ontology= sim.getObject(player)
    angel = [-90*math.pi/180, y*math.pi/180, 0*math.pi/180]
    leftMotor = sim.getObject(player+'/joint_lf')
    rightMotor = sim.getObject(player+'/joint_rf')
    sim.setObjectOrientation(leftMotor, ontology, angel)
    sim.setObjectOrientation(rightMotor, ontology, angel)
    #輸入一個變數改變前輪方向
    
def controlangel(y,angle,player):
    if angle<10*math.pi/180:
        setangel(-y,player)
    elif angle>350*math.pi/180:
        setangel(y,player)
    else:
        setangel(0,player)

#def xx(fs,fc):
   # f=0
    #if int(fs*10)==int(fc*10) and int(fs*10)>0 :
        #f= fs
        #return f
    #elif int(fs*10)==int(fc*10) and int(fs*10)<0 :
        #f=math.pi-fc
        #return f
    #elif int(fs*10)==int(fc*-10) and int(fs*10)<0 :
       # f=2*math.pi+fs
        #return f
    #elif int(fs*10)==int(fc*-10) and int(fs*10)>0 :
        #f=math.pi+fc
        #return f
    #else:
        #return f
#object1的坐標軸上object2所在的角度相對於object1本身的角度
def getangle(object1,object2):
    floor= sim.getObject('/Floor')
    orientation1=sim.getObjectOrientation(object1,floor)
    position1=sim.getObjectPosition(object1,floor)
    position2=sim.getObjectPosition(object2,floor)
    rp[0]=position2[0]-position1[0]
    rp[1]=position2[1]-position1[1]
    #print(d)
    d=(rp[0]**2+rp[1]**2)**0.5

    atan=math.atan2(rp[1],rp[0])
 
    ra_o1=atan-orientation1[2]
    if ra_o1>2*math.pi:
        ra_o1=ra_o1-2*math.pi
        return ra_o1,d
    elif ra_o1<0:
        ra_o1=ra_o1+2*math.pi
        return ra_o1,d
    else:
        return ra_o1,d
    
def trackobject(x,y,f,player):
    if f<10*math.pi/180 or f>350*math.pi/180 :
        setVelocity(x,x,x,x,player)
        controlangel(y,f,player)
    elif f<=math.pi and f>10*math.pi/180 :
        setVelocity(-x/2,x/2,-x/2,x/2,player)
    elif f>= math.pi and f<350*math.pi/180 :
        setVelocity(x/2,-x/2,x/2,-x/2,player)
    else:
        setVelocity(0, 0, 0, 0,player)
        setangel(0,player)
    
def playercontrol(x,y,player):
    floor= sim.getObject('/Floor')
    ball=sim.getObject('/Sphere')
    sensor2=sim.getObject('/sensor2')
    player1 = sim.getObject(player)
 

   
    faa =getangle(player1,ball)[0]
    fdd =getangle(player1,ball)[1]
    fbb =getangle(player1,sensor2)[0]
    if fdd>0.15:
        trackobject(x,y,faa,player)
    elif fdd<=0.15:
        trackobject(x,y,fbb,player)
        
        
  
while existball()==0:
    playercontrol(v,a,player1)
    #playercontrol(v,a,player2)
    #playercontrol(v,a,player3)
    #playercontrol(v,a,player4)
    #playercontrol(v,a,player5)
    #playercontrol(v,a,player6)
    #playercontrol(v,a,player7)
    #playercontrol(v,a,player8)
    