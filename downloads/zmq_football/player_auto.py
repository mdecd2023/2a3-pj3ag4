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

v=1
a=15
d=[0,0,0]



#選擇控制的球員
player='/a_player1'
#player='/a_player2'
#player='/a_player3'
#player='/a_player4'
#player='/b_player1'
#player='/b_player2'
#player='/b_player3'
#player='/b_player4'

def existball():
    try:
        Sphere= sim.getObject('/Sphere')
    except Exception as e:
        #print("Failed to get object: ", e)
        return 1
    return 0

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
def controlangel(y,a,f):
    if a<f:
        setangel(-y)
    elif a>f:
        setangel(y)
    else:
        setangel(0)
#def turnover():
    #floor= sim.getObject('/Floor')
    #player1 = sim.getObject(player)
    #a=sim.getObjectOrientation(player1,floor)
    #b=sim.getObjectPosition(player1,floor)
    #a[0]=0
    #a[1]=0
    #b[2]=0.3
    #sim.setObjectPosition(player1,floor,b)
    #sim.setObjectOrientation(player1,floor,a)
def xx(fs,fc):
    if int(fs*10)==int(fc*10) and int(fs*10)>0 :
        f= fs
        return f
    elif int(fs*10)==int(fc*10) and int(fs*10)<0 :
        f=math.pi-fc
        return f
    elif int(fs*10)==int(fc*-10) and int(fs*10)<0 :
        f=2*math.pi+fs
        return f
    elif int(fs*10)==int(fc*-10) and int(fs*10)>0 :
        f=math.pi+fc
        return f

    
def playercontrol(x,y):
    floor= sim.getObject('/Floor')
    ball=sim.getObject('/Sphere')
    player1 = sim.getObject(player)
    a1=sim.getObjectOrientation(player1,floor)
    b=sim.getObjectPosition(player1,floor)
    c=sim.getObjectPosition(ball,floor)
    
    d[0]=c[0]-b[0]
    d[1]=c[1]-b[1]
    #print(d)
    e=(d[0]**2+d[1]**2)**0.5
    fs=math.asin(d[1]/e)
    fc=math.acos(d[0]/e)

    f=xx(fs,fc)
    aa=a1[2]

    
    #print(a1[2])
    #print(int(fs*10))
    #print(int(fc*10))
    print(f)
    print(aa)
    faa=f-aa
    if faa>2*math.pi:
        faa=faa-2*math.pi
    elif faa<0:
        faa=faa+2*math.pi
    print(faa)

   
    if faa<10*math.pi/180 or faa>350*math.pi/180 :
        #print("0")
        setVelocity(x,x,x,x)
        controlangel(y,aa,f)
    #elif keyboard.is_pressed('s'):
        #setVelocity(-x,-x,-x,-x)
        #controlangel(y)
    elif faa<=math.pi and faa>10*math.pi/180 :
        setVelocity(-x,x,-x,x)
    elif faa>= math.pi and faa<350*math.pi/180 :
        setVelocity(x,-x,x,-x)
    #elif a1[0]>90*math.pi/180 or a1[0]<-90*math.pi/180 :
        #turnover()
    else:
        setVelocity(0, 0, 0, 0)
        setangel(0)
  
while existball()==0:
    if keyboard.is_pressed('shift'):
        playercontrol(v+4,a-20)
    else:
        playercontrol(v,a)