import os, numpy, PIL
import glob
from PIL import Image

# gets all pngs in current directory and calculates
# average greenness for each png and outputs them into a .txt
# in the same directory

text_file = open("greenness.txt", "w")

imlist = []
for filename in glob.glob('*.png'):
    im=Image.open(filename)
    imlist.append(im)

threshold = 50

for im in imlist:
	pixels = im.load()
	width, height = im.size
	size = 0
	avgr = 0
	avgg = 0
	avgb = 0
	greenness = 0
	for x in range(width):
	    for y in range(height):
	        r,g,b = pixels[x, y]
		if(g < threshold)
			pixels[x,y] = (0, 0, 255)
			continue
		avgr += r 
	        avgg += g
	        avgb += b
		size++
	avgr = avgr/size
	avgg = avgg/size
	avgb = avgb/size
	total = avgr+avgg+avgb
	greenness = float(avgg)/float(total)
	text_file.write("{},".format(im.filename)+"{}\n".format(greenness))
