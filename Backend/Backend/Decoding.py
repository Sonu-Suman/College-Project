import base64
from PIL import Image
import io
from . import FaceReco

class DecodeBase:
    def decode_imgbase64(encoded):
        # print(encoded)
        print("Now I am decoding the picture.")
        image = base64.b64decode(str(encoded))
        # img = Image.open(io.BytesIO(image))
        # img.save('foo.jpeg')
        print("Now, I am decoded the image file and saved images in local folder.")
        FaceReco.Facereco.recognization(image)
