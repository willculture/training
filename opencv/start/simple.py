import cv2

import numpy

b = [
    [255],
    [0],
    [0]
]
g = [
    [0],
    [255],
    [0]
]
r = [
    [0],
    [0],
    [255]
]

frame = [b, g, r]
cv2.imwrite("simple.jpg",  numpy.array(frame));
print(numpy.array(frame).shape)
