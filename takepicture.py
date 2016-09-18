import picamera
import time
from datetime import datetime
camera = picamera.PiCamera()
camera.start_preview()

timestamp = int(datetime.now().strftime("%s"))*1000
camera.capture(str(timestamp)+'.png')

