import cv2
import numpy

img = cv2.imread("1.jpg")

kern = numpy.array([
    [-1, -1, -1], [-1, 8, -1], [-1, -1, -1]
    ])


k = cv2.filter2D(img,-1, kern)


cv2.imshow("src", img)

cv2.imshow("k", k)


cv2.waitKey()

cv2.destroyAllWindows()
