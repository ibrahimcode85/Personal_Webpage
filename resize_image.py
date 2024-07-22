import os
from PIL import Image

def process_images(directory):
    modified_images = []

    # Step 1: Go to the directory defined by the user
    os.chdir(directory)

    # Step 2: Loop through all the files in the directory
    for file_name in os.listdir(directory):
        file_path = os.path.join(directory, file_name)
        
        # Step 3: Check if the file is an image
        if os.path.isfile(file_path) and file_name.lower().endswith(('png', 'svg', 'jpg', 'jpeg', 'gif')):
            file_size = os.path.getsize(file_path) / (1024 * 1024)  # Convert size to MB

            if file_size < 0.5:
                # Step 4: If the image file size is less than 1MB, do nothing
                continue
            elif 0.5 <= file_size <= 2:
                # Step 5: If the image file size is between 1MB and 2MB, set the image quality to 60%
                quality = 50
            elif file_size > 2:
                # Step 6: If the image file size is bigger than 2MB, set the quality to 50%
                quality = 40

            # Open the image and save it with the new quality
            with Image.open(file_path) as img:
                original_size = os.path.getsize(file_path)
                img.save(file_path, quality=quality, optimize=True)
                updated_size = os.path.getsize(file_path)
                
                # Step 7: List down all the modified images
                modified_images.append(f"{file_name} | {original_size / 1024:.2f} KB | {updated_size / 1024:.2f} KB")

    # Save the list of modified images to a .txt file
    with open("modified_images.txt", "w") as log_file:
        for line in modified_images:
            log_file.write(line + "\n")

# Example usage
directory = r"C:\Users\ibrah\OneDrive\Documents\Personal_Webpage\dist"
process_images(directory)
