import random
import librosa
import numpy as np

# Load your own audio files here
audio_files = [
    "path_to_audio_file1.mp3",
    "path_to_audio_file2.mp3",
    # Add more audio files here
]

# Define music theory rules for harmonic compatibility
def calculate_compatibility(song_key, compatible_keys):
    compatibility_scores = {}
    for key in compatible_keys:
        key_difference = (key - song_key) % 12
        if key_difference <= 2:  # Example rule: Compatibility if key difference <= 2
            compatibility_scores[key] = 1.0
        else:
            compatibility_scores[key] = 0.0
    return compatibility_scores

# Calculate the similarity between two keys based on their distance
def calculate_key_similarity(key1, key2):
    key_difference = abs(key1 - key2)
    # Normalize the similarity score to be between 0 and 1
    similarity = 1.0 - min(key_difference, 12 - key_difference) / 6.0
    return similarity

# Create the dataset with compatibility labels and similarity scores
full_dataset = []

for audio_file in audio_files:
    # Load audio file and extract features
    y, sr = librosa.load(audio_file)
    pitches, magnitudes = librosa.piptrack(y=y, sr=sr)
    chroma = librosa.feature.chroma_cens(y=y, sr=sr)
    
    # Simulate key estimation (you may use more sophisticated methods)
    song_key = random.choice(range(12))
    
    compatible_keys = [0, 2, 4, 5, 7, 9, 11]  # Example compatible keys
    
    compatibility_scores = calculate_compatibility(song_key, compatible_keys)
    
    for compatible_key, compatibility_label in compatibility_scores.items():
        key_similarity = calculate_key_similarity(song_key, compatible_key)
        full_dataset.append((song_key, compatible_key, compatibility_label, key_similarity))

# Print the generated dataset
for song_key, compatible_key, compatibility_label, key_similarity in full_dataset:
    print(f"Song Key: {song_key}, Compatible Key: {compatible_key}, Compatibility: {compatibility_label}, Key Similarity: {key_similarity:.2f}")
