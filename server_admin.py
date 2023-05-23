# this is for cd2023 course project3, this port 8140 is only for cad2 server
# do not use this server file on stud2 server
from waitress import serve
from cmsimde import flaskapp

serve(flaskapp.app, listen='127.0.0.1:9140', threads=8)
