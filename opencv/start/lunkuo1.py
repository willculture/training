# -*- coding: utf-8 -*-
import cv2
import numpy as np

#img = np.zeros((200, 200), dtype=np.uint8) #创建一个200x200的黑色图片
#img[50: 150, 50:150] = 255 #将中间位置设定为白色
img = cv2.imread("1.jpg", 0)
canny = cv2.Canny(img, 200, 300)
#gray = cv2.cvtColor(img.copy(), cv2.COLOR_BGR2GRAY)
ret, thresh = cv2.threshold(canny.copy(), 127, 255, 0) #二值化操作

image, countours, hie = cv2.findContours(thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

color = cv2.cvtColor(img, cv2.COLOR_GRAY2BGR)

img = cv2.drawContours(color, countours, -1, (0, 255, 0), 2)

cv2.imshow("contours", img)

cv2.imshow("thresh", thresh)

cv2.waitKey()
cv2.destroyAllWindows()
