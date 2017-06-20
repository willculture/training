import cv2


img = cv2.imread("1.jpg", 0)

canny = cv2.Canny(img, 200, 300)


cv2.imshow("canny", canny)

cv2.waitKey()

cv2.destroyAllWindows()
