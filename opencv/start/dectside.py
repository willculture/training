import cv2


img = cv2.imread("1.jpg")



blur = cv2.medianBlur(img, 3)

gray = cv2.cvtColor(blur, cv2.COLOR_BGR2GRAY)

lap = cv2.Laplacian(gray, cv2.CV_8U, gray, ksize=5)

print(gray)
##############
na = (1.0/255) * (255 - gray)
chs = cv2.split(img)

print("=============")

print(chs)

for ch in chs:
    ch[:] = ch * na
dst = 0
cv2.merge(chs, dst)


#########

cv2.imshow("src", img)

cv2.imshow("blur", blur)

cv2.imshow("lap", lap)

cv2.imshow("dst", dst)


cv2.waitKey()
cv2.destroyAllWindows()
