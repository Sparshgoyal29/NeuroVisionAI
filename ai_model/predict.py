import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image

# Load Model
model = load_model(
    "ai_model/models/brain_tumor_model.keras"
)

# Class Names
classes = [
    "glioma",
    "meningioma",
    "notumor",
    "pituitary"
]

# Image Path
img_path = "ai_model/test.jpg"

# Load Image
img = image.load_img(
    img_path,
    target_size=(128,128)
)

img_array = image.img_to_array(img)

img_array = img_array / 255.0

img_array = np.expand_dims(
    img_array,
    axis=0
)

# Prediction
prediction = model.predict(img_array)

predicted_class = classes[
    np.argmax(prediction)
]

confidence = np.max(prediction) * 100

print(
    f"Prediction: {predicted_class}"
)

print(
    f"Confidence: {confidence:.2f}%"
)