from PIL import Image
import os

# Function to change image quality and save it
def change_image_quality(image_path, output_path, quality=50):
    with Image.open(image_path) as img:
        # Save with new quality
        img.save(output_path, quality=quality, optimize=True)

# Read image paths from text file
ImageListPath = r'C:\Users\ibrah\OneDrive\Documents\Personal_Webpage\image_list.txt'
with open(ImageListPath, 'r') as file:
    image_paths = file.readlines()

# Process each image
for image_path in image_paths:
    image_path = image_path.strip()  # Remove any extra whitespace or newline characters
    if os.path.isfile(image_path):
        # Check the file size
        file_size = os.path.getsize(image_path)
        if file_size > 1 * 1024 * 1024:  # Check if file size is greater than 1MB
            # Construct the new file name
            base, ext = os.path.splitext(image_path)
            new_image_path = base + "_2" + ext
            change_image_quality(image_path, new_image_path)
            print(f"Processed: {image_path}")
        else:
            print(f"Skipped (File size less than 1MB): {image_path}")

print("All applicable images processed successfully.")
