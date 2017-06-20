import cv2


cap = cv2.VideoCapture(0)

while True:

    ret, frame = cap.read()

    if ret:
        frame = cv2.GaussianBlur(frame, (11, 11), 7)
        nframe = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        nframe = cv2.Canny(nframe, 50, 50)

         #er zhi hua
        ret, thresh = cv2.threshold(nframe, 127, 255, 0)
        image, con, hie = cv2.findContours(nframe, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

        img = cv2.drawContours(frame, con, -1, (0, 255, 0), 2)
        cv2.imshow("frame", img)


    keycode = cv2.waitKey(1) & 0xFF
    if keycode == 27:
        break



cap.release()
cv2.destroyAllWindows()
