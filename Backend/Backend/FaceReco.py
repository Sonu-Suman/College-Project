import pickle
import cv2
import cvzone
import numpy as np
import face_recognition
import io
from PIL import Image


# --------------------------- For Webcam ---------------------------------------------
# cap = cv2.VideoCapture(0)           # camera opening for video capturing
# cap.set(3, 640)                     # video width
# cap.set(4, 480)                     # Video height
#
# # We are checking for camera opening.
# if not cap.isOpened():
#     print("error opening camera")
#     exit()

# ------------------------ XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -------------------------------------

class Facereco:
    def recognization(Img):

        # Import the encode file from EncodeGenerator.py program file
        file = open("C:/Users/HP/React/Testing/Backend/Backend/encodelist.p", 'rb')
        encodeListKnownWithId = pickle.load(file)
        file.close()
        encodeListKnown, studentIds = encodeListKnownWithId
        # print(studentIds)


        # while True:
            # ------------------ For Webcam ------------------------------------------------------
            # success, img = cap.read()
            # if not success:
            #     print("Can't receive frame (stream end?). Exiting ...")
            #     break
            # -------------------  xxxxxxxxxxxxxxxxx ---------------------------------------------
            # img = cv2.imread("C:/Users/HP/React/Testing/Backend/foo.jpeg")
        img = Image.open(io.BytesIO(Img))
        img = cv2.cvtColor(np.array(img), cv2.COLOR_RGB2BGR)

        imgS = cv2.resize(img, (0, 0), None, 0.25, 0.25)

        # Our operations on the frame come here
        imgS = cv2.cvtColor(imgS, cv2.COLOR_BGR2RGB)

        faceCurFrame = face_recognition.face_locations(imgS)
        encodeCurFrame = face_recognition.face_encodings(imgS, faceCurFrame)

        for encodeface, faceloc in zip(encodeCurFrame, faceCurFrame):
            matches = face_recognition.compare_faces(encodeListKnown, encodeface)
            faceDis = face_recognition.face_distance(encodeListKnown, encodeface)
            # print("Face matches : ", matches, " Face Distance : ", faceDis)
            matchId = np.argmin(faceDis)

            if matches[matchId]:
                y1, x2, y2, x1 = faceloc
                y1, x2, y2, x1 = y1*4, x2*4, y2*4, x1*4
                bbox = x1, y1, x2-x1, y2-y1
                img = cvzone.cornerRect(img, bbox=bbox, rt=0)
                print("Matched student name : ", studentIds[matchId])
            else:
                print("You are not registered in the database.")


        cv2.imshow("Face Recognition system", img)
        # if cv2.waitKey(1) == ord('q'):
        #     break


# if __name__ == "__main__":
#     facedetection = Facereco()
#     facedetection.recognization()