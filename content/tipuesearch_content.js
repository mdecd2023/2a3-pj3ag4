var tipuesearch = {"pages": [{'title': 'About', 'text': '請各組員趕緊加入評分要求的相關說明 \n pj3第四組 \n \n 網頁: https://mdecd2023.github.io/2a3-pj3ag4/content/index.html \xa0 \n 倉儲: https://github.com/mdecd2023/2a3-pj3ag4 \xa0 \n PDF報告 \n \n 41023104 \n http://[2001:288:6004:17:2023:cda:4:1]:23020/   \n 41023112  \n http://[2001:288:6004:17:2023:cda:4:2]:23020/   \n 41023121 \n http://[2001:288:6004:17:2023:cda:4:3]:23020/   \n 41023134 \n http://[2001:288:6004:17:2023:cda:4:4]:23020/   \n 41023143 \n http://[2001:288:6004:17:2023:cda:4:5]:23020/   \n 41023146(組長) \n http://[2001:288:6004:17:2023:cda:4:6]:23020/ \n 41023147 \n http://[2001:288:6004:17:2023:cda:4:7]:23020/ \n 41023148 \n http://[2001:288:6004:17:2023:cda:4:8]:23020/ \n', 'tags': '', 'url': 'About.html'}, {'title': 'jitsi', 'text': '', 'tags': '', 'url': 'jitsi.html'}, {'title': '協同過程', 'text': '一 .0515協同過程 \n \xa0 \xa0  1.分配PJ3的任務: \n \xa0 \xa0 \xa0 \xa0 41023146:負責目標2,3,4 , 7 \n \xa0 \xa0 \xa0 \xa0 41023147,41023143:負責目標4,5 \n \xa0 \xa0 \xa0 \xa0 41023112,41023121:負責目標6 \n \xa0 \xa0 \xa0 \xa0 41023148:負責目標1,6 \n \xa0 \xa0 \xa0 \xa0 41023104,41023134:負責簡報 \n \n \n 二,0528協同過程 \n \xa0 \xa01.課堂上實際操作對戰 \n \xa0 \xa02.各組員將負責的部分詳細更新至倉儲 \n \xa0 \xa03.負責latex的同學要開始更新 \n \n \n == \n', 'tags': '', 'url': '協同過程.html'}, {'title': 'pj3', 'text': "pj3目標: \n 1.場景中的計時器(.ttm)(✅) \n 2.添加球員擊球技能、球員倒地再站起(✅) \n 3.球進球框不刪除改收集(圖檔已完成、只缺更改名稱的函式)(✅) \n 4.球員移動優化(例如:前進可以加右轉一起)(✅) \n 5.設計球員新外型(✅) \n 6.另外以建立以機械轉盤傳動計分系統(.ttm)(✅) \n 7.將記分板系統改為.ttm格式(✅) \n --- \n 完成進度: \n 1.第七點完成 ( pj3ag4_zmq_bubbleRob1.7z ,  scoreboard.ttm ) \n \xa0◉scoreboard.ttm中不含感測器只要將場景中感測器改名為sensor1、sensor2就可以用了(要跟board同一層) \n 2.第三點完成 ( pj3ag4_zmq_bubbleRob2.7z ) \n \xa0◉將sim.removeObject(ball)---刪除球 改為\xa0sim.setObjectAlias(ball, 'ball')---將球改名(球原本名稱為Sphere) \n 3.第五點完成 ( brickRob.ttm ) \n \xa0◉將原本車體改為磚塊型，除了解決車體本身會倒的問題之外，還將前進原理更改為四軸驅動，使轉彎更為順暢及合理。 \n \n 4.第四點完成 ( brickRob.7z ) 延伸更新:( brickRob2.7z ) \n \xa0◉將原本上相左右同時只能執行一個,改為前後可跟左右一起執行,操作性有很大的提升 \n \xa0 ◉延伸更新為第二種車體運作方式，其原理為更改整個車體角度使其變換方向 \n 5.第六點半完成 ( 機械計分板.rar & 機械記分板.ttt ) \n \xa0◉CoppeliaSim4.3.0和CoppeliaSim4.5的版本不相容 嘗試啟動記分板.ttt 是使用4.3.3版本開啟的齒輪之間會有所卡頓還需改正齒輪外型 \n \n \n \xa0◉ 將圖檔重畫後再重新導進 CoppeliaSim中,將齒輪的質量和慣性矩調整後即可順利運行 \n 6.修改尺寸並將磚塊型車體導入場景 ( zmq_brickRob1.7z ) \n \xa0◉修改足球大小 \n \xa0◉更改感測器位置 \n 7.完成計時器及調整計分板顏色 ( timer.ttm , scoreboard2.ttm ) \n \xa0◉利用sim.getSimulationTime()函數獲得模擬時間並配合記分板程式,完成實體計時器製作 \n \xa0◉將計分板改為黑底白字(將程式修改為停止模擬時分數歸零) \n 8.更改球員外型 ( player.7z ) \n \xa0◉添加球員手部 \n \xa0◉球員本體用導入的開啟碰撞會抖動，所以我加入skin物件(球員外型)然後將本體隱藏 \n 9.新機械計分板零件包 ( 48scoreboard.zip ) \n \xa0◉導入場景( scoreboard3.ttt \xa0 scoreboard3.ttm ) \n 10.整合所有物件 ( zmq_football.7z )(未完成) \n \xa0 ◉將計時器、球員、場地、記分板、機械記分板導入 \n \xa0 ◉添加八個球員的控制程式 \n 11.添加背號及空氣牆及zmq_IPv6 ( zmq_football2.7z ) \n \n 12.機械式記分板lua 程式 ( m_scoreboard.ttm , zmq_football3.7z ) \n \xa0 ◉添加機械式計分版程式利用sim.getJointTargetPosition() \n 獲取計分版角度再用 sim.setJointTargetPosition()更改角度 \n 13.在解決問題二的過程中因為轉矩調過大導致出現了能夠托馬斯迴旋的功能 ( player problem1.ttt , player problem1.ttm ) \n \n \xa0 \n 14.更改外型 ( player2.ttt , player.ttm ) \n \xa0 ◉ 解決翻車問題，增加本體的質量 \n 15.自訂IPv6位置設定過程 \n \n \n 16.統整場景 ( zmq_football4.7z ) \n \xa0 ◉將新的球員外型導入 \n \xa0 ◉因球員的質量有調整(變重),所以在場地上會晃動 \n \xa0 ◉將場地分解並改為無碰撞,並將場地移至比實體地板高一點點,這樣球員會在地板上移動,看起來在球場上,並且球員輪子有一點點陷入球場,像是草皮 \n \xa0 ◉更改球門顏色,並改為碰撞 \n 17.將球員程式添加倒地翻身 ( a_player1.py ) \n 18.簡化球員python程式 ( player.py ) \n \xa0 ◉將'/a_player'設為變數player使更改操控的球員更容易,只要改變數player,速度也作了同樣的改動 \n 19.將簡化程式及翻身程式統整 ( zmq_football5.7z ) \n \xa0 ◉將17及18點導入 \n \xa0 ◉將翻身程式按鍵改成空白建 \n \xa0 ◉刪除a_player1~b_player4.py程式 \n \n", 'tags': '', 'url': 'pj3.html'}, {'title': 'Detail', 'text': '在執行協同產品設計專案的過程, 透過 Github 倉儲可以有效採分散式版次管理的流程儲存多名組員各自分工所完成的內容. \n 然而在執行過程中, 會在不同時段產生不同性質的心得, 若要以內容管理的方式分章節式的架構儲存資料, 則可使用網站分頁的方式記錄. \n 若要採關鍵字, 特定主題或日記式的流程紀錄, 則可以使用網誌進行記錄. 由於 cmsimde 內建 Pelican blog 架構, 並且利用 Leo Editor 建立產生網誌的 Markdown 文章檔案. 假如多人共用同一個 .leo 專案檔, 則必須要在 XML 架構中進行多人資料版本的衝突解決, 此舉由於 Leo Editor 標註非常多元且屬性繁多, 因此在解決衝突過程, 非常容易造成無法回復原貌的 .leo 檔案. \n 因此, 使用 Leo Editor 維護網誌時, 建議每位組員在倉儲 users 目錄下專有一個 .leo 檔案, 且標示學號, 各組員每次改版, 原則上只編輯各自的 .leo 檔案, 而所產生位於 markdown 目錄中的 .md 檔案則也建議除了標示日期外, 也標示學號, 若各組員間交錯編輯 markdown 目錄中的 .md 檔案, 也僅需要在衝突產生時, 針對 .md 進行處理, 而無需針對 .leo 檔案進行衝突處理. \n 至於網際簡報檔案, 也建議各組員採相同模式, 將 config/reveal.leo 各複製一份至 users 目錄下針對 reveal 目錄下的簡報網頁進行編輯與衝突處理. \n', 'tags': '', 'url': 'Detail.html'}, {'title': 'Repository', 'text': '修改 init.py 將網站標題改為 2a3-pj3ag4 \n 建立 server_admin.py 使用 8140 port 但只用於 cad2 主機, 請勿在 stud2 主機中啟用 \n 參與協同設計專案的所有成員應該都必須充分了解為何要使用 Git 與網際內容管理系統 \n 假如針對開會討論以外的事項, 各組員希望導入測試用的內容, 無論是 LaTeX, 開發程式, 簡報或網站內容, 都可以開 branch 進行測試, 若在隨後的會議取得共識, 再將測試的內容合併至 main branch \n', 'tags': '', 'url': 'Repository.html'}, {'title': 'CAD', 'text': '在場景中所使用的所有零組件, 都應該要交代構想, 設計與繪圖流程, 並說明所使用的套件, 最後再提供各種格式的檔案下載, 若單一檔案超過 20MB, 則建議放入可以公開的 GDrive 或 OneDrive, 並提供下載連結. \n', 'tags': '', 'url': 'CAD.html'}, {'title': 'Lua', 'text': 'CoppeliaSim 的本體是採用 C++ 與 Qt 編寫, 並利用 Lua 來進行彈性設定與功能延伸, 將 Lua 寫在 .ttt 或 .ttm 中的好處是容易打包, 但在改版過程則沒有文字檔格式的改版資料, 因此較好的開發模式為: \n 在開發過程可以利用導入的方式將 Lua 程式放在 .ttt 之外, 等到最後要打包 .ttm 或 .ttt 時再將最後結果置入. \n', 'tags': '', 'url': 'Lua.html'}, {'title': 'Python', 'text': 'Legacy Python remote API 因為其效能無法與 zmqRemoteAPI 比較, 因此隨後的 remoteAPI 都將採用 zmq 的方式進行控制, 利用 Python 進行控制過程, 必須要能呈現不同改版的差異, 並在程式中詳加說明. \n 一來讓其他參考的分組或組員可以充分了解, 二來也可以在日後自己參考或延伸應用時, 以最短時間進入狀況. \n', 'tags': '', 'url': 'Python.html'}, {'title': 'Models', 'text': '在場景中所建立的各種 .ttm, 除了要詳細說明如何從 CAD 建立模型, 轉入 CoppeliaSim, 然後進行簡化與相關設定外, 還要提供檔案下載, 說明建立此模型的成員學號等資料, 最後再利用 .git 動畫檔案說明模型特定等. \n 因為目前最新的 cmsimde 為了讓手機拍攝的影像檔案能夠在上傳之前進行 resize, 因此破壞原有 .gif 檔案的動態特性. \n 這個問題尚未解決之前, 若要導入 .gif, 必須設法直接將檔案送到 images 目錄後再行引用. 例如: 可以直接在 Github 倉儲直接將 .gif 檔案 upload 到 images 目錄後, 然後在近端或中端伺服器中, 以 git pull 拉下後引用. \n \n', 'tags': '', 'url': 'Models.html'}, {'title': 'Scenes', 'text': '有關各版次所完成的場景與控制程式, 必須詳細說明各版本的差異 (即 release statement), 也可在團隊間學習如何使用 cmsimde 的 peliacan blog 與 reveal presentation, 而最後則必須學習如何在各組員同步編輯 LaTeX 內容的流程中, 完成 pj3 專案報告 pdf 檔案. \n', 'tags': '', 'url': 'Scenes.html'}, {'title': 'STL', 'text': '\n 1.球員皮膚圖檔( skin.7z ) \n \n', 'tags': '', 'url': 'STL.html'}, {'title': 'scoreboard', 'text': '機械記分板製作過程 \n 1.繪圖,參考以下影片進行繪製,縮減為十位數 \n \n', 'tags': '', 'url': 'scoreboard.html'}, {'title': 'details', 'text': '', 'tags': '', 'url': 'details.html'}, {'title': '連線說明', 'text': 'zmq連線設定(41023147) \n 1.將防火牆關閉(三個都關掉) \n \n 2.點擊進階設定 \n \n 3.組長點擊輸入規則，組員則點擊輸出規則 \n \n 4.接著點選新增規則，點選連接埠，規則選擇TCP，接著設定特定 連接埠 為23000-23050 \n \n 5.選擇允許連線 \n \n 6.接著設定名稱 \n \n 7.接著設定老師規定的IPv6位置 \n \n 8.接著將各組的zmq打開，注意zmq以及CoppeliaSim(4.5.1)需選擇有支援IPv6的版本 \n (若版本不對可至 https://mde.tw/cd2023/content/pj3.html \xa0下載) \n \n 9.接著打上對應的組長IPv6位置並連線 \n \n 10.接著在瀏覽器搜尋\xa0\xa0 http://[組長IP]:23020 \xa0 即可觀看組長場景並連線對戰 \n 11.影片說明 \n \n \n', 'tags': '', 'url': '連線說明.html'}, {'title': '電子記分板', 'text': "繪製: \n 電子記分板(LED)( scoreboard(LED).zip ) \n \n \n \n \n 程式: \n function sysCall_init()\n    score1_1 = 0\n    score1_2 = 0\n    score1_3 = 0\n    score1_4 = 0\n    score2_1 = 0\n    score2_2 = 0\n    score2_3 = 0\n    score2_4 = 0\n    s0={1,1,1,0,1,1,1}\n    s1={0,0,1,0,0,1,0}\n    s2={1,0,1,1,1,0,1}\n    s3={1,0,1,1,0,1,1}\n    s4={0,1,1,1,0,1,0}\n    s5={1,1,0,1,0,1,1}\n    s6={1,1,0,1,1,1,1}\n    s7={1,0,1,0,0,1,0}\n    s8={1,1,1,1,1,1,1}\n    s9={1,1,1,1,0,1,1}\n   \n    s={s0,s1,s2,s3,s4,s5,s6,s7,s8,s9}\n\n    score(0,'a')\n    score(0,'b')\n    score(0,'c')\n    score(0,'d')\nend\n \n \n 首先sysCall_init()這是初始設定,也就是只會執行一次的函式 \n 1.score1_1~2_4為得分的紀錄(後面會詳細講) \n 2.s0~s9為判斷變色的陣列,1為白色(亮)0為黑色(暗)(因為這個計分板式採用七段顯示器的原理) \n 3.s為二維陣列,中函s0~s9的陣列 \n 4. score(0,'a'),score(0,'b'),score(0,'c'),score(0,'d')這個為將記分板數字設為零 \n function score(x,y)\n    for i=0 ,9,1 do\n        if (x==i)then\n            for j = 0,6,1 do\n                local part = sim.getObject('./'..y..''..j..'')\n                if (s[i+1][j+1]==1) then\n                    sim.setShapeColor(part, nil, sim.colorcomponent_ambient_diffuse, {1, 1, 1})\n                else\n                    sim.setShapeColor(part, nil, sim.colorcomponent_ambient_diffuse, {0, 0, 0})\n                end\n            end\n        end\n    end\nend \n \n score這個函式是我自己添加的,作用是判斷分數是多少然後改變色,有兩個輸入值x為分數y為'a', 'b','c','d',分別代表記分板從左到右四個數字 \n 函式中第一個for迴圈執行九次配合下面if函式可判輸入的分數為多少,且超過九就不會執行 \n 其實可以直接從第二個for迴圈開始然後i改成x(因為這函式是從程式裡改出來的) \n 這個函式的重點是二維陣列配合if來判斷哪個部分需要亮哪個地方需要暗,然後用for迴圈執行七次將一個數字七個部位都上色 \n function sysCall_actuation()\n    sensor1 = sim.getObject('/sensor1')\n    sensor2 = sim.getObject('/sensor2')\n    result1=sim.readProximitySensor(sensor1)\n    result2=sim.readProximitySensor(sensor2)\n    \n    if(score1_1<10)then\n        if(result1>0)then\n            score1_2 = score1_1+1\n            if(score1_2==10 and score1_3<9)then\n                score1_2=0\n                score1_4=score1_3+1\n            end\n            local ball = sim.getObject('/Sphere')\n            sim.setObjectSpecialProperty(ball, sim.modelproperty_not_detectable)\n            score(score1_4,'a')\n            score(score1_2,'b')\n            score1_1=score1_2\n            score1_3=score1_4\n        end\n    else\n        sim.pauseSimulation()\n    end\n    if(score2_1<10)then\n        if(result2>0)then\n            score2_2 = score2_1+1\n            if(score2_2==10 and score2_3<9)then\n                score2_2=0\n                score2_4=score2_3+1\n            end\n            local ball = sim.getObject('/Sphere')\n            sim.setObjectSpecialProperty(ball, sim.modelproperty_not_detectable)\n            score(score2_4,'c')\n            score(score2_2,'d')\n            score2_1=score2_2\n            score2_3=score2_4\n        end\n    else\n        sim.pauseSimulation()\n    end\n    p=sim.getSimulationState()\n    if(p==22)then\n        score(0,'a')\n        score(0,'b')\n        score(0,'c')\n        score(0,'d')\n    end\nend \n 這是一直執行的程式 \n 判斷感測器是否有接觸來加分 \n 加分時去除球的可探測 \n 分數不能超過99 \n", 'tags': '', 'url': '電子記分板.html'}, {'title': '機械記分板製作', 'text': '1.齒輪式記分板( gear scoreboard ) (41023148) \n \n 零件繪製過程 \n \n \n \n \n 齒輪工程圖 \n \n   \n \n \n \n \n \n \n \n \n 零件組合過程 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 運動模擬 \n \n 草圖講解 \n \n 單位：mm,齒頂圓ø100，齒底圓ø79，節圓ø90，因齒數20，故齒間角為360/20等於18，間歇傳動用齒輪留2齒，18＊2＝36，正好是十邊形轉動一圈的角度，模數為90/20＝4.5。 \n \n 惰輪的配合需保持模數一致，故36/8＝4.5，且惰輪只影響轉向。在草圖上繪製齒形，以防傳動時產生干涉。 \n', 'tags': '', 'url': '機械記分板製作.html'}, {'title': '程式', 'text': "機械記分板程式: \n function sysCall_actuation()\n    sensor1 = sim.getObject('/sensor1')\n    sensor2 = sim.getObject('/sensor2')\n    result1=sim.readProximitySensor(sensor1)\n    result2=sim.readProximitySensor(sensor2)\n    --if (result1>0)then\n\n\n    if (result1>0)then\n        a3=a2+36*math.pi/180\n        sim.setJointTargetPosition(a1,a3)\n        a2=a3\n    elseif (result2>0)then\n        b3=b2+36*math.pi/180\n        sim.setJointTargetPosition(b1,b3)\n        b2=b3\n \n    end\n        \n\nend \n sysCall_actuation()為會一直重複執行的函式 \n 判斷sensor1和2是否有感測到東西判斷加分 \n 加分是採用軸旋轉每一分轉36度 \n", 'tags': '', 'url': '程式.html'}, {'title': '記分板導入coppeliasim詳細過程', 'text': '41023121李承翰 \n 首先先導入STL檔 \n \n 之後 將記分板記分板調整為須方向 \n \n 調整位置由於動作過於基本這裡快速帶過 \n \n 將其爆炸(分開) \n 做法:右鍵Edit>Grouping/Merging>Divide selected shapes \n \n 調整數字顏色這個動作要重複20次將所有德數字都改成想要的顏色 \n \n 完成後長這樣 \n \n 由於剛剛沒發現記分板方向錯誤所以這裡再次翻轉記分板調整方向 \n 特別的是在coppeliasim中可以使用shift加上滑鼠左鍵來拖動一次選取多個物件 \n \n 之後是改名環節啦要將物件改為對應位置的數字以方便程式寫入 \n \n 到此處的檔案 詳細過程講解1.ttt \n 之後開始加入軸來讓齒輪運轉 \n 首先先新增軸 \n \n 之後調整軸的大小以方便觀察 \n \n 旋轉x軸讓軸可以轉到需要的方向 \n \n 這裡先選軸在選要對中心的物體 \n \n 完成後長這樣 \n \n 設定完後複製軸之後貼上兩次然後重複上個步驟調整位置 \n \n 調整記分板顏色 \n \n 之後開始調整個物件的依賴將齒輪依附到剛剛設定的軸上 \n 再將齒輪依附到板子上 \n 再將分數版依附到齒輪上 \n \n 之後開始調整軸的轉動以方便檢查是否會卡住 \n \n 這裡要注意除了主動軸其他軸也要設定轉速為0不然模擬時齒輪會隨意偏擺 \n \n 之後調整它的質量和慣性矩 \n \n \n 完成後記分板就能順利運轉啦 \n \n 圖檔: 詳細過程講解2.ttt \n 之後是轉成.ttm檔的教學 \n 選擇一的面的物體雙擊找到model properties打勾 \n \n 之後點選這裡重複兩次 \n \n 會先跳出地板可以質借按no之後存取我們想要的物件按OK \n \n \n 之後記得到資料夾有沒有存成功喔 \n 圖檔: 詳細過程講解.ttm \n', 'tags': '', 'url': '記分板導入coppeliasim詳細過程.html'}, {'title': '球員倒地翻身', 'text': '添加球員倒地翻身程式(41023134) \n  elif keyboard.is_pressed(\'e\'):\n        floor= sim.getObject(\'/Floor\')\n        player = sim.getObject(\'/a_player1\')\n        a=sim.getObjectOrientation(player,floor)\n        b=sim.getObjectPosition(player,floor)\n        a[0]=0\n        a[1]=0\n        b[2]=b[2]+0.2\n        sim.setObjectPosition(player,floor,b)\n        sim.setObjectOrientation(player,floor,a)\n        \n elif keyboard.is_pressed(\'e\'): 如果按"e"就執行 \n floor= sim.getObject(\'/Floor\') 獲取地板的句柄 \n player = sim.getObject(\'/a_player1\') 獲取球員的句柄 \n a=sim.getObjectOrientation(player,floor) 獲取相對於地板的球員方向 \n b=sim.getObjectPosition(player,floor) 獲取相對於地板的球員位置 \n a[0]=0 球員的x角度為0 \n a[1]=0 球員的y角度為0 \n b[2]=b[2]+0.2 球員的z位置上升0.2 \n sim.setObjectPosition(player,floor,b) 設定球員相對於地板的位置 \n sim.setObjectOrientation(player,floor,a) 設定球員相對於地板的方向 \n', 'tags': '', 'url': '球員倒地翻身.html'}, {'title': '球員製作及程式', 'text': "球員製作 (4102143) \n 1先繪製主體及左右手的草圖\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 2.填料主體 \n \n 3.再來把左右手的溝槽除掉((不一次長出來的原因是因為組長需要左右手單獨一個零件所以有槽比較好定位 \n \n 4.左手及右手個別單一填料出來 \n \n 球員皮膚導入 \n 1.擺放好實體後導入皮膚 \n \n 2.一次選取三個檔案開啟就不用對位置了 \n \n 3. 調整大小及大致對上實體後依附在player上 \n \n 球員程式製作 (4102146) \n 設定球員輪子旋轉 \n def setVelocity(lfwV, rfwV,lbwV, rbwV):\n    leftMotor1 = sim.getObject(player+'/joint_lf')\n    rightMotor1 = sim.getObject(player+'/joint_rf')\n    leftMotor2 = sim.getObject(player+'/joint_lb')\n    rightMotor2 = sim.getObject(player+'/joint_rb')\n    sim.setJointTargetVelocity(leftMotor1, lfwV)\n    sim.setJointTargetVelocity(rightMotor1, rfwV)\n    sim.setJointTargetVelocity(leftMotor2, lbwV)\n    sim.setJointTargetVelocity(rightMotor2, rbwV) \n 設定球員前輪方向 \n def setangel(y):\n    ontology= sim.getObject(player)\n    angel = [-90*math.pi/180, y*math.pi/180, 0*math.pi/180]\n    leftMotor = sim.getObject(player+'/joint_lf')\n    rightMotor = sim.getObject(player+'/joint_rf')\n    sim.setObjectOrientation(leftMotor, ontology, angel)\n    sim.setObjectOrientation(rightMotor, ontology, angel) \n 按鍵控制球員左右轉 \n def controlangel(y):\n    if keyboard.is_pressed('a'):\n        setangel(-y)\n    elif keyboard.is_pressed('d'):\n        setangel(y)\n    else:\n        setangel(0) \n 按鍵控制 球員程式(w,a,s,d,q) \n def playercontrol(x,y):\n    if keyboard.is_pressed('w'):\n        setVelocity(x,x,x,x)\n        controlangel(y)\n    elif keyboard.is_pressed('s'):\n        setVelocity(-x,-x,-x,-x)\n        controlangel(y)\n    elif keyboard.is_pressed('a'):\n        setVelocity(-x,x,-x,x)\n    elif keyboard.is_pressed('d'):\n        setVelocity(x,-x,x,-x)\n    elif keyboard.is_pressed('q'):\n        # stop simulation\n        sim.stopSimulation()\n    else:\n        setVelocity(0, 0, 0, 0)\n        setangel(0) \n 控制球員速度(主要在執行的部分,一直執行) \n while True:\n    if keyboard.is_pressed('shift'):\n        playercontrol(v+4,a-20)\n    else:\n        playercontrol(v,a) \n \n", 'tags': '', 'url': '球員製作及程式.html'}, {'title': 'Final', 'text': '\n \n', 'tags': '', 'url': 'Final.html'}, {'title': '心得', 'text': '41023147: \n 在這次協同的過程中我學到了很多，我覺得這種分工方式很有效率，不但可以知道組員的更新進度，再把自己做的東西更新上去後，可以看到結合了許多人意見以及努力的成果，研究的過程也很有趣，我獲益良多，做出來的東西很有成就感，但我認為有些部分還可以再做優化，像是球員的外型或是場景的設計等部分，後續如果將其以3D列印的方式呈現出來我認為很有趣，搭配上程式的撰寫以及機電整合的部分，我認為整體完整性會更好。 \n 41023121: \n 這學期的遊戲製作很有意思，讓我們體驗做遊戲所會遇到的問題，有些已經順利修正但也衍伸出不少新的問題，再導入記分板時也卡了很久不轉就是不轉載最後到處調整之後才找到解決方法，場景到了最後一版完成度已經相當的高也加入了機械式的記分板整體來說這學期做的遊戲十分有意思，也特別感謝我組員及組長讓我們的計畫可以順利運行也特別謝謝老師幫我們解決了連線上的問題。 \n 41023112: \n 這學期老師透過協同的方式讓我們對一項產品的開發進行團隊合作，每個人都被分配到不同的任務，雖然每個人負責的東西不一樣，但因為大家的資訊是共享的，所以可以讓我們有效率地跟上進度。在這過程中我學習到的東西來的比上學期還要來的多更多，又加上chatGPT的出現搭配著學習，不論是場景的建設還是球員的設計，都讓我更加了解程式的設計與更熟悉CoppeliaSim的操作和了解其功能。 \n 41023143: \n 在這學期的協同課程裡，要一起製作一套遊戲以及分組討論要費盡很大的心思，從無到有過程要依照組員、組長的想法以及提供自己的意見慢慢地做優化，我做的部分是製作球員以及球員導入還有做控制的優化，一開始不能再直行時邊往左或往右後面結論初將輪胎角度改變就可以了，還有在球員相互碰撞時會翻車，所以我們實驗了很久最終是更改球員的重量使其不易翻車，但是過程中質量太大會導致動不了所以要調整到一個平衡，雖然我們的football最終版還是有bug但是相較於剛開始好很多，小參數要調整例如:向左右前方行走的角度可以再大點、球員翻出牆時可以重新歸位、以及球員不能在自己的球門待太久，經過這學期的洗禮讓我對CoppeliaSim又更進一步認識了，對戰過程中要跟自己組的球員溝通並且組織進攻以及防守做有效率的進攻防守。', 'tags': '', 'url': '心得.html'}]};