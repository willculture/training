import cv2

cap = cv2.VideoCapture(0)

while True:

    ret, frame = cap.read()

    detector = cv2.AKAZE_create()
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    kps, descs = detector.detectAndCompute(gray, None)
    cv2.drawKeypoints(frame, kps, frame, (0, 255, 0))
    cv2.imshow("frame", frame)

    k = cv2.waitKey(60) & 0xFF
    if k == 27:
        break

cv2.destroyAllWindows()
cap.release()
