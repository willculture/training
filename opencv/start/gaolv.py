import cv2
import numpy as np
from scipy import ndimage

kl_3x3 = np.array([
    [-1, -1, -1],
    [-1, 8, -1],
    [-1, -1, -1]
])

kl_5x5 = np.array([
    [-1, -1, -1, -1, -1],
    [-1, 1, 2, 1, -1],
    [-1, 2, 4, 2, -1],
    [-1, 1, 2, 1, -1],
    [-1, -1, -1, -1, -1]
])

img = cv2.imread("1.jpg", 0)

k3 = ndimage.convolve(img, kl_3x3)
k5 = ndimage.convolve(img, kl_5x5)

blurred = cv2.GaussianBlur(img, (11, 11), 0)
gf = img - blurred

cv2.imshow("private", img)
cv2.imshow("k3", k3)
cv2.imshow("k5", k5)
cv2.imshow("gf", gf)


cv2.waitKey()
cv2.destroyAllWindows()
